import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import Stories from "@/pesayetu/components/Stories";
// import StoriesNavigation from "@/pesayetu/components/StoriesNavigation";
import StoryPage from "@/pesayetu/components/StoryPage";
import Tabs from "@/pesayetu/components/Tabs";
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
  featuredStory,
  relatedPosts,
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

  return (
    <Page {...props}>
      {archive ? (
        <>
          <Hero {...blocks?.otherHero} />
          <Tabs
            items={[
              {
                label: "News",
                href: "/stories/news",
                children: (
                  <Stories
                    activeCategory={activeCategory}
                    featuredStoryProps={featuredStory}
                    items={posts}
                    pagination={pagination}
                  />
                ),
              },
              {
                label: "Insights",
                href: "/stories/insights",
                children: (
                  <Stories
                    activeCategory={activeCategory}
                    featuredStoryProps={featuredStory}
                    items={posts}
                    pagination={pagination}
                  />
                ),
              },
            ]}
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
  featuredStory: PropTypes.shape({}),
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  post: PropTypes.shape({
    slug: PropTypes.string,
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
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  archive: undefined,
  activeCategory: undefined,
  blocks: undefined,
  categories: undefined,
  post: undefined,
  posts: undefined,
  pagination: undefined,
  featuredStory: undefined,
  relatedPosts: undefined,
};

export async function getStaticPaths() {
  return getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  const {
    slug: [activeCategory],
  } = params;
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
  const blocks = formatBlocksForSections(props?.post?.blocks);
  const featuredStory = blocks?.featuredStories
    ? blocks?.featuredStories[activeCategory]
    : null;

  const posts = formatStoryPosts(props?.posts, featuredStory) || [];
  const relatedPosts =
    formatStoryPosts(
      props?.post?.categories?.edges[0]?.node?.posts?.nodes ?? [],
      { slug: props?.post?.slug, ctaText: blocks?.relatedPosts?.ctaText }
    ) || [];

  const categories =
    props?.categories?.edges
      ?.map(({ node }) => {
        return { ...node };
      })
      ?.filter(({ slug }) => slug !== "uncategorized") ?? [];
  return {
    props: {
      ...props,
      blocks,
      activeCategory,
      categories,
      posts,
      featuredStory,
      relatedPosts: relatedPosts.slice(0, 3),
    },
    revalidate,
  };
}
