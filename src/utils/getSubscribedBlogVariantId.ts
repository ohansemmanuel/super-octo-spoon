import { BLOG_EXPERIMENT_KEY } from "@constants";
import type { APIContext } from "astro";

export const getSubscribedBlogVariantId = (context: APIContext) =>
  context.cookies.get(BLOG_EXPERIMENT_KEY).value;
