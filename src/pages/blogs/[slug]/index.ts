import type { APIContext } from "astro";
import {
  getBlogSlug,
  getSubscribedBlogVariantId,
  getBlogExperimentClientAssignment,
  isClientSubscribedToABlogExperiment,
} from "@utils";
import { BLOG_EXPERIMENT_KEY } from "@constants";

export async function get(context: APIContext) {
  const slug = getBlogSlug(context);

  if (isClientSubscribedToABlogExperiment(context)) {
    const id = getSubscribedBlogVariantId(context);
    return context.redirect(`/blogs/${slug}/${id}`);
  }

  const experimentVariant = await getBlogExperimentClientAssignment(slug);

  if (!experimentVariant) {
    // blog isn't assigned to any experiment internally
    return context.redirect(`/blogs/s/${slug}`); // s = "standard"
  }

  context.cookies.set(BLOG_EXPERIMENT_KEY, experimentVariant.id, {
    path: `/blogs/${slug}`,
    httpOnly: true,
  });

  return context.redirect(`/blogs/${slug}/${experimentVariant.id}`);
}
