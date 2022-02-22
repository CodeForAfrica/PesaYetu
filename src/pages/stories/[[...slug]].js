import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import StoriesPage from "@/pesayetu/components/StoriesPage";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getCategories from "@/pesayetu/functions/getCategories";
import getImagePlaceholder from "@/pesayetu/functions/getImagePlaceholder";
import getPostTypeStaticPaths from "@/pesayetu/functions/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";
// Define route post type.
const postType = "post";

export default function Index({
  archive,
  activeCategory,
  relatedPosts,
  post,
  blocks,
  ...props
}) {
  let authorName = `${post?.author?.node?.firstName ?? ""} ${
    post?.author?.node?.lastName ?? ""
  }`;
  if (authorName?.length < 2) {
    authorName = post?.author?.node?.nickname ?? post?.author?.node?.slug;
  }

  if (post?.customAuthor?.name?.length) {
    authorName = post.customAuthor.name;
  }

  return (
    <Page {...props} post={post}>
      {archive ? (
        <>
          <StoriesPage
            hero={{ ...blocks?.otherHero }}
            activeCategory={activeCategory}
            featuredStories={blocks?.featuredStories}
            {...props}
          />
        </>
      ) : (
        <StoryPage
          {...post}
          {...blocks?.shareStory}
          {...blocks?.insightChart}
          author={authorName}
          category={activeCategory}
          image={post?.featuredImage?.node?.sourceUrl}
          date={new Date(post?.date).toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
          })}
          relatedPosts={{
            ...blocks?.relatedPosts,
            items: relatedPosts,
          }}
          {...props}
        />
      )}
    </Page>
  );
}

Index.propTypes = {
  archive: PropTypes.bool,
  activeCategory: PropTypes.string,
  blocks: PropTypes.shape({
    featuredStories: PropTypes.shape({}),
    insightChart: PropTypes.shape({}),
    otherHero: PropTypes.shape({}),
    shareStory: PropTypes.shape({}),
    relatedPosts: PropTypes.shape({
      ctaText: PropTypes.string,
    }),
  }),
  post: PropTypes.shape({
    slug: PropTypes.string,
    date: PropTypes.string,
    customAuthor: PropTypes.shape({
      name: PropTypes.string,
    }),
    featuredImage: PropTypes.shape({
      node: PropTypes.shape({
        sourceUrl: PropTypes.string,
      }),
    }),
    author: PropTypes.shape({
      node: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        nickname: PropTypes.string,
        slug: PropTypes.string,
      }),
    }),
  }),
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  archive: undefined,
  activeCategory: undefined,
  blocks: undefined,
  post: undefined,
  relatedPosts: undefined,
};

export async function getStaticPaths() {
  return getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  const [activeCategory] = params?.slug || [];
  const categories = await getCategories();

  let items = [];

  if (params?.slug?.length === 1) {
    items = await Promise.all(
      categories?.map(async ({ slug: categorySlug, name }) => {
        const {
          props: { posts: categoryPosts, pagination: categoryPagination },
        } = await getPostTypeStaticProps({ slug: [categorySlug] }, postType);

        return {
          name,
          slug: categorySlug,
          href: `/stories/${categorySlug}`,
          pagination: categoryPagination,
          posts: await Promise.all(
            categoryPosts?.map(async (categoryPost) => {
              const imageProps = await getImagePlaceholder(
                categoryPost.featuredImage?.node?.sourceUrl
              );
              return { ...categoryPost, imageProps };
            }) ?? []
          ),
        };
      })
    );
  }

  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    params,
    postType,
    preview,
    previewData
  );

  if (notFound || props?.error) {
    return {
      notFound: true,
    };
  }
  const blocks = await formatBlocksForSections(props?.post?.blocks || []);
  const postImagePlaceholder = await getImagePlaceholder(
    props?.post?.featuredImage?.node?.sourceUrl
  );
  const relatedPostsNode = await Promise.all(
    props?.post?.categories?.edges?.[0]?.node?.posts?.nodes?.map(
      async (categoryPost) => {
        const imageProps = await getImagePlaceholder(
          categoryPost.featuredImage?.node?.sourceUrl
        );
        return { ...categoryPost, imageProps };
      }
    ) || []
  );
  const relatedPosts = formatStoryPosts(relatedPostsNode) || [];

  return {
    props: {
      ...props,
      blocks,
      activeCategory: activeCategory ?? null,
      items,
      relatedPosts: relatedPosts.slice(0, 3),
      postImagePlaceholder,
    },
    revalidate,
  };
}
