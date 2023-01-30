import { BLOG_EXPERIMENT_KEY } from "./blogExperimentKey";

/**
 * House all experiments including the current blog experiment(s)
 */
export const EXPERIMENTS = {
  [BLOG_EXPERIMENT_KEY]: [
    {
      id: 0,
      name: "Catchy headers may convert more",
      slug: "betting-on-you", // corresponds to a unique blog slug
      variants: [
        {
          label: "control",
          id: "jodudDoa",
          weight: 33.333,
        },
        {
          label: "variant 1",
          id: "antROPricAP",
          weight: 33.333,
        },
        {
          label: "variant 2",
          id: "PtaTHImPent",
          weight: 33.333,
        },
      ],
    },
    {
      id: 1,
      name: "Articles with images may perform better",
      slug: "betting-on-you",
      variants: [
        {
          label: "control",
          id: "Gjig08mpd",
          weight: 33.333,
        },
        {
          label: "variant 1",
          id: "asfa979asnd",
          weight: 33.333,
        },
        {
          label: "variant 2",
          id: "sdfujapoi0",
          weight: 33.333,
        },
      ],
    },
    {
      id: 2,
      experiment: "Test another article. Does content matter",
      slug: "lives-of-the-stoics",
      variants: [
        {
          label: "control",
          id: "aaaaa",
          weight: 33.333,
        },
        {
          label: "variant 1",
          id: "bbbbb",
          weight: 33.333,
        },
        {
          label: "variant 2",
          id: "ccccc",
          weight: 33.333,
        },
      ],
    },
  ],
} as const;
