import type { APIContext } from "astro";
import { BLOG_EXPERIMENT_KEY } from "@constants";

export const isClientSubscribedToABlogExperiment = (context: APIContext) => {
  if (context.cookies.has(BLOG_EXPERIMENT_KEY)) {
    return true;
  }

  return false;
};
