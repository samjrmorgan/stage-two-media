export type ClientLogo = {
  name: string;
  logo: string;
  /** Native aspect ratio (width / height) so logos of very different shapes sit at a consistent visual size. */
  aspect: number;
};

export const clientLogos: ClientLogo[] = [
  { name: "World Vision", logo: "/brand/clients/world-vision.png", aspect: 800 / 165 },
  { name: "Google", logo: "/brand/clients/google.png", aspect: 800 / 263 },
  { name: "Visa", logo: "/brand/clients/visa.png", aspect: 677 / 208 },
  { name: "Kiwibank", logo: "/brand/clients/kiwibank.png", aspect: 1 },
  { name: "2degrees", logo: "/brand/clients/2degrees.png", aspect: 800 / 1044 },
  { name: "Topham Guerin", logo: "/brand/clients/topham-guerin.png", aspect: 800 / 195 },
  { name: "International Democratic Union", logo: "/brand/clients/idu.png", aspect: 800 / 300 },
  { name: "Wallaroos", logo: "/brand/clients/wallaroos.png", aspect: 800 / 190 },
  { name: "Launchpad Digital", logo: "/brand/clients/launchpad.png", aspect: 800 / 220 },
  { name: "Pead PR", logo: "/brand/clients/pead-pr.png", aspect: 789 / 325 },
  { name: "Sir Peter Blake Foundation", logo: "/brand/clients/blake-foundation.png", aspect: 1135 / 368 },
];
