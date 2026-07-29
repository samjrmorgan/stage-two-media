export type TimelineYear = {
  year: string;
  items: string[];
};

export type PersonTimeline = {
  name: string;
  title: string;
  timeline: TimelineYear[];
};

export const teamTimelines: PersonTimeline[] = [
  {
    name: "Sam Morgan",
    title: "Director, Stage Two",
    timeline: [
      {
        year: "2015",
        items: ["First production job as Production Coordinator at NZME"],
      },
      {
        year: "2016",
        items: ["Senior video producer at Bauer Media"],
      },
      {
        year: "2017",
        items: [
          "Hired as Head of Video at Topham Guerin",
          "Shot his first political campaign",
          "Led video for a winning candidate in the South Australian election",
        ],
      },
      {
        year: "2018",
        items: ["Won the New South Wales state election campaign"],
      },
      {
        year: "2019",
        items: [
          "Three-month federal election campaign contract in Australia",
          "Hired as a Media Advisor to the Australian Prime Minister's Office",
          "Three-month election contract with 10 Downing Street",
          "Documented Brexit on the ground across the UK",
        ],
      },
      {
        year: "2020",
        items: [
          "New Zealand General Election",
          "A second three-month federal election campaign contract in Australia",
        ],
      },
      {
        year: "2023",
        items: ["Stage Two is born", "World Vision and Stage Two Media partner"],
      },
    ],
  },
  {
    name: "Ellie Harwood",
    title: "Stage Two",
    timeline: [],
  },
];
