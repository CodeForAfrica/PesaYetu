// Define valid WP post types (singular and plural GraphQL names).
export const postTypes = {
  page: {
    pluralName: "pages",
    route: "",
  },
  post: {
    pluralName: "posts",
    route: "stories",
  },
};

// Define hierarchical post types.
export const hierarchicalPostTypes = ["page", "post"];

/**
 * Check if post type is valid.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean} Whether provided post type is valid.
 */
export function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType);
}

/**
 * Check if post type is hierarchical.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean} Whether provided post type is hierarchical.
 */
export function isHierarchicalPostType(postType) {
  return hierarchicalPostTypes.includes(postType);
}
