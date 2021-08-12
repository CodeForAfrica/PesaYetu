import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticPaths from "@/pesayetu/functions/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

// Define route post type.
const postType = "post";
const dateOptions = {
  year: "numeric",
  month: "long",
};

export default function Index({ archive, post, blocks, ...props }) {
  const { author, categories, featuredImage, date } = post;
  let authorName = `${author?.node?.firstName ?? ""} ${
    author?.node?.lastName ?? ""
  }`;
  if (authorName?.length < 2) {
    authorName = author?.node?.nickname ?? author?.node?.slug;
  }
  const image = featuredImage?.node?.sourceUrl;

  const category = categories?.edges[0]?.node?.name;

  return (
    <Page {...props}>
      {archive ? (
        <Hero {...blocks?.otherHero} />
      ) : (
        <StoryPage
          {...post}
          {...blocks?.shareStory}
          author={authorName}
          category={category}
          image={image}
          date={new Date(date).toLocaleString("en-GB", dateOptions)}
        />
      )}
    </Page>
  );
}

Index.propTypes = {
  archive: PropTypes.bool,
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    shareStory: PropTypes.shape({}),
  }),
  post: PropTypes.shape({
    date: PropTypes.string,
    featuredImage: PropTypes.shape({
      node: PropTypes.shape({
        sourceUrl: PropTypes.string,
      }),
    }),
    categories: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })
      ),
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
};

Index.defaultProps = {
  archive: undefined,
  blocks: undefined,
  post: undefined,
};

export async function getStaticPaths() {
  return getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
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
    },
    revalidate,
  };
}
