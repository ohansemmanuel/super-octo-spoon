import { BLOG_EXPERIMENT_KEY, EXPERIMENTS } from "@constants";

import { sleep } from "./sleep";
import { getRandomIntegerBetweenBoundaries as random } from "./getRandomIntegerBetweenBoundaries";

/**
 * Given a slug, return a random experiment variant or null if blog is under no experiment.
 * NB: this is an over simplification. In the real world, the variations
 * will be set in the AB test engine UI and exposed via an API
 */
export const getBlogExperimentClientAssignment = async (slug: string) => {
  // fake latency
  await sleep(200);

  // assuming the AB engine runs multiple experiments (not just for the blogs)
  const allBlogExperiments = EXPERIMENTS[BLOG_EXPERIMENT_KEY] ?? [];

  // all experiments associated to this specific blog
  const specificBlogExperiments = allBlogExperiments.filter(
    (e) => e.slug === slug
  );

  if (!specificBlogExperiments) {
    return null;
  }

  // return variant for one of the (potential) multiple experiments running for this blog
  // NB: basic randomization. Doesn't take bucket weights into consideration

  const activeExperiment =
    specificBlogExperiments[random(0, specificBlogExperiments.length - 1)];

  if (!activeExperiment) {
    return null;
  }

  return (
    activeExperiment.variants[
      random(0, activeExperiment.variants.length - 1)
    ] ?? null
  );
};
