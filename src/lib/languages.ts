export type Language = { code: string; label: string };

export const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "ar", label: "العربية" },
];

export const translatedCodes = languages.filter((l) => l.code !== "en").map((l) => l.code);

export function getCurrentLanguage(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[a-z-]+\/([a-z-]+)/i);
  const code = match?.[1]?.toLowerCase();
  return code && translatedCodes.includes(code) ? code : "en";
}

function clearTranslateCookie() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  document.cookie = `googtrans=; ${expired}; path=/`;
  document.cookie = `googtrans=; ${expired}; path=/; domain=${host}`;
  document.cookie = `googtrans=; ${expired}; path=/; domain=.${host}`;
}

export function setLanguage(code: string) {
  clearTranslateCookie();
  if (code !== "en") {
    document.cookie = `googtrans=/en/${code}; path=/; max-age=31536000; SameSite=Lax`;
  }
  window.location.reload();
}
