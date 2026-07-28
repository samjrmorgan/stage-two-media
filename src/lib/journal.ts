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
    slug: "adjusting-to-extreme-conditions",
    title: "Adjusting to extreme conditions",
    tag: "On Location",
    excerpt:
      "From Cambodian humidity to the dry heat on the edges of the Sahara and Arabian deserts - every climate demands a different way of working.",
    body: [
      "No two locations put the same strain on a shoot. The thick humidity of Vietnam and Cambodia fogs lenses the moment you step outside an air-conditioned room, draws condensation inside housings, and turns a lightweight kit list into a constant battle against moisture.",
      "Out on the dry edges of the Sahara and the Arabian desert, the problem flips entirely. Heat radiates off sand and stone well past sunset, gear overheats in direct sun, and dust finds its way into every seal and dial no matter how careful you are.",
      "The fix is never one kit - it's knowing which problem you're solving for before you land. Silica packs and lens cloths for the humidity. Shade discipline, timing around the worst of the heat, and a proper clean-down routine for the dust. Adjusting fast is just part of the job.",
    ],
    cover: {
      src: "/images/journal/adjusting-to-extreme-conditions.jpg",
      alt: "Sam Morgan walking through a hazy, dust-filled landscape of baobab trees, camera in hand",
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
    slug: "why-we-shoot-sony",
    title: "Why we shoot Sony",
    tag: "Craft",
    excerpt:
      "A versatile system built for guerrilla-style shooting, with low-light performance nothing else in its class matches.",
    body: [
      "Every system we've tested comes back to the same shortlist of reasons Sony stays in the bag: a body small enough to move like one person, not a crew, and a sensor that keeps delivering usable footage well after the light most cameras need has gone.",
      "That combination is what makes guerrilla-style shooting possible in the first place - ducking into a crowded alley, following a subject through a doorway, working a scene without a lighting rig to set up first. The gear has to disappear into the moment, not slow it down.",
      "Low light is where it really separates itself. Dusk interiors, dimly lit workshops, a single window's worth of light - situations that would force most systems onto a tripod with a light kit still hold up handheld, in colour, with detail intact. For documentary work shot on the move, that's not a nice-to-have, it's the difference between getting the shot and not.",
    ],
    cover: {
      src: "/images/journal/why-we-shoot-sony.jpg",
      alt: "Sam Morgan walking through a narrow alleyway on location, documentary-style",
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
    slug: "one-red-sock-each",
    title: "One red sock each: how we won the Sir Peter Blake Foundation",
    tag: "Studio",
    excerpt:
      "We're covering the Sir Peter Blake Foundation's 2026 award recipients - and the story of how we got the meeting is our new favourite icebreaker.",
    body: [
      "We're thrilled to share that Stage Two has been engaged by the Sir Peter Blake Foundation to cover its 2026 award recipients - a programme that celebrates New Zealanders carrying forward Sir Peter's legacy of leadership and environmental action.",
      "The red sock is symbolic to Sir Peter Blake, worn in his memory by those who carry his legacy forward. Walking into the pitch meeting, we could only find one spare pair between us - so we each put on a single red sock and went in anyway.",
      "\"We've got one foot in the door,\" we told the room. \"If we win this, we'll put the other sock on.\" It broke the ice instantly - and not long after, we got to put the second sock on.",
      "We can't wait to get started telling these stories properly later in the year.",
    ],
    cover: {
      src: "/images/journal/blake-foundation-ocean.jpg",
      alt: "Deep blue open ocean water, evoking Sir Peter Blake's seafaring legacy",
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
  {
    slug: "where-ai-fits-in-our-workflow",
    title: "Where AI fits in our workflow (and where it doesn't)",
    tag: "Studio",
    excerpt:
      "Every piece of content we deliver is human-made. AI is one tool in the belt - never the one holding the camera.",
    body: [
      "Every piece of content we deliver is produced by us - shot, directed, edited and graded by hand. That doesn't change. What has changed is that a small set of AI tools now sit alongside everything else in the kit, used the same way we'd use any other tool: to solve a specific, practical problem.",
      "In practice that means things like smoothing a transition between two shots that wouldn't otherwise cut cleanly, or generatively filling the edges of a frame when we're reworking a piece into a new aspect ratio and the original footage doesn't stretch that far. Small, technical, mostly invisible fixes - not shortcuts around doing the work.",
      "It's never the centre of a piece, and it's never a replacement for a real shoot, a real edit or a real story. It's there to enhance something we've already made, only when we judge it's actually needed - nothing more.",
    ],
    cover: {
      src: "/images/work/mca-wallaroos/mca-wallaroos-04.jpg",
      alt: "Stage Two crew filming pitchside with a gimbal rig",
    },
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
