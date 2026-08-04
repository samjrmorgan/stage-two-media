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

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://stagetwo.media/#business",
      name: "Stage Two Media",
      url: "https://stagetwo.media",
      logo: "https://stagetwo.media/brand/logo/primary-offwhite.svg",
      image: "https://stagetwo.media/images/hero/primary-colours-senegal.jpg",
      description:
        "Award-winning Auckland video and photography production studio specialising in documentary, advocacy, corporate, brand and wedding films - shot on location worldwide.",
      telephone: "+64 21 226 2822",
      email: "sam@stagetwo.media",
      foundingDate: "2024-02",
      founder: [
        { "@type": "Person", name: "Sam Morgan" },
        { "@type": "Person", name: "Ellie Harwood" },
      ],
      areaServed: [
        { "@type": "City", name: "Auckland" },
        { "@type": "Country", name: "New Zealand" },
      ],
      knowsAbout: [
        "Video production",
        "Photography",
        "Documentary film",
        "Brand films",
        "Wedding films",
        "Aerial cinematography",
        "Event coverage",
      ],
      sameAs: [
        "https://instagram.com/stagetwo.media",
        "https://www.facebook.com/stagetwomedia",
        "https://www.linkedin.com/company/stagetwomedia",
        "https://vimeo.com/stagetwomediahouse",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://stagetwo.media/#website",
      url: "https://stagetwo.media",
      name: "Stage Two Media",
      publisher: { "@id": "https://stagetwo.media/#business" },
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
