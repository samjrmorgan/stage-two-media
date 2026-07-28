import type { Metadata } from "next";
import { interTight, alteHaas } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stagetwo.media"),
  title: {
    default: "Stage Two - Immortalise the Moment",
    template: "%s - Stage Two",
  },
  description:
    "Stage Two is an Auckland-based production company creating cinematic video and photography for stories that deserve to be felt - documentary, advocacy, weddings and brand work.",
  openGraph: {
    title: "Stage Two - Immortalise the Moment",
    description:
      "Human-centred video and photography production for stories that deserve to be felt.",
    url: "https://stagetwo.media",
    siteName: "Stage Two",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${interTight.variable} ${alteHaas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
