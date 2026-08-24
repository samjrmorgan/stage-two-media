export type WorkImage = {
  src: string;
  alt: string;
};

export type FilterCategory =
  | "Humanitarian & NGO"
  | "Documentary & Legacy"
  | "Weddings"
  | "Brand Stories"
  | "Advocacy"
  | "Events";

export type WorkProject = {
  slug: string;
  client: string;
  title: string;
  category: string;
  filter: FilterCategory;
  kind: "film" | "photo";
  /** Vimeo video ID or full vimeo.com URL - leave undefined if there's no film to embed yet. */
  vimeoId?: string;
  /** ISO 8601 duration (e.g. "PT2M30S") for the embedded film - leave undefined if unknown. */
  videoDuration?: string;
  /** Shows a "Stage Two Original" badge on grid cards. */
  isOriginal?: boolean;
  year: string;
  location: string;
  summary: string;
  cardCopy: string;
  description: string[];
  services: string[];
  cover: WorkImage;
  /** Optional alternate cover for grid cards (Home featured grid, /work grid, related-work) - falls back to `cover`. The case study hero always uses `cover`. */
  gridCover?: WorkImage;
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
    gridCover: {
      src: "/images/work/documentary-ghana/ghana-4x5-cover.jpg",
      alt: "Four girls in patterned dresses seated on stone ruins under a stormy sky, Ghana",
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
    vimeoId: "1207932937",
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
    vimeoId: "1207929991",
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
    vimeoId: "952183543",
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
    vimeoId: "1199282820",
    isOriginal: true,
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
    gridCover: {
      src: "/images/work/documentary-zero-to-100/zero-to-100-4x5-cover.jpg",
      alt: "Zero to 100 movie poster featuring a veteran rider and a vintage BSA motorcycle",
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
    vimeoId: "925261552",
    isOriginal: true,
    year: "2024",
    location: "Los Angeles, USA",
    summary:
      "A long-form, in-studio interview with freestyle rap phenomenon Harry Mack, filmed in Los Angeles for host Liam McEwan.",
    cardCopy:
      "A long-form, in-studio interview with freestyle rap phenomenon Harry Mack, filmed on location in Los Angeles.",
    description: [
      "Stage Two travelled to Los Angeles to film a long-form interview between host Liam McEwan, an entertainment journalist with the Associated Press, and Harry Mack, the freestyle rapper known for viral improvised performances.",
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
    vimeoId: "1199271840",
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
    gridCover: {
      src: "/images/work/weddings/ben-mirjam-4x5-cover.jpg",
      alt: "Bride and groom walking hand in hand through confetti",
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
    featured: true,
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
    gridCover: {
      src: "/images/work/nexus-logistics/nexus-logistics-4x5-cover.jpg",
      alt: "Nexus Logistics branded crane arm lifting a shipping container in the yard",
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
    vimeoId: "1215650317/a959907d6c",
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
    gridCover: {
      src: "/images/work/luxury-cruising/luxury-cruising-4x5-cover.jpg",
      alt: "Liberté superyacht poster: aerial shot of the vessel underway, with the Luxury Cruising New Zealand logo",
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
    slug: "presence-io",
    client: "Presence.io",
    title: "Presence.io - Expand North Star",
    category: "Event Coverage",
    filter: "Brand Stories",
    kind: "film",
    year: "2023",
    location: "Dubai, United Arab Emirates",
    summary:
      "Multi-day event coverage of Presence.io at Expand North Star 2023 in Dubai - expo-floor content, delegate portraits and behind-the-scenes moments across the three-day summit.",
    cardCopy:
      "Multi-day coverage of Presence.io at Expand North Star 2023, from the expo floor to the Dubai waterfront.",
    description: [
      "Stage Two travelled to Dubai to cover Presence.io's presence at Expand North Star 2023, one of the city's major tech and innovation summits, capturing the brand's booth, staff and delegate interactions across the show floor.",
      "Coverage ran across all three days of the event, delivering same-day content alongside a full library of expo photography and portraiture for the brand to draw on long after the summit wrapped.",
    ],
    services: ["Event Filming", "Photography", "Multi-Camera Production", "Social Cutdowns"],
    cover: {
      src: "/images/work/presence-io/presence-io-01.jpg",
      alt: "A Presence team member looking out over Dubai Marina",
    },
    gallery: [
      { src: "/images/work/presence-io/presence-io-01.jpg", alt: "A Presence team member looking out over Dubai Marina" },
      { src: "/images/work/presence-io/presence-io-02.jpg", alt: "The Presence team lined up along the Dubai Marina waterfront" },
      { src: "/images/work/presence-io/presence-io-03.jpg", alt: "Presence staff on the expo booth floor" },
      { src: "/images/work/presence-io/presence-io-04.jpg", alt: "Delegates in conversation at the Presence booth" },
      { src: "/images/work/presence-io/presence-io-05.jpg", alt: "Delegates seated for a keynote session" },
      { src: "/images/work/presence-io/presence-io-06.jpg", alt: "Portrait of an attendee at the summit" },
      { src: "/images/work/presence-io/presence-io-07.jpg", alt: "Sunset through palm trees in Dubai" },
      { src: "/images/work/presence-io/presence-io-08.jpg", alt: "The Dubai Marina skyline at dusk" },
    ],
  },
  {
    slug: "thrive-health",
    client: "Thrive Health",
    title: "Thrive Health - Waiake Medical",
    category: "Brand & Launch Photography",
    filter: "Brand Stories",
    kind: "photo",
    year: "2025",
    location: "Waiake, Auckland, New Zealand",
    summary:
      "Full brand photography and launch-night coverage for Waiake Medical, a new clinic opening under the Thrive Health group in Auckland.",
    cardCopy:
      "Brand photography and launch-night coverage for a new Thrive Health medical clinic in Auckland.",
    description: [
      "Stage Two shot a complete photography package for the opening of Waiake Medical, a new clinic under the Thrive Health group - covering the building, signage and every clinical space from reception through to consult and treatment rooms.",
      "Coverage continued into the evening for the clinic's launch event, capturing the practice's doctors and staff greeting guests, family and colleagues on opening night.",
      "The result is a single, consistent asset library Thrive Health can draw on for the practice's website, signage and marketing - real spaces and real people, not stock photography.",
    ],
    services: ["Brand Photography", "Interior & Exterior Photography", "Event Photography"],
    cover: {
      src: "/images/work/thrive-health/thrive-health-01.jpg",
      alt: "Waiake Medical signage on the clinic's green-tiled exterior",
    },
    gallery: [
      { src: "/images/work/thrive-health/thrive-health-01.jpg", alt: "Waiake Medical signage on the clinic's green-tiled exterior" },
      { src: "/images/work/thrive-health/thrive-health-02.jpg", alt: "Waiake Medical monument sign surrounded by greenery" },
      { src: "/images/work/thrive-health/thrive-health-03.jpg", alt: "Reception desk inside the clinic" },
      { src: "/images/work/thrive-health/thrive-health-04.jpg", alt: "A consult room with desk and examination table" },
      { src: "/images/work/thrive-health/thrive-health-05.jpg", alt: "A Thrive-branded car parked outside the clinic" },
      { src: "/images/work/thrive-health/thrive-health-06.jpg", alt: "Interior clinic space with Waiake Medical wall signage and flowers" },
      { src: "/images/work/thrive-health/thrive-health-07.jpg", alt: "Guests mingling at the clinic's launch night" },
      { src: "/images/work/thrive-health/thrive-health-08.jpg", alt: "Guests laughing together at the launch night event" },
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
      src: "/images/work/mca-wallaroos/mca-wallaroos-09.jpg",
      alt: "Three Wallaroos players standing arms crossed on the pitch at GIO Stadium, Canberra, in front of the 'A Career in Australian Mining' big screen",
    },
    gridCover: {
      src: "/images/work/mca-wallaroos/mca-wallaroos-4x5-cover.jpg",
      alt: "Wallaroos players standing arms crossed on the pitch at GIO Stadium, Canberra, in front of the 'A Career in Australian Mining' big screen",
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
  {
    slug: "mca-fuel-tax-credit",
    client: "Minerals Council of Australia",
    title: "MCA - Fuel Tax Credit",
    category: "Industry Advocacy",
    filter: "Advocacy",
    kind: "film",
    year: "2025",
    location: "Queensland & Western Australia",
    summary:
      "A multi-location advocacy film for the Minerals Council of Australia, produced via Launchpad Digital, showing how the fuel tax credit scheme supports industries far beyond mining - from grain farming to reef tourism.",
    cardCopy:
      "A multi-location advocacy film on the fuel tax credit scheme, shot across farms, the Great Barrier Reef and regional Australia.",
    description: [
      "Stage Two filmed on location across regional Queensland and Western Australia for a Minerals Council of Australia campaign on the fuel tax credit scheme, produced via agency Launchpad Digital.",
      "The brief called for proof that the scheme reaches well beyond the mining sector - so filming covered a working grain harvest and grower interview, a marine research and reef tourism operation in the Whitsundays, and the regional industries in between.",
      "The result is a multi-location advocacy piece built from real operators and real footage, delivered for broadcast and digital placement.",
    ],
    services: ["Multi-Location Filming", "Interview Filming", "Aerial & Drone", "Editing"],
    cover: {
      src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-02.jpg",
      alt: "A combine harvester working a wheat field at harvest time",
    },
    gallery: [
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-02.jpg", alt: "A combine harvester working a wheat field at harvest time" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-03.jpg", alt: "Grain silos on a regional Australian farm" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-04.jpg", alt: "Close-up of ripe wheat in a field" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-07.jpg", alt: "A farmer being interviewed in front of machinery on his property" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-01.jpg", alt: "Aerial view of a coastal resort in the Whitsundays" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-08.jpg", alt: "The Australian red ensign flying from the stern of a research boat" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-05.jpg", alt: "A diver descending into the Great Barrier Reef" },
      { src: "/images/work/mca-fuel-tax-credit/mca-fuel-tax-credit-06.jpg", alt: "A research diver preparing gear aboard a boat" },
    ],
  },
  {
    slug: "topham-guerin-dominican-republic",
    client: "Topham Guerin",
    title: "Topham Guerin - Dominican Republic",
    category: "International Production",
    filter: "Advocacy",
    kind: "film",
    year: "2024",
    location: "Santo Domingo & Santiago, Dominican Republic",
    summary:
      "Multi-week, multi-camera content production on location across the Dominican Republic for international communications agency Topham Guerin.",
    cardCopy:
      "Multi-week, multi-camera production on location in the Dominican Republic, covering public events and location b-roll.",
    description: [
      "Stage Two spent several weeks on the ground in Santo Domingo and Santiago producing content for Topham Guerin, an international political and public communications agency.",
      "The brief covered public events, cultural context and location b-roll across the country's historic Zona Colonial and beyond, delivered as a fast-turnaround content library for an international client working to a live schedule.",
    ],
    services: ["On-Location Filming", "Multi-Camera Production", "Photography", "Rapid-Turnaround Editing"],
    cover: {
      src: "/images/work/topham-guerin-dr/topham-guerin-dr-01.jpg",
      alt: "Aerial view of a coastal city in the Dominican Republic",
    },
    gallery: [
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-01.jpg", alt: "Aerial view of a coastal city in the Dominican Republic" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-02.jpg", alt: "Colourful street scene in the Zona Colonial, Santo Domingo" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-03.jpg", alt: "Historic colonial building facade" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-04.jpg", alt: "A woman singing at a historic gate" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-05.jpg", alt: "Dancers in traditional Dominican dress" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-06.jpg", alt: "Colonial-era statue in a plaza" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-07.jpg", alt: "Colourful festival decorations" },
      { src: "/images/work/topham-guerin-dr/topham-guerin-dr-08.jpg", alt: "A local man in front of a corner store" },
    ],
  },
  {
    slug: "idu-wellington",
    client: "International Democratic Union",
    title: "IDU Forum - Wellington",
    category: "Event Production",
    filter: "Events",
    kind: "film",
    year: "2024",
    location: "Wellington, New Zealand",
    summary:
      "Multi-camera event production for the 2024 IDU Forum Asia-Pacific, a multi-day international conference held in Wellington.",
    cardCopy:
      "Multi-camera coverage of a multi-day international forum, from keynote stage to panel sessions.",
    description: [
      "Stage Two provided full event production for the 2024 IDU Forum Asia-Pacific in Wellington, covering keynote addresses, panel discussions and the surrounding events across the multi-day conference.",
      "Coverage ran across multiple stages and formats - stage photography, multi-camera panel filming, and a same-event wrap-up video - delivered on a live conference schedule.",
    ],
    services: ["Event Filming", "Multi-Camera Production", "Stage Photography", "Wrap-Up Video"],
    cover: {
      src: "/images/work/idu-wellington/idu-wellington-01.jpg",
      alt: "A speaker addressing the 2024 IDU Forum Asia-Pacific from the keynote stage",
    },
    gallery: [
      { src: "/images/work/idu-wellington/idu-wellington-01.jpg", alt: "A speaker addressing the 2024 IDU Forum Asia-Pacific from the keynote stage" },
      { src: "/images/work/idu-wellington/idu-wellington-02.jpg", alt: "A panel discussion on the IDU Forum stage" },
      { src: "/images/work/idu-wellington/idu-wellington-03.jpg", alt: "Delegates in conversation at the forum reception" },
      { src: "/images/work/idu-wellington/idu-wellington-04.jpg", alt: "Delegates in conversation at Premier House" },
    ],
  },
  {
    slug: "mca-wirna-awards",
    client: "Minerals Council of Australia",
    title: "Women in Resources National Awards",
    category: "Event Photography",
    filter: "Events",
    kind: "photo",
    year: "2024",
    location: "Australia",
    summary:
      "Event photography for the BHP-presented Women in Resources National Awards, held during Minerals Week to recognise women across the Australian resources sector.",
    cardCopy:
      "Event photography for a national awards night recognising women across the Australian resources sector.",
    description: [
      "Stage Two provided event photography for the Women in Resources National Awards, part of the Minerals Council of Australia's annual Minerals Week programme.",
      "Coverage focused on the step-and-repeat and award presentations, delivering a fast-turnaround gallery for the Minerals Council and its award partners.",
    ],
    services: ["Event Photography"],
    cover: {
      src: "/images/work/mca-wirna-awards/mca-wirna-awards-01.jpg",
      alt: "Award recipients and presenters posing together at the Women in Resources National Awards",
    },
    gallery: [
      { src: "/images/work/mca-wirna-awards/mca-wirna-awards-01.jpg", alt: "Award recipients and presenters posing together at the Women in Resources National Awards" },
      { src: "/images/work/mca-wirna-awards/mca-wirna-awards-02.jpg", alt: "Group photo in front of the awards step-and-repeat" },
      { src: "/images/work/mca-wirna-awards/mca-wirna-awards-03.jpg", alt: "Award recipients and presenters at the evening's ceremony" },
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
