// Simplified data structure
type Blog = {
  title: string;
  description: string;
  poster: string | null;
  cta: string;
  slug: string;
};

// Simplified data. Ideally lives within the CMS DB
export const BLOG_CONTENT: Record<string, Blog> = {
  // varying titles
  "betting-on-you-jodudDoa": {
    title: "Betting on you",
    description:
      "This experiment variant has a simple title. Variant jodudDoa. Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster: null,
    cta: "Sign up now",
    slug: "betting-on-you-jodudDoa",
  },
  "betting-on-you-antROPricAP": {
    title: "Betting on you: the ultimate guide to being a better you",
    description:
      "Experiment variant antROPricAP. Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster: null,
    cta: "Sign up now",
    slug: "betting-on-you-antROPricAP",
  },
  "betting-on-you-PtaTHImPent": {
    title: "Betting on you: be a better you asap",
    description:
      "Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster: null,
    cta: "Sign up now",
    slug: "betting-on-you-PtaTHImPent",
  },
  // varying images
  "betting-on-you-Gjig08mpd": {
    title: "Betting on you",
    description:
      "Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster:
      "https://images.pexels.com/photos/3880943/pexels-photo-3880943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Sign up now",
    slug: "betting-on-you-Gjig08mpd",
  },
  "betting-on-you-asfa979asnd": {
    title: "Betting on you",
    description:
      "Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster:
      "https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Sign up now",
    slug: "betting-on-you-asfa979asnd",
  },
  "betting-on-you-sdfujapoi0": {
    title: "Betting on you",
    description:
      "Betting on You (2021) is a hands-on guide to navigating the modern workplace. If you're an employee in a big corporation, it can feel like you have no agency over your work life. But by putting yourself first and changing your mindset about work, you can make big changes right where you are. And if you need to leave your job, you can plan strategically for the next chapter.",
    poster:
      "https://images.pexels.com/photos/2740955/pexels-photo-2740955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Sign up now",
    slug: "betting-on-you-sdfujapoi0",
  },
  // second (experiment) article with varying content values
  "lives-of-the-stoics-aaaaa": {
    title: "Lives of the stoics (aaaaa)",
    description: "This is experiment variant aaaaa.",
    poster:
      "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cta: "Sign up right away",
    slug: "lives-of-the-stoics-aaaaa",
  },
  "lives-of-the-stoics-bbbbb": {
    title: "Lives of the stoics (bbbbb)",
    description: "This is experiment variant bbbbb.",
    poster: null,
    cta: "Sign up immediately",
    slug: "lives-of-the-stoics-bbbbb",
  },
  "lives-of-the-stoics-ccccc": {
    title: "Lives of the stoics (ccccc)",
    description: "This is experiment variant ccccc.",
    poster: null,
    cta: "Sign up now",
    slug: "lives-of-the-stoics-ccccc",
  },
  // standard article with no experiment
  "the-latte-factor": {
    title: "The latte factor",
    description:
      "The Latte Factor (2019) tells the story of Zoey, a fictional young woman in her late 20s living in Brooklyn.",
    poster: null,
    cta: "Sign up today",
    slug: "the-latte-factor",
  },
};
