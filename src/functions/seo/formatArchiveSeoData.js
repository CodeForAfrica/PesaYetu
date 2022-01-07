import replaceMultisitePrefix from "@/pesayetu/functions/replaceMultisitePrefix";
import { postTypes } from "@/pesayetu/lib/wordpress/_config/postTypes";

/**
 * Format archive SEO data.
 *
 * @param  {string} postType     WP post type.
 * @param  {object} postsPageSeo WP posts page SEO data.
 * @param  {object} defaultSeo   Formatted default SEO data.
 * @param  {object} fallbackSeo  Fallback (hard-coded) archive SEO data.
 * @param  {object} archiveSeo   Dynamic archive SEO data.
 * @return {object}              Formatted archive SEO data.
 */
export default function formatArchiveSeoData(
  postType,
  postsPageSeo,
  defaultSeo,
  fallbackSeo,
  archiveSeo
) {
  // Check if viewing post archive and have received posts page SEO data.
  if (postType === "post" && postsPageSeo) {
    const canonicalURL = new URL(
      `${defaultSeo?.openGraph?.url ?? ""}/${postTypes?.[postType]?.route}`
    );
    return {
      ...postsPageSeo,
      canonical: `${canonicalURL?.origin}${replaceMultisitePrefix(
        canonicalURL?.pathname
      )}`,
    };
  }

  // Use archive SEO if provided, else generate SEO data from fallback data.
  const canonical = new URL(
    archiveSeo?.canonical ??
      `${defaultSeo?.openGraph?.url ?? ""}/${fallbackSeo?.route}`
  );
  return {
    title:
      archiveSeo?.title ??
      `${fallbackSeo?.title} - ${defaultSeo?.openGraph?.siteName ?? ""}`,
    metaDesc: archiveSeo?.metaDesc ?? fallbackSeo?.description ?? "",
    metaRobotsNofollow: archiveSeo?.metaRobotsNofollow ?? "follow",
    metaRobotsNoindex: archiveSeo?.metaRobotsNoindex ?? "index",
    canonical: `${canonical?.origin}${replaceMultisitePrefix(
      canonical?.pathname
    )}`,
  };
}
