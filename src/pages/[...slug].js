import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import Stories from "@/pesayetu/components/Stories";
import StoriesNavigation from "@/pesayetu/components/StoriesNavigation";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticPaths from "@/pesayetu/functions/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";
// Define route post type.
const postType = "post";

export default function Index({
  archive,
  activeCategory,
  categories,
  pagination,
  post,
  posts,
  blocks,
  ...props
}) {
  let authorName = `${post?.author?.node?.firstName ?? ""} ${
    post?.author?.node?.lastName ?? ""
  }`;
  if (authorName?.length < 2) {
    authorName = post?.author?.node?.nickname ?? post?.author?.node?.slug;
  }

  const featuredStory = blocks?.featuredStories
    ? blocks?.featuredStories[activeCategory]
    : null;

  const postsItems = formatStoryPosts(posts, featuredStory);

  const filteredCategories = categories?.edges
    ?.map(({ node }) => {
      return { ...node };
    })
    ?.filter(({ slug }) => slug !== "uncategorized");

  return (
    <Page {...props}>
      {archive ? (
        <>
          <Hero {...blocks?.otherHero} />
          <StoriesNavigation
            categories={filteredCategories}
            activeCategory={activeCategory}
          />
          <Stories
            activeCategory={activeCategory}
            featuredStoryProps={featuredStory}
            items={postsItems}
            pagination={pagination}
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
  }),
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({}),
      })
    ),
  }),
  post: PropTypes.shape({
    date: PropTypes.string,
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
  pagination: PropTypes.shape({}),
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.string,
      blocks: PropTypes.arrayOf(PropTypes.shape({})),
      featuredImage: PropTypes.shape({
        node: PropTypes.shape({
          sourceUrl: PropTypes.string,
        }),
      }),
    })
  ),
};

Index.defaultProps = {
  archive: undefined,
  activeCategory: undefined,
  blocks: undefined,
  categories: undefined,
  post: undefined,
  posts: undefined,
  pagination: undefined,
};

export async function getStaticPaths() {
  return getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  const activeCategory = params.slug[1];
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    params,
    postType,
    preview,
    previewData
  );

  if (notFound) {
    return {
      notFound,
    };
  }
  const blocks = formatBlocksForSections(props?.post?.blocks);
  return {
    props: {
      ...props,
      blocks,
      activeCategory,
    },
    revalidate,
  };
}
