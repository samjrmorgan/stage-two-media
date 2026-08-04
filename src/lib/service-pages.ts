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
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
