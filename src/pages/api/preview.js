/* eslint-disable camelcase */

import getPostTypeById from "@/pesayetu/functions/postTypes/getPostTypeById";
import { postTypes } from "@/pesayetu/lib/wordpress/_config/postTypes";
import { wpPreviewSecret } from "@/pesayetu/lib/wordpress/connector";

export default async function preview(req, res) {
  try {
    const { token, id, slug, post_type } = req.query;

    // Verify preview secret token.
    if (
      !token ||
      !wpPreviewSecret ||
      token !== wpPreviewSecret ||
      (!id && !slug)
    ) {
      throw new Error("Invalid token");
    }

    const { post, error, errorMessage } = await getPostTypeById(
      post_type,
      id,
      "DATABASE_ID",
      "basic"
    );

    // Handle response errors.
    if (error) {
      throw new Error(errorMessage);
    }

    // Set page preview data and enable preview mode.
    let parent = "";
    if (post_type === "post") {
      parent = post?.categories?.edges[0]?.node?.slug ?? "";
      if (parent.length) {
        parent = `${parent}/`;
      }
    }

    res.setPreviewData({
      post: {
        id: post.databaseId,
        slug: `${parent}${post.slug}`,
        status: post.status,
      },
    });

    const baseRoute = postTypes?.[post_type]?.route ?? "";

    // Redirect to post dynamic route.
    res.redirect(
      `${baseRoute ? `/${baseRoute}` : ""}/${parent}${
        post.slug || post.databaseId
      }`
    );
  } catch (error) {
    return res.status(error?.status || 401).json({
      message:
        error?.message ||
        "An error occurred while attempting to view post preview",
    });
  }
  return null;
}
