import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";
import Stories from "@/pesayetu/components/Stories";
import Tabs from "@/pesayetu/components/Tabs";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(60)} 0 ${typography.pxToRem(80)}  `,
    },
  },
  section: {},
}));

function StoriesPage({
  activeCategory,
  categoriesPosts,
  featuredStories,
  ...props
}) {
  const classes = useStyles(props);

  const activeTab = categoriesPosts
    ?.map(({ slug }) => slug)
    ?.indexOf(activeCategory);
  const tabItems = categoriesPosts?.map(
    ({ name, slug, href, pagination, posts }) => {
      return {
        label: name,
        slug,
        href,
        children: (
          <Stories
            featuredStoryProps={featuredStories[slug]}
            category={slug}
            pagination={pagination}
            items={formatStoryPosts(posts, featuredStories[slug])}
          />
        ),
      };
    }
  );

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Tabs activeTab={activeTab} items={tabItems} />
      </Section>
    </div>
  );
}

StoriesPage.propTypes = {
  activeCategory: PropTypes.string,
  categoriesPosts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      slug: PropTypes.string,
      pagination: PropTypes.shape({}),
      posts: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
  featuredStories: PropTypes.shape({
    news: PropTypes.shape({}),
    insights: PropTypes.shape({}),
  }),
};

StoriesPage.defaultProps = {
  activeCategory: undefined,
  categoriesPosts: undefined,
  featuredStories: undefined,
};

export default StoriesPage;
