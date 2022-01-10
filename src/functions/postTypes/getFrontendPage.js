import getMenus from "@/pesayetu/functions/menus/getMenus";
import replaceMultisitePrefix from "@/pesayetu/functions/replaceMultisitePrefix";
import formatDefaultSeoData from "@/pesayetu/functions/seo/formatDefaultSeoData";
import frontendPageSeo from "@/pesayetu/lib/wordpress/_config/frontendPageSeo";
import { initializeWpApollo } from "@/pesayetu/lib/wordpress/connector";
import queryDefaultPageData from "@/pesayetu/lib/wordpress/pages/queryDefaultPageData";

/**
 * Retrieve data for Frontend-only route (i.e., page that do not exist in WordPress).
 *
 * @param  {string} route Frontend route.
 * @return {object}       Object containing Apollo client instance and post data or error object.
 */
export default async function getFrontendPage(route) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null,
  };

  // Execute query.
  response.post = await apolloClient
    .query({ query: queryDefaultPageData })
    .then(async (res) => {
      const { homepageSettings, siteSeo, menus } = res.data;

      // Retrieve menus.
      response.menus = await getMenus(menus);

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({ homepageSettings, siteSeo });

      // Set route SEO.
      const canonical = new URL(
        `${response.defaultSeo?.openGraph?.url ?? ""}/${route}`
      );
      canonical.pathname = replaceMultisitePrefix(canonical?.pathname);
      return {
        seo: {
          title: `${frontendPageSeo?.[route]?.title} - ${
            response.defaultSeo?.openGraph?.siteName ?? ""
          }`,
          metaDesc: frontendPageSeo?.[route]?.description,
          canonical: canonical.toString(),
        },
      };
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;

      return null;
    });

  return response;
}
