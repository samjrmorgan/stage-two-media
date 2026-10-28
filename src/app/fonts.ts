import localFont from "next/font/local";

export const interTight = localFont({
  src: [
    { path: "../fonts/InterTight-Variable.ttf", style: "normal" },
    { path: "../fonts/InterTight-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
  preload: false,
});

export const alteHaas = localFont({
  src: [
    { path: "../fonts/AlteHaasGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/AlteHaasGrotesk-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-alte-haas",
  display: "swap",
  preload: false,
});
