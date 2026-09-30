import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface AccessCodesProps {
  itinerary?: string;
  codes?: string[];
}

function AccessCodesEmail({ itinerary = "your itinerary", codes = ["VEM-XXXX-XXXX"] }: AccessCodesProps) {
  return (
    <Html>
      <Head />
      <Preview>Your access code for {itinerary}</Preview>
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "Georgia, serif", color: "#1f2a37" }}>
        <Container style={{ padding: "32px 24px", maxWidth: "520px" }}>
          <Text style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#8a8f98" }}>
            travel intelligence by VeM
          </Text>
          <Heading style={{ fontSize: "26px", fontWeight: 400 }}>Your trip is ready</Heading>
          <Text style={{ fontSize: "15px", lineHeight: "24px" }}>
            Thank you for choosing {itinerary}. Use the code below on our website under My trips to unlock the full guide.
          </Text>
          <Section style={{ backgroundColor: "#f4efe6", borderRadius: "12px", padding: "16px 20px", margin: "20px 0" }}>
            {codes.map((code) => (
              <Text key={code} style={{ fontFamily: "monospace", fontSize: "18px", margin: "4px 0" }}>
                {code}
              </Text>
            ))}
          </Section>
          <Text style={{ fontSize: "15px", lineHeight: "24px" }}>Happy travels,<br />V & eM</Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: AccessCodesEmail,
  subject: (data) => `Your access code — ${data.itinerary ?? "travel intelligence by VeM"}`,
  displayName: "Itinerary access code",
  previewData: { itinerary: "Switzerland in winter", codes: ["VEM-AB12-CD34"] },
} satisfies TemplateEntry;
