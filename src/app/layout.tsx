import type { Metadata } from "next";
import { interTight, alteHaas } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const OG_IMAGE = "/images/hero/primary-colours-senegal.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://stagetwo.media"),
  title: {
    default: "Stage Two | Video Production & Photography Company, Auckland NZ",
    template: "%s - Stage Two",
  },
  description:
    "Auckland-based video production and photography studio creating documentary, advocacy, wedding and brand content - shot on location worldwide. Get a quote from Stage Two today.",
  openGraph: {
    title: "Stage Two | Video Production & Photography Company, Auckland NZ",
    description:
      "Auckland-based video production and photography studio creating documentary, advocacy, wedding and brand content - shot on location worldwide.",
    url: "https://stagetwo.media",
    siteName: "Stage Two",
    locale: "en_NZ",
    type: "website",
    images: [{ url: OG_IMAGE, width: 3200, height: 1799 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stage Two | Video Production & Photography Company, Auckland NZ",
    description:
      "Auckland-based video production and photography studio creating documentary, advocacy, wedding and brand content - shot on location worldwide.",
    images: [OG_IMAGE],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stage Two",
  alternateName: "Stage Two Media",
  url: "https://stagetwo.media",
  logo: "https://stagetwo.media/brand/logo/primary-offwhite.svg",
  image: `https://stagetwo.media${OG_IMAGE}`,
  description:
    "Auckland-based video production and photography studio creating documentary, advocacy, wedding and brand content, shot on location worldwide.",
  email: "sam@stagetwo.media",
  telephone: "+64212262822",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "NZ",
  },
  areaServed: "Worldwide",
  sameAs: [
    "https://instagram.com/stagetwo.media",
    "https://www.facebook.com/stagetwomedia",
    "https://www.linkedin.com/company/stagetwomedia",
    "https://vimeo.com/stagetwomediahouse",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
