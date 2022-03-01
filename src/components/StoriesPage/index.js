import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useRef } from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Section from "@/pesayetu/components/Section";
import Stories from "@/pesayetu/components/Stories";
import Tabs from "@/pesayetu/components/Tabs";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
}));

function StoriesPage({
  activeCategory,
  items,
  hero,
  featuredStories,
  ...props
}) {
  const classes = useStyles(props);
  const contentRef = useRef();

  const handlePaginate = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    contentRef.current.scrollIntoView();
  };

  const activeTab = items?.map(({ slug }) => slug)?.indexOf(activeCategory);
  const tabItems = items?.map(({ name, slug, href, pagination, posts }) => {
    return {
      label: name,
      slug,
      href,
      children: (
        <Stories
          featuredStoryProps={featuredStories[slug]}
          category={slug}
          pagination={pagination}
          items={formatStoryPosts(posts)}
          onPaginate={handlePaginate}
        />
      ),
    };
  });

  return (
    <div className={classes.root}>
      <Hero {...hero} />
      <Section classes={{ root: classes.section }} ref={contentRef}>
        <Tabs name="stories" activeTab={activeTab} items={tabItems} />
      </Section>
    </div>
  );
}

StoriesPage.propTypes = {
  activeCategory: PropTypes.string,
  items: PropTypes.arrayOf(
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
  hero: PropTypes.shape({}),
};

StoriesPage.defaultProps = {
  activeCategory: undefined,
  items: undefined,
  featuredStories: undefined,
  hero: undefined,
};

export default StoriesPage;
