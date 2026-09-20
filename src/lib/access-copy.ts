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
    description: "Sign in and unlock the itinerary and trip chatbot you bought with your access code.",
    eyebrow: "Members",
    h1: "Your trips live here.",
    intro: "Sign in, enter the code we sent you after your purchase, and your full itinerary plus the trip chatbot opens up.",
    signInTitle: "Sign in",
    signUpTitle: "Create an account",
    email: "Email",
    password: "Password",
    signIn: "Sign in",
    signUp: "Create account",
    toSignUp: "No account yet? Create one",
    toSignIn: "Already have an account? Sign in",
    google: "Continue with Google",
    checkEmail: "Check your inbox and confirm your email, then sign in.",
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
    intro: "Prihláste sa, zadajte kód, ktorý sme vám poslali po nákupe, a otvorí sa celý itinerár aj chatbot k ceste.",
    signInTitle: "Prihlásenie",
    signUpTitle: "Vytvoriť konto",
    email: "E-mail",
    password: "Heslo",
    signIn: "Prihlásiť sa",
    signUp: "Vytvoriť konto",
    toSignUp: "Ešte nemáte konto? Vytvorte si ho",
    toSignIn: "Už máte konto? Prihláste sa",
    google: "Pokračovať cez Google",
    checkEmail: "Pozrite si e-mail, potvrďte adresu a potom sa prihláste.",
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
    lockedText: "Sign in and enter your access code to open the full itinerary and the trip chatbot.",
    unlock: "Enter access code",
    chatTitle: "Trip chatbot",
    chatIntro: "Ask anything — reshape the days, swap a town, check the budget, or ask what to pack.",
    placeholder: "Can we do this in 6 days instead?",
    send: "Ask",
    thinking: "Thinking…",
    error: "Something went wrong. Try again in a moment.",
    days: "days",
    ground: "On the ground",
    budget: "Budget",
    shape: "The shape of it",
    whatsapp: "WhatsApp group",
    whatsappText: "Your package includes the travel intelligence by VeM group. Write to us and we'll add you.",
  },
  sk: {
    back: "← Vaše cesty",
    locked: "Táto cesta je zamknutá",
    lockedText: "Prihláste sa a zadajte prístupový kód, aby sa otvoril celý itinerár aj chatbot.",
    unlock: "Zadať kód",
    chatTitle: "Chatbot k ceste",
    chatIntro: "Pýtajte sa na čokoľvek — prehoďte dni, vymeňte mesto, overte rozpočet alebo sa spýtajte, čo zbaliť.",
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
