import type { EXPERIMENTS } from "./experiments";
import type { BLOG_EXPERIMENT_KEY } from "./blogExperimentKey";

export const ROOT_SLUGS = [
  "betting-on-you",
  "lives-of-the-stoics",
  "the-latte-factor",
] as const;

type SLUG_VARIANTS =
  (typeof EXPERIMENTS)[typeof BLOG_EXPERIMENT_KEY][number]["variants"][number]["id"];

type ROOT_SLUG = (typeof ROOT_SLUGS)[number];

type CumulativeSlugs = ROOT_SLUG | `${ROOT_SLUG}-${SLUG_VARIANTS}`;
type CtrlSlugs = `${ROOT_SLUG}-ctrl`;

export type Slug = Exclude<CumulativeSlugs, CtrlSlugs>;
