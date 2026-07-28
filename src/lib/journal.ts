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
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
