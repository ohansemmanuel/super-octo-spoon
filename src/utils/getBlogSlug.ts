import type { APIContext } from "astro";

export const getBlogSlug = (context: APIContext) => context.params.slug || "";
