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
  const posts = await apolloClient.query({ query });

  // Process paths.
  const paths = !posts?.data?.[pluralName]?.edges
    ? []
    : posts.data[pluralName].edges
        .map((post) => {
          // Trim leading and trailing slashes then split into array on inner slashes.
          let slug = post.node[pathField].replace(/^\/|\/$/g, "").split("/");
          // slice off the first item as uri includes the parent page name (i.e stories)
          if (isHierarchical) {
            slug = slug.slice(1);
          }

          return {
            params: {
              slug,
            },
          };
        })
        // include categories path
        .concat(
          posts.data.categories.edges.map(({ node: { slug } }) => {
            return {
              params: {
                slug: [slug],
              },
            };
          })
        )
        // Filter out certain posts with custom routes (e.g., homepage).
        .filter((post) => !!post.params.slug.join("/").length);

  return {
    paths,
    fallback: "blocking",
  };
}
