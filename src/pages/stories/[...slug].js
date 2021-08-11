import PropTypes from "prop-types";
import React from "react";

import ExpandedStoy from "@/pesayetu/components/ExpandedStoy";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticPaths from "@/pesayetu/functions/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

// Define route post type.
const postType = "post";

/**
 * Render the News component.
 *
 * @param  {object}  props            The component attributes as props.
 * @param  {object}  props.post       Post data from WordPress.
 * @param  {boolean} props.archive    Whether displaying single post (false) or archive (true).
 * @param  {Array}   props.posts      Array of post data (news) from WordPress.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @return {Element}                  The News component.
 */

export default function Index({ archive, post, blocks, ...props }) {
  console.log(blocks.otherHero);
  return (
    <Page {...props}>
      {archive ? <Hero {...blocks?.otherHero} /> : <ExpandedStoy {...post} />}
    </Page>
  );
}

Index.propTypes = {
  archive: PropTypes.bool,
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
  }),
  post: PropTypes.shape({}),
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
