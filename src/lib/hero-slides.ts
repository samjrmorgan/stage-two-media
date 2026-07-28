export type HeroSlide = {
  src: string;
  alt: string;
  award?: {
    label: string;
    detail: string;
    badges: { src: string; alt: string }[];
  };
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/switzerland-alps-mountain-lake-landscape.jpg",
    alt: "Cinematic aerial landscape of a turquoise alpine lake surrounded by the Swiss Alps",
  },
  {
    src: "/images/hero/primary-colours-senegal.jpg",
    alt: "\"Primary Colours of Senegal\" - a man walking past a red curtained doorway in a Senegalese village",
    award: {
      label: "Award-winning photography",
      detail: "\"Primary Colours of Senegal\", shot on location with World Vision",
      badges: [
        {
          src: "/brand/awards/refocus-peoples-vote.png",
          alt: "People's Vote Award, Travel - reFocus Awards 2025 Color Photography Contest",
        },
        {
          src: "/brand/awards/refocus-honorable-mention.png",
          alt: "Honorable Mention, Street - reFocus Awards 2025 Color Photography Contest",
        },
        {
          src: "/brand/awards/chromatic-honorable-mention.png",
          alt: "Honorable Mention - Chromatic Photography Awards 2025",
        },
      ],
    },
  },
  {
    src: "/images/work/documentary-zero-to-100/documentary-zero-to-100-11.jpg",
    alt: "Rider giving a thumbs up mid-race, from Stage Two's documentary series Zero to 100",
  },
  {
    src: "/images/work/documentary-ghana/documentary-ghana-03.jpg",
    alt: "Silhouette of a woman in a doorway, Ghana",
  },
  {
    src: "/images/work/weddings/weddings-06.jpg",
    alt: "Bride and groom embracing in golden light",
  },
  {
    src: "/images/work/documentary-sierra-leone/documentary-sierra-leone-08.jpg",
    alt: "Close portrait of a child's eyes, Sierra Leone",
  },
  {
    src: "/images/work/mca-wallaroos/mca-wallaroos-01.jpg",
    alt: "Wallaroos players on the pitch at GIO Stadium, Canberra",
  },
  {
    src: "/images/work/advocacy/advocacy-08.jpg",
    alt: "Advocacy production still, diver at sea",
  },
  {
    src: "/images/work/luxury-cruising/luxury-cruising-01.jpg",
    alt: "The superyacht Liberté cruising past an island near Auckland",
  },
];
