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
export const hierarchicalPostTypes = ["page", "posts"];
