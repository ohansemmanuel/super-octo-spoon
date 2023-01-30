/**
 * Simplification: assume remote calls to a headless CMS
 */

import { BLOG_CONTENT } from "@constants";
import { sleep } from "./sleep";

export const getBlogBySlug = async (slug: string) => {
  await sleep(100);

  return BLOG_CONTENT[slug] ?? null;
};
