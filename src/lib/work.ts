export type WorkImage = {
  src: string;
  alt: string;
};

export type FilterCategory =
  | "Humanitarian & NGO"
  | "Documentary & Legacy"
  | "Weddings"
  | "Brand Stories"
  | "Advocacy";

export type WorkProject = {
  slug: string;
  client: string;
  title: string;
  category: string;
  filter: FilterCategory;
  kind: "film" | "photo";
  /** Vimeo video ID or full vimeo.com URL - leave undefined if there's no film to embed yet. */
  vimeoId?: string;
  year: string;
  location: string;
  summary: string;
  cardCopy: string;
  description: string[];
  services: string[];
  cover: WorkImage;
  gallery: WorkImage[];
  /** Shown on the Home page's featured grid. Keep to one per category. */
  featured?: boolean;
};

export const workProjects: WorkProject[] = [
  {
    slug: "world-vision-ghana",
    client: "World Vision International",
    title: "World Vision - Ghana",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    featured: true,
    year: "2023–2026",
    location: "Ghana",
    summary:
      "Documentary and advocacy filming for World Vision's community and family programmes across Ghana - following field teams and the communities they work with, one battery-powered kit and a single operator at a time.",
    cardCopy:
      "Expedition storytelling and advocacy content from Ghana, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision International in Ghana, embedding with in-country teams to capture the honest, unscripted reality of community development work.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio. That keeps the footage close to the people it's about, and keeps the budget realistic for an NGO client.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-ghana/documentary-ghana-03.jpg",
      alt: "Silhouette of a woman in a doorway, Ghana",
    },
    gallery: [
      { src: "/images/work/documentary-ghana/documentary-ghana-03.jpg", alt: "Silhouette in a doorway, Ghana" },
      { src: "/images/work/documentary-ghana/documentary-ghana-02.jpg", alt: "Three girls in traditional dress, Ghana" },
      { src: "/images/work/documentary-ghana/documentary-ghana-05.jpg", alt: "Hand under a running tap, Ghana" },
      { src: "/images/work/documentary-ghana/documentary-ghana-06.jpg", alt: "Mother carrying a child past thatched huts, Ghana" },
      { src: "/images/work/documentary-ghana/documentary-ghana-12.jpg", alt: "Two girls against a blue wall, Ghana" },
      { src: "/images/work/documentary-ghana/documentary-ghana-04.jpg", alt: "Girl standing beneath a tree by thatched huts, Ghana" },
    ],
  },
  {
    slug: "world-vision-sierra-leone",
    client: "World Vision International",
    title: "World Vision - Sierra Leone",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    year: "2023–2026",
    location: "Sierra Leone",
    summary:
      "Documentary and advocacy filming for World Vision's community programmes in Sierra Leone - capturing daily life, play and family alongside the organisation's field work.",
    cardCopy:
      "Expedition storytelling and advocacy content from Sierra Leone, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision International in Sierra Leone, embedding with in-country teams to capture community life alongside the organisation's development work.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-08.jpg",
      alt: "Close portrait of a child's eyes, Sierra Leone",
    },
    gallery: [
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-08.jpg", alt: "Close portrait of a child's eyes, Sierra Leone" },
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-09.jpg", alt: "Girls playing football, Sierra Leone" },
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-04.jpg", alt: "Children laughing, Sierra Leone" },
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-01.jpg", alt: "Children walking down a dirt road, Sierra Leone" },
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-05.jpg", alt: "Collecting water at a stream, Sierra Leone" },
      { src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-12.jpg", alt: "Woman looking up through leaves, Sierra Leone" },
    ],
  },
  {
    slug: "world-vision-bangladesh",
    client: "World Vision International",
    title: "World Vision - Bangladesh",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    year: "2023–2026",
    location: "Bangladesh",
    summary:
      "Documentary and advocacy filming for World Vision in Bangladesh, including content supporting the organisation's child marriage awareness work.",
    cardCopy:
      "Expedition storytelling and advocacy content from Bangladesh, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision International in Bangladesh, embedding with in-country teams to capture the honest, unscripted reality of the communities they work alongside - including footage supporting child marriage awareness campaigns.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-bangladesh/documentary-bangladesh-02.jpg",
      alt: "Girl holding an awareness campaign sign in a march, Bangladesh",
    },
    gallery: [
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-02.jpg", alt: "Girl holding an awareness campaign sign in a march, Bangladesh" },
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-03.jpg", alt: "Portrait against a teal wall, Bangladesh" },
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-07.jpg", alt: "Woman working in a rice field, Bangladesh" },
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-10.jpg", alt: "Group of girls in colourful shawls, Bangladesh" },
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-12.jpg", alt: "Portrait of a girl in a red veil, Bangladesh" },
      { src: "/images/work/documentary-bangladesh/documentary-bangladesh-06.jpg", alt: "Ceremony in a courtyard, Bangladesh" },
    ],
  },
  {
    slug: "world-vision-senegal",
    client: "World Vision International",
    title: "World Vision - Senegal",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    year: "2023–2026",
    location: "Senegal",
    summary:
      "Documentary and advocacy filming for World Vision's community programmes in Senegal - following field teams and the families they support.",
    cardCopy:
      "Expedition storytelling and advocacy content from Senegal, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision International in Senegal, embedding with in-country teams to capture community life alongside the organisation's development work.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-senegal/documentary-senegal-05.jpg",
      alt: "Crowd of children waving and cheering, Senegal",
    },
    gallery: [
      { src: "/images/work/documentary-senegal/documentary-senegal-05.jpg", alt: "Crowd of children waving and cheering, Senegal" },
      { src: "/images/work/documentary-senegal/documentary-senegal-03.jpg", alt: "Women washing hands together, Senegal" },
      { src: "/images/work/documentary-senegal/documentary-senegal-01.jpg", alt: "Boy in a wheelchair outside a home, Senegal" },
      { src: "/images/work/documentary-senegal/documentary-senegal-11.jpg", alt: "Portrait of a woman in a headwrap, Senegal" },
      { src: "/images/work/documentary-senegal/documentary-senegal-09.jpg", alt: "Woman looking at an old photograph, Senegal" },
      { src: "/images/work/documentary-senegal/documentary-senegal-04.jpg", alt: "Horse and cart passing baobab trees, Senegal" },
    ],
  },
  {
    slug: "world-vision-cambodia",
    client: "World Vision International",
    title: "World Vision - Cambodia",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    year: "2023–2026",
    location: "Cambodia",
    summary:
      "Documentary and advocacy filming for World Vision's community programmes in Cambodia - following field teams, schools and families across the country.",
    cardCopy:
      "Expedition storytelling and advocacy content from Cambodia, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision International in Cambodia, embedding with in-country teams to capture community life alongside the organisation's development work.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-cambodia/documentary-cambodia-07.jpg",
      alt: "Angkor Wat reflected in water at sunset, Cambodia",
    },
    gallery: [
      { src: "/images/work/documentary-cambodia/documentary-cambodia-07.jpg", alt: "Angkor Wat reflected in water at sunset, Cambodia" },
      { src: "/images/work/documentary-cambodia/documentary-cambodia-04.jpg", alt: "Three schoolgirls in uniform, Cambodia" },
      { src: "/images/work/documentary-cambodia/documentary-cambodia-10.jpg", alt: "Children running down a dirt road, Cambodia" },
      { src: "/images/work/documentary-cambodia/documentary-cambodia-03.jpg", alt: "Mother and child in a flooded rice field, Cambodia" },
      { src: "/images/work/documentary-cambodia/documentary-cambodia-06.jpg", alt: "Family with water buffalo in a field, Cambodia" },
      { src: "/images/work/documentary-cambodia/documentary-cambodia-12.jpg", alt: "Schoolgirls beside a flagpole, Cambodia" },
    ],
  },
  {
    slug: "world-vision-vietnam",
    client: "World Vision International",
    title: "World Vision - Vietnam",
    category: "Documentary / Advocacy",
    filter: "Humanitarian & NGO",
    kind: "film",
    year: "2024",
    location: "Vietnam",
    summary:
      "Documentary and advocacy filming for World Vision Vietnam's community and education programmes - following students, families and field teams.",
    cardCopy:
      "Expedition storytelling and advocacy content from Vietnam, capturing real programme visits and the people behind them.",
    description: [
      "Stage Two travelled on assignment for World Vision Vietnam, embedding with in-country teams to capture classrooms, farming families and community life alongside the organisation's development work.",
      "The expedition was run lean: pre-production, filming, sound, and a first pass of the edit were handled solo on location, with full post-production finished back in the studio.",
      "The resulting films and stills are used across World Vision's advocacy campaigns, donor storytelling, and internal reporting.",
    ],
    services: ["Documentary Filming", "Advocacy Content", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/documentary-vietnam/documentary-vietnam-01.jpg",
      alt: "Girl cycling through a green rice field, Vietnam",
    },
    gallery: [
      { src: "/images/work/documentary-vietnam/documentary-vietnam-01.jpg", alt: "Girl cycling through a green rice field, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-02.jpg", alt: "Kayaking through limestone karst formations, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-03.jpg", alt: "Students walking to school in uniform, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-04.jpg", alt: "Teacher and student at a chalkboard, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-05.jpg", alt: "A World Vision Vietnam water station", },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-06.jpg", alt: "Girl picking produce in a field, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-07.jpg", alt: "Family working together in a field, Vietnam" },
      { src: "/images/work/documentary-vietnam/documentary-vietnam-08.jpg", alt: "Family sharing a meal, Vietnam" },
    ],
  },
  {
    slug: "zero-to-100",
    client: "Stage Two Originals",
    title: "Zero to 100",
    category: "Documentary",
    filter: "Documentary & Legacy",
    kind: "film",
    featured: true,
    year: "2025",
    location: "New Zealand",
    summary:
      "A self-produced documentary about the people who keep motorsport's oldest machines alive - built to prove Stage Two could do more than commissioned work.",
    cardCopy:
      "A character-led documentary built around the people who keep classic motorsport alive - shot with no client and no brief.",
    description: [
      "Zero to 100 is a passion project: a character-led documentary following veteran riders, restorers and track-day regulars around New Zealand's classic motorsport scene.",
      "Shot and produced entirely in-house, it's the clearest demonstration of Stage Two's own documentary voice - pace, humour and an eye for the small human moments alongside the speed.",
    ],
    services: ["Documentary Filming", "Directing", "Editing", "Colour Grade"],
    cover: {
      src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-11.jpg",
      alt: "Rider giving a thumbs up from a motorcycle mid-race",
    },
    gallery: [
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-11.jpg", alt: "Rider giving a thumbs up mid-race" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-06.jpg", alt: "Motorcycles racing on track" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-12.jpg", alt: "Veteran rider smiling, thumbs up" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-07.jpg", alt: "Close portrait through a racing helmet" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-01.jpg", alt: "Veteran in his workshop" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-08.jpg", alt: "Rider resting on a vintage sidecar" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-04.jpg", alt: "Crowd watching riders at the starting line" },
      { src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-09.jpg", alt: "Portrait in a workshop, evening light" },
    ],
  },
  {
    slug: "harry-mack-interview",
    client: "Liam McEwan",
    title: "Harry Mack Interview",
    category: "Long-Form Interview",
    filter: "Documentary & Legacy",
    kind: "film",
    year: "2024",
    location: "Los Angeles, USA",
    summary:
      "A long-form, in-studio interview with freestyle rap phenomenon Harry Mack, filmed in Los Angeles for host Liam McEwan.",
    cardCopy:
      "A long-form, in-studio interview with freestyle rap phenomenon Harry Mack, filmed on location in Los Angeles.",
    description: [
      "Stage Two travelled to Los Angeles to film a long-form interview between host Liam McEwan and Harry Mack, the freestyle rapper known for viral improvised performances.",
      "Shot multi-camera in a dressed studio set, the conversation was cut into a full-length interview alongside a shorter 4:5 teaser for social, with b-roll drawn from Harry Mack's own performance history woven through the edit.",
    ],
    services: ["Interview Filming", "Multi-Camera Production", "Editing", "Social Cutdowns"],
    cover: {
      src: "/images/work/harry-mack-interview/harry-mack-interview-01.jpg",
      alt: "Liam McEwan interviewing Harry Mack in a dressed studio set, Los Angeles",
    },
    gallery: [
      { src: "/images/work/harry-mack-interview/harry-mack-interview-01.jpg", alt: "Liam McEwan interviewing Harry Mack in a dressed studio set, Los Angeles" },
      { src: "/images/work/harry-mack-interview/harry-mack-interview-02.jpg", alt: "Profile portrait of the host beside a neon sign" },
      { src: "/images/work/harry-mack-interview/harry-mack-interview-03.jpg", alt: "The host mid-conversation on set" },
      { src: "/images/work/harry-mack-interview/harry-mack-interview-04.jpg", alt: "Studio set detail, neon sign and record shelf" },
      { src: "/images/work/harry-mack-interview/harry-mack-interview-05.jpg", alt: "\"Stage Two presents Harry Mack, with Liam McEwan\" title card" },
    ],
  },
  {
    slug: "ben-and-mirjam",
    client: "Ben & Mirjam",
    title: "Ben & Mirjam",
    category: "Weddings",
    filter: "Weddings",
    kind: "film",
    featured: true,
    year: "2024",
    location: "Tuscany, Italy",
    summary:
      "A destination wedding film shot off-the-cuff at a Tuscan villa, with full creative freedom over the story and the edit.",
    cardCopy:
      "A destination wedding film shot off-the-cuff, with full creative freedom over the story and the edit.",
    description: [
      "Ben and Mirjam's wedding took place at a villa outside Florence, surrounded by olive groves and cypress trees - the kind of setting that does half the work for you, if you stay out of its way.",
      "Coverage ran solo through the day: considered light, a restrained camera, and an edit that favours real moments over posed ones. A same-week highlight followed, with the full feature cut in the weeks after.",
    ],
    services: ["Wedding Films", "Photography", "Same-Week Edit"],
    cover: {
      src: "/images/work/weddings/weddings-06.jpg",
      alt: "Bride and groom embracing in golden light",
    },
    gallery: [
      { src: "/images/work/weddings/weddings-06.jpg", alt: "Bride and groom embracing in golden light" },
      { src: "/images/work/weddings/weddings-03.jpg", alt: "Bride and groom with wedding party" },
      { src: "/images/work/weddings/weddings-04.jpg", alt: "Confetti thrown over the newlyweds" },
      { src: "/images/work/weddings/weddings-01.jpg", alt: "Tuscan villa surrounded by cypress trees" },
      { src: "/images/work/weddings/weddings-09.jpg", alt: "Bride getting ready, holding a room sign" },
      { src: "/images/work/weddings/weddings-11.jpg", alt: "Guests dancing under string lights" },
      { src: "/images/work/weddings/weddings-12.jpg", alt: "Aerial view of the wedding venue" },
    ],
  },
  {
    slug: "nexus-logistics",
    client: "Nexus Logistics",
    title: "Nexus Logistics",
    category: "Fleet & Facility Content",
    filter: "Brand Stories",
    kind: "film",
    year: "2024",
    location: "Auckland, New Zealand",
    summary:
      "A full photo and video asset library of Nexus Logistics' container yard, shot via drone, GoPro and camera to capture the scale and precision of their operation.",
    cardCopy:
      "Drone, GoPro and camera coverage of a working container yard, built into a full brand asset library.",
    description: [
      "Nexus Logistics needed a comprehensive library of photo and video assets covering the full scope of their container yard operations - aerial site views, crane and reach-stacker handling, rail loading, and truck movements, all shot on location in Auckland.",
      "The brief called for multiple camera systems working together: drone for scale and top-down yard shots, GoPro for operator POV and dynamic angles rigged to the equipment itself, and Sony camera for high-resolution branding and detail shots.",
      "Throughout, the focus stayed on the Nexus Logistics branding across the fleet, containers and equipment - and on capturing the coordination of a live, moving operation without getting in its way.",
    ],
    services: ["Drone Photography & Video", "On-Site Filming", "Photography", "Post-Production"],
    cover: {
      src: "/images/work/nexus-logistics/nexus-logistics-02.jpg",
      alt: "A reach-stacker branded with the Nexus Logistics logo lifting a shipping container",
    },
    gallery: [
      { src: "/images/work/nexus-logistics/nexus-logistics-01.jpg", alt: "Aerial view of the container yard, with rail lines beyond" },
      { src: "/images/work/nexus-logistics/nexus-logistics-02.jpg", alt: "A reach-stacker branded with the Nexus Logistics logo lifting a shipping container" },
      { src: "/images/work/nexus-logistics/nexus-logistics-03.jpg", alt: "Ground-level wide shot of stacked containers and a reach-stacker" },
      { src: "/images/work/nexus-logistics/nexus-logistics-04.jpg", alt: "Close-up of the Nexus Logistics branded reach-stacker arm lifting a container" },
      { src: "/images/work/nexus-logistics/nexus-logistics-05.jpg", alt: "Reach-stacker moving a container beside a loaded freight train" },
      { src: "/images/work/nexus-logistics/nexus-logistics-06.jpg", alt: "A container lifted directly above a rail wagon" },
      { src: "/images/work/nexus-logistics/nexus-logistics-07.jpg", alt: "GoPro POV from inside the reach-stacker operator's cabin" },
    ],
  },
  {
    slug: "luxury-cruising",
    client: "Luxury Cruising New Zealand",
    title: "Luxury Cruising NZ",
    category: "Brand Film & Photography",
    filter: "Brand Stories",
    kind: "film",
    featured: true,
    year: "2026",
    location: "Auckland, New Zealand",
    summary:
      "A cinematic content package for Liberté, a 100-foot luxury superyacht based in Auckland - produced to promote the vessel for charter.",
    cardCopy:
      "A cinematic content package for the 100-foot superyacht Liberté, produced to promote luxury charters in Auckland.",
    description: [
      "Liberté is a 100-foot luxury superyacht based in Auckland, and the brief was to capture her sophistication and comfort in a single hero film - cinematic enough to sell a charter on its own.",
      "Alongside the hero film, Stage Two shot a full set of premium interior and exterior photography highlighting the yacht's craftsmanship, plus a secondary edit tailored to specific audiences and formatted across multiple social aspect ratios.",
      "Everything was delivered fully treated and graded, so Luxury Cruising NZ can keep using the footage across future campaigns, ads and digital placements.",
    ],
    services: ["Brand Film", "Aerial Photography", "Interior & Exterior Photography", "Social Cutdowns", "Colour Grade"],
    cover: {
      src: "/images/work/luxury-cruising/luxury-cruising-01.jpg",
      alt: "The superyacht Liberté cruising past an island near Auckland",
    },
    gallery: [
      { src: "/images/work/luxury-cruising/luxury-cruising-01.jpg", alt: "Liberté cruising past an island near Auckland" },
      { src: "/images/work/luxury-cruising/luxury-cruising-02.jpg", alt: "Aerial shot of a kitesurfer near the yacht" },
      { src: "/images/work/luxury-cruising/luxury-cruising-03.jpg", alt: "Liberté nameplate on the stern" },
      { src: "/images/work/luxury-cruising/luxury-cruising-04.jpg", alt: "Captain at the helm" },
      { src: "/images/work/luxury-cruising/luxury-cruising-05.jpg", alt: "Aerial view of the yacht at anchor" },
      { src: "/images/work/luxury-cruising/luxury-cruising-06.jpg", alt: "Liberté underway, leaving a wake" },
      { src: "/images/work/luxury-cruising/luxury-cruising-07.jpg", alt: "Champagne being poured on deck" },
      { src: "/images/work/luxury-cruising/luxury-cruising-08.jpg", alt: "Guests toasting on deck at sunset" },
    ],
  },
  {
    slug: "mca-wallaroos",
    client: "Minerals Council of Australia",
    title: "MCA × Wallaroos",
    category: "Industry Advocacy",
    filter: "Advocacy",
    kind: "film",
    featured: true,
    year: "2025",
    location: "Canberra, Australia",
    summary:
      "A stadium activation for the Minerals Council of Australia's 'A Career in Mining' campaign, produced with the Wallaroos women's rugby team via Launchpad Digital.",
    cardCopy:
      "A stadium activation encouraging young women into mining careers, produced with the Wallaroos rugby team.",
    description: [
      "The Minerals Council of Australia partnered with the Wallaroos to front its 'A Career in Australian Mining' campaign - encouraging young women to consider mining as a career path.",
      "Stage Two shot the activation pitchside at GIO Stadium in Canberra, capturing the players against the stadium's big screen for a content package delivered across broadcast and social formats, via agency Launchpad Digital.",
    ],
    services: ["Brand Film", "Photography", "Social Cutdowns"],
    cover: {
      src: "/images/work/mca-wallaroos/mca-wallaroos-01.jpg",
      alt: "Three Wallaroos players on the pitch at GIO Stadium, Canberra, in front of the 'A Career in Australian Mining' big screen",
    },
    gallery: [
      { src: "/images/work/mca-wallaroos/mca-wallaroos-01.jpg", alt: "Three Wallaroos players on the pitch at GIO Stadium, Canberra" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-02.jpg", alt: "Players walking onto the pitch with the campaign screen behind them" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-03.jpg", alt: "Players passing a rugby ball on the pitch" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-04.jpg", alt: "Stage Two crew filming pitchside with a gimbal rig" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-05.jpg", alt: "Player mid-action catching a pass" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-06.jpg", alt: "Players laughing between takes" },
      { src: "/images/work/mca-wallaroos/mca-wallaroos-07.jpg", alt: "Team lineup on the pitch with the crew" },
    ],
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((p) => p.slug === slug);
}

export function filterCategories(): FilterCategory[] {
  const set = new Set(workProjects.map((p) => p.filter));
  return Array.from(set);
}
