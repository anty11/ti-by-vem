// Relays the AI gateway's streamed answer (Responses API, server-sent events) to the
// browser as plain text, and hands the full answer to onFinish for storage.

type GatewayEvent = {
  type?: string;
  delta?: string;
  text?: string;
  error?: unknown;
  response?: {
    error?: unknown;
    output?: { type?: string; content?: { type?: string; text?: string }[] }[];
  };
};

export function relayAnswerStream(
  upstream: ReadableStream<Uint8Array>,
  options: {
    /** Shown to the customer if the model produced no text at all. */
    emptyAnswer: string;
    /** Called once with everything the customer saw (also when they navigate away). */
    onFinish: (answer: string) => Promise<void>;
  },
): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const reader = upstream.getReader();
  const eventTypes = new Map<string, number>();
  let buffer = "";
  let answer = "";
  let finished = false;

  const finish = async () => {
    if (finished) return;
    finished = true;
    await options.onFinish(answer);
  };

  // response.output_text.delta carries the answer piece by piece; output_text.done and
  // response.completed carry the full text and are used only if no deltas arrived.
  const handleEvent = (raw: string, emit: (text: string) => void) => {
    const payload = raw
      .split("\n")
      .filter((l) => l.startsWith("data:"))
      .map((l) => l.slice(5).trim())
      .join("\n");
    if (!payload || payload === "[DONE]") return;
    let event: GatewayEvent;
    try {
      event = JSON.parse(payload) as GatewayEvent;
    } catch {
      return; // keepalive or malformed chunk
    }
    const type = event.type ?? "unknown";
    eventTypes.set(type, (eventTypes.get(type) ?? 0) + 1);
    if (type === "response.output_text.delta" && event.delta) {
      emit(event.delta);
    } else if (type === "response.output_text.done" && !answer && event.text) {
      emit(event.text);
    } else if (type === "response.completed" && !answer) {
      const text = (event.response?.output ?? [])
        .flatMap((item) => item.content ?? [])
        .filter((part) => part.type === "output_text" && part.text)
        .map((part) => part.text)
        .join("");
      if (text) emit(text);
    } else if (type === "error" || type === "response.failed") {
      console.error(
        "AI gateway stream error",
        JSON.stringify(event.error ?? event.response?.error ?? event),
      );
    }
  };

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const emit = (text: string) => {
        answer += text;
        controller.enqueue(encoder.encode(text));
      };
      // Keep reading until some text goes out or the stream ends. The first events
      // (response.created, in_progress, …) carry no text, and returning from pull()
      // without enqueuing anything stalls the stream: the browser never gets an answer.
      const before = answer.length;
      while (answer.length === before) {
        const { done, value } = await reader.read();
        if (done) {
          buffer += decoder.decode();
          if (buffer.trim()) handleEvent(buffer.replace(/\r\n/g, "\n"), emit);
          if (!answer.trim()) {
            console.error("AI gateway returned no text", Object.fromEntries(eventTypes));
            controller.enqueue(encoder.encode(options.emptyAnswer));
          }
          controller.close();
          await finish();
          return;
        }
        // Normalise the whole buffer so a \r\n split across two chunks is still caught.
        buffer = (buffer + decoder.decode(value, { stream: true })).replace(/\r\n/g, "\n");
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() ?? "";
        for (const chunk of chunks) handleEvent(chunk, emit);
      }
    },
    async cancel(reason) {
      // The customer navigated away: keep whatever the model had said so far.
      await finish();
      return reader.cancel(reason);
    },
  });
}
