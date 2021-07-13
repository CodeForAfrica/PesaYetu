import queryPostsArchive from '@/pesayetu/lib/wordpress/posts/queryPostsArchive';

// Define SEO for archives.
const archiveQuerySeo = {
  post: {
    query: queryPostsArchive,
    title: 'Stories',
    description: '',
  },
};

export default archiveQuerySeo;
