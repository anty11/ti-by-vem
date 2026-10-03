import type { Lang } from "./i18n";

export type AccessCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  signInTitle: string;
  signUpTitle: string;
  email: string;
  password: string;
  signIn: string;
  signUp: string;
  toSignUp: string;
  toSignIn: string;
  google: string;
  checkEmail: string;
  alreadyRegistered: string;
  accountCreated: string;
  signedInGoogle: string;
  signOut: string;
  signedInAs: string;
  redeemTitle: string;
  redeemText: string;
  codePlaceholder: string;
  redeem: string;
  redeemed: string;
  myTrips: string;
  noTrips: string;
  open: string;
  unknownCode: string;
  usedCode: string;
  loading: string;
  tierChat: string;
  tierUs: string;
};

export type TripCopy = {
  back: string;
  locked: string;
  lockedText: string;
  unlock: string;
  chatTitle: string;
  chatIntro: string;
  chatEmpty: string;
  chatExhausted: string;
  messagesLeft: string;
  placeholder: string;
  send: string;
  thinking: string;
  error: string;
  days: string;
  ground: string;
  budget: string;
  shape: string;
  whatsapp: string;
  whatsappText: string;
};

export const accessCopy: Record<Lang, AccessCopy> = {
  en: {
    title: "Your trips — travel intelligence by VeM",
    description:
      "Sign in and unlock the itinerary and trip chatbot you bought with your access code.",
    eyebrow: "Members",
    h1: "Your trips live here.",
    intro:
      "Sign in, enter the code we sent you after your purchase, and your full itinerary plus the trip chatbot opens up.",
    signInTitle: "Sign in",
    signUpTitle: "Create an account",
    email: "Email",
    password: "Password",
    signIn: "Sign in",
    signUp: "Create account",
    toSignUp: "No account yet? Create one",
    toSignIn: "Already have an account? Sign in",
    google: "Continue with Google",
    checkEmail:
      "Almost there — we've sent a confirmation link to your email. Open it, then sign in here. (Check spam too.)",
    alreadyRegistered:
      "This email already has an account. If you created it with Google, use “Continue with Google” — otherwise switch to Sign in.",
    accountCreated: "Your account is ready. Welcome!",
    signedInGoogle: "You're signed in with Google. Your account is ready.",
    signOut: "Sign out",
    signedInAs: "Signed in as",
    redeemTitle: "Unlock a trip",
    redeemText: "Enter the access code from your purchase email.",
    codePlaceholder: "VEM-XXXX-XXXX",
    redeem: "Unlock",
    redeemed: "Unlocked. Enjoy the trip.",
    myTrips: "Your unlocked trips",
    noTrips: "Nothing unlocked yet.",
    open: "Open trip",
    unknownCode: "We don't know this code. Check it letter by letter.",
    usedCode: "This code is already used by another account.",
    loading: "Loading…",
    tierChat: "Guide + Chat",
    tierUs: "Guide + Us",
  },
  sk: {
    title: "Vaše cesty — travel intelligence by VeM",
    description: "Prihláste sa a kódom odomknite itinerár a chatbota, ktoré ste si kúpili.",
    eyebrow: "Členská zóna",
    h1: "Tu žijú vaše cesty.",
    intro:
      "Prihláste sa, zadajte kód, ktorý sme vám poslali po nákupe, a otvorí sa celý itinerár aj chatbot k ceste.",
    signInTitle: "Prihlásenie",
    signUpTitle: "Vytvoriť konto",
    email: "E-mail",
    password: "Heslo",
    signIn: "Prihlásiť sa",
    signUp: "Vytvoriť konto",
    toSignUp: "Ešte nemáte konto? Vytvorte si ho",
    toSignIn: "Už máte konto? Prihláste sa",
    google: "Pokračovať cez Google",
    checkEmail:
      "Už len krok — poslali sme vám potvrdzovací odkaz na e-mail. Otvorte ho a potom sa tu prihláste. (Pozrite aj spam.)",
    alreadyRegistered:
      "Tento e-mail už má konto. Ak ste ho vytvorili cez Google, použite „Pokračovať cez Google“ — inak sa prihláste.",
    accountCreated: "Vaše konto je pripravené. Vitajte!",
    signedInGoogle: "Ste prihlásení cez Google. Vaše konto je pripravené.",
    signOut: "Odhlásiť sa",
    signedInAs: "Prihlásený ako",
    redeemTitle: "Odomknúť cestu",
    redeemText: "Zadajte prístupový kód z e-mailu po nákupe.",
    codePlaceholder: "VEM-XXXX-XXXX",
    redeem: "Odomknúť",
    redeemed: "Odomknuté. Šťastnú cestu.",
    myTrips: "Vaše odomknuté cesty",
    noTrips: "Zatiaľ nič odomknuté.",
    open: "Otvoriť cestu",
    unknownCode: "Tento kód nepoznáme. Skontrolujte ho písmeno po písmene.",
    usedCode: "Tento kód už použilo iné konto.",
    loading: "Načítavam…",
    tierChat: "Guide + Chat",
    tierUs: "Guide + Us",
  },
};

export const tripCopy: Record<Lang, TripCopy> = {
  en: {
    back: "← Your trips",
    locked: "This trip is locked",
    lockedText:
      "Sign in and enter your access code to open the full itinerary and the trip chatbot.",
    unlock: "Enter access code",
    chatTitle: "Your trip agent",
    chatIntro:
      "Ask anything — reshape the days, swap a town, check the budget, ask about the country or what to pack. It knows this route day by day.",
    chatEmpty: "Your conversation is saved here, so you can pick it up again any time.",
    chatExhausted:
      "You have used all the agent messages included with this trip. Write to V & eM if you need more.",
    messagesLeft: "messages left",
    placeholder: "Can we do this in 6 days instead?",
    send: "Ask",
    thinking: "Thinking…",
    error: "Something went wrong. Try again in a moment.",
    days: "days",
    ground: "On the ground",
    budget: "Budget",
    shape: "The shape of it",
    whatsapp: "WhatsApp group",
    whatsappText:
      "Your package includes the travel intelligence by VeM group. Write to us and we'll add you.",
  },
  sk: {
    back: "← Vaše cesty",
    locked: "Táto cesta je zamknutá",
    lockedText: "Prihláste sa a zadajte prístupový kód, aby sa otvoril celý itinerár aj chatbot.",
    unlock: "Zadať kód",
    chatTitle: "Váš agent k ceste",
    chatIntro:
      "Pýtajte sa na čokoľvek — prehoďte dni, vymeňte mesto, overte rozpočet, spýtajte sa na krajinu alebo čo zbaliť. Trasu pozná deň po dni.",
    chatEmpty: "Rozhovor sa tu ukladá, takže sa k nemu môžete kedykoľvek vrátiť.",
    chatExhausted:
      "Vyčerpali ste všetky správy agenta zahrnuté v tejto ceste. Ak potrebujete viac, napíšte V & eM.",
    messagesLeft: "správ zostáva",
    placeholder: "Dá sa to stihnúť za 6 dní?",
    send: "Opýtať sa",
    thinking: "Rozmýšľam…",
    error: "Niečo sa pokazilo. Skúste to o chvíľu znova.",
    days: "dní",
    ground: "Na mieste",
    budget: "Rozpočet",
    shape: "Ako to vyzerá",
    whatsapp: "WhatsApp skupina",
    whatsappText: "Váš balík zahŕňa skupinu travel intelligence by VeM. Napíšte nám a pridáme vás.",
  },
};
