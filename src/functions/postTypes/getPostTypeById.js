import isHierarchicalPostType from '@/pesayetu/functions/postTypes/isHierarchicalPostType';
import processPostTypeQuery from '@/pesayetu/functions/postTypes/processPostTypeQuery';
import queryPageById from '@/pesayetu/lib/wordpress/pages/queryPageById';
import queryPostById from '@/pesayetu/lib/wordpress/posts/queryPostById';

/**
 * Retrieve single post by specified identifier.
 *
 * @param  {string}          postType WP post type.
 * @param  {number | string} id       Post identifier.
 * @param  {string}          idType   Type of ID.
 * @param  {string}          preview  Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                   Object containing Apollo client instance and post data or error object.
 */
export default async function getPostTypeById(
  postType,
  id,
  idType = 'SLUG',
  preview = null
) {
  // Define single post query based on post type.
  const postTypeQuery = {
    page: queryPageById,
    post: queryPostById,
  };

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Fix default ID type for hierarchical posts.
  const cleanedIdType = !isHierarchical || idType !== 'SLUG' ? idType : 'URI';

  // Retrieve post type query.
  const query = postTypeQuery?.[postType] ?? null;

  return processPostTypeQuery(
    postType,
    id,
    query,
    { id, idType: cleanedIdType },
    preview
  );
}
