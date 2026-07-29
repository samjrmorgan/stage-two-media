export type Collaboration = {
  slug: string;
  title: string;
  role: string;
  copy: string;
  link: string;
  linkLabel: string;
  image: { src: string; alt: string };
};

export const collaborations: Collaboration[] = [
  {
    slug: "coast-to-coast-to-coast",
    title: "Coast to Coast to Coast",
    role: "Drone Cinematography",
    copy: "Stage Two provided all aerial drone work for this independent feature documentary - joining the production as a specialist collaborator rather than the primary crew.",
    link: "https://filmfreeway.com/CoasttoCoasttoCoast",
    linkLabel: "View on FilmFreeway",
    image: {
      src: "/images/collaborations/coast-to-coast-to-coast-01.jpg",
      alt: "Aerial drone view of a forested coastline and river estuary",
    },
  },
];
