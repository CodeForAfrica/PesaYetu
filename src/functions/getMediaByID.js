import { initializeWpApollo } from '@/pesayetu/lib/wordpress/connector';
import queryMediaAttributes from '@/pesayetu/lib/wordpress/media/queryMediaAttributes';

/**
 * Retrieve media details by ID.
 *
 * @param  {number} id The media's database ID.
 * @return {object}    Object containing Apollo client instance and post data or error object.
 */
export default async function getMediaByID(id) {
  // No ID? Bail...
  if (!id) {
    return {};
  }

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Execute query.
  const media = await apolloClient
    .query({
      query: queryMediaAttributes,
      variables: {
        id,
      },
    })
    .then((mediaObj) => mediaObj?.data?.mediaItem ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message,
      };
    });

  return media;
}
