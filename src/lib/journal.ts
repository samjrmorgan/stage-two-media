export type JournalPost = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  body: string[];
  cover: { src: string; alt: string };
};

export const journalPosts: JournalPost[] = [
  {
    slug: "five-countries-one-camera-bag",
    title: "Five countries, one camera bag",
    tag: "On Location",
    excerpt:
      "What it actually takes to run a documentary shoot solo - from Ghana to Cambodia and everywhere between.",
    body: [
      "Every World Vision expedition starts the same way: a permit application, a packing list that gets shorter each trip, and a flight to somewhere the crew is a team of one.",
      "Running solo on location isn't a budget compromise so much as a way of working - fewer people around a subject means a more honest interview, and a lighter footprint means we can move fast when the light or the moment changes.",
      "Ghana, Sierra Leone, Bangladesh, Senegal, Cambodia - different context every time, same brief underneath: follow the people doing the work, and get out of their way while you do it.",
    ],
    cover: {
      src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-01.jpg",
      alt: "Children walking down a dirt road, Sierra Leone",
    },
  },
  {
    slug: "why-we-made-zero-to-100",
    title: "Why we made Zero to 100",
    tag: "Behind The Scenes",
    excerpt:
      "No client, no brief, no deadline - just a documentary we wanted to exist.",
    body: [
      "Zero to 100 started as an excuse to point a camera at something for the love of it. New Zealand's classic motorsport scene is full of people who've spent decades keeping machines - and each other - running.",
      "We shot it the same way we'd shoot a commissioned documentary: full crew discipline, real coverage, a proper edit. The only difference is nobody was paying for it.",
      "It's the clearest way to show a prospective client what Stage Two actually sounds and looks like when nobody's briefing us - which, it turns out, is the best pitch we have.",
    ],
    cover: {
      src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-06.jpg",
      alt: "Motorcycles racing on track",
    },
  },
  {
    slug: "shooting-weddings-like-documentaries",
    title: "Shooting weddings like documentaries",
    tag: "Craft",
    excerpt:
      "Why the same restraint we use in the field works just as well at a wedding.",
    body: [
      "The instinct with weddings is to choreograph - cue the kiss, cue the toast, cue the first dance. We do the opposite: light the room, stay out of the way, and let the day happen at its own pace.",
      "It's the same principle behind our documentary work - the best moments are the ones nobody planned for camera. A same-week highlight edit goes out fast; the full feature follows once we've had time to sit with the footage properly.",
    ],
    cover: {
      src: "/images/work/weddings/weddings-08.jpg",
      alt: "Bride and groom embracing under an archway",
    },
  },
  {
    slug: "what-to-ask-before-hiring-a-video-production-company",
    title: "What to ask before hiring a video production company",
    tag: "Craft",
    excerpt:
      "A short buyer's guide - the questions that actually tell you who you're hiring.",
    body: [
      "Who's actually on set, what happens if the weather or the schedule changes, and who owns the raw footage afterwards - the answers say more than any showreel does.",
    ],
    cover: {
      src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-05.jpg",
      alt: "A production crew setting up a shot trackside",
    },
  },
  {
    slug: "the-gear-we-pack-for-a-solo-documentary-shoot",
    title: "The gear we actually pack for a solo documentary shoot",
    tag: "Craft",
    excerpt:
      "What fits in one bag when you're both the crew and the camera operator.",
    body: [
      "Every expedition forces the same question: what earns its place in the bag when you're carrying it yourself, through customs, for two weeks. The kit list has gotten shorter every trip - not because we compromise on quality, but because we've learned exactly what we actually use.",
    ],
    cover: {
      src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-01.jpg",
      alt: "Veteran in his workshop",
    },
  },
  {
    slug: "running-a-two-person-production-studio",
    title: "Running a two-person production studio: the honest version",
    tag: "Studio",
    excerpt:
      "Sam and Ellie on what actually changes when there are two of you instead of one.",
    body: [
      "More coverage, less compromise on bigger briefs, and someone else in the edit suite to tell you when a cut isn't working yet. It's not a bigger studio - it's the same lean approach, with a second set of hands.",
    ],
    cover: {
      src: "/images/work/mca-wallaroos/mca-wallaroos-04.jpg",
      alt: "Stage Two crew filming pitchside with a gimbal rig",
    },
  },
  {
    slug: "why-we-shoot-stills-and-video-on-the-same-day",
    title: "Why we shoot stills and video on the same day",
    tag: "Craft",
    excerpt:
      "One crew, one day, two full deliverables - here's why that's not a compromise.",
    body: [
      "Splitting photography and video across two separate shoots doubles the disruption for everyone in front of the camera. Shooting both in the same pass means the stills and the film come from the same real moments, not a recreation of them.",
    ],
    cover: {
      src: "/images/work/weddings/weddings-03.jpg",
      alt: "Bride and groom with wedding party",
    },
  },
  {
    slug: "how-much-does-a-wedding-film-cost-in-nz",
    title: "How much does a wedding film actually cost in NZ?",
    tag: "Craft",
    excerpt:
      "A straight answer to the question most couples are too polite to ask outright.",
    body: [
      "Pricing depends on coverage hours, whether you want a same-week highlight as well as a full feature, and travel - but we'd rather give you a real range up front than make you ask twice.",
    ],
    cover: {
      src: "/images/work/weddings/weddings-01.jpg",
      alt: "Tuscan villa surrounded by cypress trees",
    },
  },
  {
    slug: "how-much-does-a-corporate-video-cost-in-nz",
    title: "How much does a corporate video cost in New Zealand?",
    tag: "Craft",
    excerpt:
      "What actually drives the price of a brand or corporate film, beyond the day rate.",
    body: [
      "Crew size, locations, how many deliverables you need cut down from the same shoot, and turnaround time move the number more than anything else. We'd rather walk you through it than leave you guessing.",
    ],
    cover: {
      src: "/images/work/nexus-logistics/nexus-logistics-03.jpg",
      alt: "Ground-level wide shot of stacked containers and a reach-stacker",
    },
  },
  {
    slug: "one-operator-vs-a-full-crew",
    title: "One operator vs. a full crew: when each makes sense",
    tag: "Studio",
    excerpt:
      "Bigger isn't always better - here's how we actually size a crew to a brief.",
    body: [
      "A solo operator gets closer to a subject and costs less. A full crew unlocks bigger setups, more angles, and more coverage per day. Neither is the default - the brief decides.",
    ],
    cover: {
      src: "/images/work/mca-wallaroos/mca-wallaroos-05.jpg",
      alt: "Player mid-action catching a pass",
    },
  },
  {
    slug: "same-week-wedding-edits-how-we-do-it",
    title: "Same-week wedding edits: how we do it and why",
    tag: "Craft",
    excerpt:
      "The workflow behind getting a highlight film out while the day is still fresh.",
    body: [
      "It comes down to editing on location where we can, and knowing which moments matter before we've even left the wedding. The full feature gets the slower treatment later - the highlight is about speed.",
    ],
    cover: {
      src: "/images/work/weddings/weddings-11.jpg",
      alt: "Guests dancing under string lights",
    },
  },
  {
    slug: "1200-exports-later",
    title: "1,200 exports later: what we've learned about finishing a film properly",
    tag: "Studio",
    excerpt:
      "What actually changes between a good edit and a finished one.",
    body: [
      "Grading, sound, and export settings tuned for wherever the film is actually going to live - a big screen, Instagram, a boardroom TV - matter more than people expect. Most of what separates a finished film from a good rough cut happens after the edit is 'done'.",
    ],
    cover: {
      src: "/images/work/harry-mack-interview/harry-mack-interview-04.jpg",
      alt: "Studio set detail, neon sign and record shelf",
    },
  },
  {
    slug: "why-stage-two-turns-down-some-briefs",
    title: "Why Stage Two turns down some briefs",
    tag: "Studio",
    excerpt:
      "The six kinds of stories we chase, and why we've stopped trying to be a production company for everything.",
    body: [
      "Saying no to work outside our six categories is what keeps the work inside them good. It's a harder discipline than it sounds, especially early on - but it's the reason the studio has a voice at all.",
    ],
    cover: {
      src: "/images/work/documentary-cambodia/documentary-cambodia-07.jpg",
      alt: "Angkor Wat reflected in water at sunset, Cambodia",
    },
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
