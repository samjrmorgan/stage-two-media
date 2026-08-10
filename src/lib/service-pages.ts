export type ServiceFaq = { q: string; a: string };
export type ServiceLink = { href: string; label: string };

export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  body: string[];
  tags: string[];
  caseStudySlugs: string[];
  heroImage: { src: string; alt: string };
  faqs?: ServiceFaq[];
  relatedLinks?: ServiceLink[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "wedding-videography",
    metaTitle: "Wedding Videographer Auckland",
    metaDescription:
      "Wedding videographer in Auckland shooting off-the-cuff, documentary-style films - same-week highlights, full features, and wedding photography on the same day.",
    kicker: "Wedding Videography",
    h1: "Wedding Videographer, Auckland",
    intro:
      "Looking for a wedding videographer in Auckland who treats your day like a documentary, not a script? Stage Two shoots off-the-cuff and reactive, so what you get back feels like the day actually felt - not staged for the camera.",
    body: [
      "Coverage runs solo through the day - a considered, restrained camera that stays out of the way, so the real moments happen instead of the posed ones.",
      "A same-week highlight goes out fast, with the full feature film following once there's been time to sit with the footage properly. Photography runs alongside video on the same day, from the same crew.",
      "We also travel for destination weddings - the brief stays the same wherever the venue is: real moments, shot with care, delivered without the wait.",
    ],
    tags: ["Wedding films", "Destination weddings", "Same-week edits", "Wedding photography"],
    caseStudySlugs: ["ben-and-mirjam"],
    heroImage: {
      src: "/images/work/weddings/weddings-06.jpg",
      alt: "Bride and groom embracing in golden light",
    },
    faqs: [
      {
        q: "How much does a wedding film cost in NZ?",
        a: "It depends on coverage and crew, and we scale to your day and budget. There's a full breakdown in our journal on how much a wedding film costs in NZ, or get in touch for a quote on your specific day.",
      },
      {
        q: "How long until we get our wedding film?",
        a: "A same-week highlight goes out fast, with the full feature film following once we've had time to sit with the footage properly.",
      },
      {
        q: "Do you travel for weddings?",
        a: "Yes - we're Auckland-based and shoot weddings across New Zealand, as well as destination weddings overseas.",
      },
      {
        q: "Can you do photography as well as video?",
        a: "Yes. Photography runs alongside video on the same day, from the same crew, in the same style.",
      },
    ],
    relatedLinks: [
      { href: "/journal/how-much-does-a-wedding-film-cost-in-nz", label: "How much does a wedding film cost in NZ?" },
      { href: "/journal/shooting-weddings-like-documentaries", label: "Shooting weddings like documentaries" },
      { href: "/services/photography", label: "Wedding & event photography" },
    ],
  },
  {
    slug: "corporate-video",
    metaTitle: "Corporate Video Production Auckland",
    metaDescription:
      "Corporate video production in Auckland - brand films, technical documentation and full asset libraries, shot around the people and operations behind your business.",
    kicker: "Corporate Video",
    h1: "Corporate Video Production, Auckland",
    intro:
      "Searching for corporate video production in Auckland? Stage Two builds brand films and full asset libraries around the people and operations behind your business - not just a polished pack shot.",
    body: [
      "Multi-camera coverage - drone, GoPro and full-frame Sony bodies working together - captures scale and detail in the same shoot, whether that's a working facility, a fleet, or a live event.",
      "The output is a complete library your team can draw on afterwards: hero brand film, technical documentation, social cutdowns and stills, all shot once and cut for every channel you need.",
      "We work case-by-case with brands who want their story told with craft, not just coverage - real operations, real people, delivered on a schedule that suits a live business.",
    ],
    tags: ["Brand films", "Technical documentation", "Asset libraries", "Multi-camera coverage"],
    caseStudySlugs: ["nexus-logistics", "luxury-cruising", "presence-io"],
    heroImage: {
      src: "/images/work/nexus-logistics/nexus-logistics-02.jpg",
      alt: "A reach-stacker branded with the Nexus Logistics logo lifting a shipping container",
    },
    faqs: [
      {
        q: "How much does a corporate video cost in NZ?",
        a: "It varies with scope, crew and deliverables, and we scale to any budget - from a single testimonial to a full asset library. See our journal guide on how much a corporate video costs in NZ, or get a quote.",
      },
      {
        q: "How quickly can you deliver?",
        a: "We agree the timeline up front and turn work around fast, with a quick first cut - and can accommodate rush jobs around a launch or event date.",
      },
      {
        q: "Do you handle scripting and concept?",
        a: "Yes - full pre-production in-house, starting from the outcome you need rather than the camera.",
      },
      {
        q: "What formats do you deliver?",
        a: "Whatever your channels need: hero film, social cutdowns, technical documentation and stills, all shot once and cut for every channel.",
      },
    ],
    relatedLinks: [
      { href: "/journal/how-much-does-a-corporate-video-cost-in-nz", label: "How much does a corporate video cost in NZ?" },
      { href: "/journal/what-to-ask-before-hiring-a-video-production-company", label: "What to ask before hiring a video production company" },
      { href: "/services/photography", label: "Brand & corporate photography" },
    ],
  },
  {
    slug: "documentary",
    metaTitle: "Documentary Production NZ",
    metaDescription:
      "Documentary production company based in Auckland, New Zealand - humanitarian, advocacy and personal-legacy films shot on location worldwide.",
    kicker: "Documentary",
    h1: "Documentary Production, New Zealand",
    intro:
      "Stage Two is a documentary production company based in Auckland, New Zealand, working across humanitarian, advocacy and personal-legacy films - on location, worldwide.",
    body: [
      "Most expeditions run with a crew of one - a lighter footprint, faster movement, and a more honest interview when there's no crowd of gear and people around the subject.",
      "The work spans commissioned expeditions with organisations like World Vision International, through to self-funded passion projects made with no client and no brief - like Zero to 100, a documentary about New Zealand's classic motorsport scene, made because we wanted it to exist.",
      "Full video and photography coverage, captured simultaneously - one shoot, two deliverables, cut into a long-form documentary and shorter social-first pieces.",
    ],
    tags: ["Long-form documentary", "Field documentation", "Interview-led storytelling", "International production"],
    caseStudySlugs: ["zero-to-100", "harry-mack-interview", "world-vision-ghana"],
    heroImage: {
      src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-11.jpg",
      alt: "Rider giving a thumbs up mid-race",
    },
    faqs: [
      {
        q: "Do you travel internationally for documentary shoots?",
        a: "Yes - most expeditions run with a crew of one, and we've filmed on location across many countries, handling the whole pipeline anywhere.",
      },
      {
        q: "Do you work with NGOs and charities?",
        a: "Yes - humanitarian and advocacy work is a core part of what we do, including commissioned expeditions with organisations like World Vision International.",
      },
      {
        q: "Can you handle multi-location productions?",
        a: "Yes, end-to-end - directing, cinematography, photography, edit, colour and delivery, across multiple locations.",
      },
    ],
    relatedLinks: [
      { href: "/journal/five-countries-one-camera-bag", label: "Five countries, one camera bag" },
      { href: "/journal/the-gear-we-pack-for-a-solo-documentary-shoot", label: "The gear we pack for a solo documentary shoot" },
      { href: "/journal/why-we-made-zero-to-100", label: "Why we made Zero to 100" },
    ],
  },
  {
    slug: "aerial-videography",
    metaTitle: "Drone & Aerial Videography Auckland",
    metaDescription:
      "Drone and aerial videography in Auckland - flown alongside ground camera and GoPro rigs, built into brand films, advocacy content and event coverage.",
    kicker: "Aerial Videography",
    h1: "Aerial & Drone Videography, Auckland",
    intro:
      "Need drone or aerial videography in Auckland? Stage Two flies drone coverage alongside ground camera and GoPro rigs, built directly into brand films, advocacy content and event coverage - not shot as a separate add-on.",
    body: [
      "Drone footage is planned into the brief from the start - top-down scale shots of a working yard, a coastline, or a resort, cut together with ground and GoPro footage from the same shoot.",
      "We've flown drone coverage for facility and fleet content, coastal advocacy films, and joined other productions as a specialist aerial collaborator - contributing just the drone work to someone else's crew.",
      "Every flight is planned around the airspace and safety requirements of the location, so the shot list adapts to what's actually flyable on the day.",
    ],
    tags: ["Drone photography & video", "Aerial cinematography", "Multi-camera coverage"],
    caseStudySlugs: ["nexus-logistics", "luxury-cruising", "mca-fuel-tax-credit"],
    heroImage: {
      src: "/images/work/luxury-cruising/luxury-cruising-01.jpg",
      alt: "The superyacht Liberté cruising past an island near Auckland",
    },
    faqs: [
      {
        q: "Do you fly drone coverage as part of a larger shoot?",
        a: "Yes - drone is planned into the brief from the start and cut together with ground and GoPro footage from the same shoot, not shot as a separate add-on.",
      },
      {
        q: "Can you join another production as a drone specialist?",
        a: "Yes - we've contributed just the aerial work to other crews' productions as a specialist collaborator.",
      },
      {
        q: "Are your flights planned around safety and airspace rules?",
        a: "Every flight is planned around the airspace and safety requirements of the location, so the shot list adapts to what's actually flyable on the day.",
      },
    ],
    relatedLinks: [
      { href: "/services/corporate-video", label: "Corporate video production" },
      { href: "/work/luxury-cruising", label: "Case study - Luxury Cruising" },
    ],
  },
  {
    slug: "photography",
    metaTitle: "Photography Auckland",
    metaDescription:
      "Photography in Auckland from Stage Two - brand, corporate, wedding and documentary stills, shot by the same crew that makes our films, on the same day.",
    kicker: "Photography",
    h1: "Photography, Auckland",
    intro:
      "Looking for photography in Auckland? Stage Two shoots stills alongside our film work - brand, corporate, event, wedding and documentary photography, captured by the same crew, on the same day, in the same style.",
    body: [
      "Stills and video are shot together, not as separate bookings - so you get a consistent look across both, and nothing gets missed while a second team sets up.",
      "From brand and product photography to weddings, events and field documentation, we deliver a full set of edited images cut for web, social and print.",
      "One crew, full pipeline, any budget - the same reactive, documentary-minded approach we bring to everything we shoot.",
    ],
    tags: ["Brand & corporate photography", "Wedding photography", "Event photography", "Documentary stills"],
    caseStudySlugs: ["world-vision-ghana", "nexus-logistics"],
    heroImage: {
      src: "/images/work/documentary-ghana/documentary-ghana-13.jpg",
      alt: "Four young girls in colourful dresses standing together in Ghana",
    },
    faqs: [
      {
        q: "Do you shoot photography and video on the same day?",
        a: "Yes - stills and video are captured simultaneously by the same crew, so you get a consistent look and nothing is missed.",
      },
      {
        q: "What kinds of photography do you shoot?",
        a: "Brand and corporate, events, weddings, and documentary and field photography - the same range we cover in film.",
      },
      {
        q: "What formats do you deliver?",
        a: "A full set of edited images, cut for web, social and print.",
      },
    ],
    relatedLinks: [
      { href: "/journal/why-we-shoot-stills-and-video-on-the-same-day", label: "Why we shoot stills and video on the same day" },
      { href: "/services/wedding-videography", label: "Wedding videography" },
      { href: "/services/corporate-video", label: "Corporate video production" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
