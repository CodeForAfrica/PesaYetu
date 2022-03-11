import { gql } from "@apollo/client";

import isHierarchicalPostType from "@/pesayetu/functions/postTypes/isHierarchicalPostType";
import isValidPostType from "@/pesayetu/functions/postTypes/isValidPostType";
import { postTypes } from "@/pesayetu/lib/wordpress/_config/postTypes";
import { initializeWpApollo } from "@/pesayetu/lib/wordpress/connector";

/**
 * Retrieve static paths by post type.
 *
 * @param  {string} postType WP post type.
 * @return {object}          Post type paths.
 */
export default async function getPostTypeStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null;
  }

  // Retrieve post type plural name.
  const { pluralName } = postTypes[postType];

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Determine path field based on hierarchy.
  const pathField = isHierarchical ? "uri" : "slug";

  // Construct query based on post type.
  const query = gql`
    query GET_SLUGS {
      ${pluralName}(first: 10000) {
        edges {
          node {
            ${pathField}
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
      categories {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Execute query.
  const result = await apolloClient.query({ query });
  const posts = result?.data?.[pluralName];
  const categories = result?.data?.categories?.edges
    ?.filter(({ node: { slug } }) => !slug.includes("uncategorized"))
    ?.map(({ node: { slug } }) => {
      return {
        params: {
          slug: [slug],
        },
      };
    });

  const total = posts?.pageInfo?.offsetPagination?.total ?? 0;
  const pageCount = total ? 1 + Math.ceil(Math.max(total - 6, 0) / 9) : 0;
  const pageArray = [...Array(pageCount).keys()];

  const categoryPagePaths = categories?.reduce((acc, cur) => {
    const currentSlug = cur.params.slug;
    const x = pageArray.map((p) => {
      return {
        params: {
          slug: [...currentSlug, (p + 1).toString()],
        },
      };
    });
    return acc.concat(x);
  }, []);

  const cat = categoryPagePaths.concat(categories);

  // Process paths.
  const paths = (
    posts?.edges?.map((post) => {
      // Trim leading and trailing slashes then split into array on inner slashes.
      const slug = post.node[pathField].replace(/^\/|\/$/g, "").split("/");
      return {
        params: {
          slug,
        },
      };
    }) ?? []
  )
    // Filter out certain posts with custom routes (e.g., homepage).
    // also filter uncategorized category route route
    .filter(
      (post) =>
        !!post.params.slug.join("/").length &&
        !post.params.slug.includes("uncategorized")
    )
    // include categories path
    .concat(cat);

  return {
    paths,
    fallback: "blocking",
  };
}
