import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";

import Hero from "@/pesayetu/components/OtherHero";
import Section from "@/pesayetu/components/Section";
import Stories from "@/pesayetu/components/Stories";
import Tabs from "@/pesayetu/components/Tabs";
import fetchAPI from "@/pesayetu/utils/fetchApi";

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
  items: itemsProp,
  hero,
  featuredStories,
  ...props
}) {
  const classes = useStyles(props);
  const contentRef = useRef();
  const [category, setCategory] = useState(activeCategory);
  const [items, setItems] = useState(itemsProp);
  const [page, setPage] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, error } = useSWR(
    shouldFetch ? ["/api/wp/archive", page, category] : null,
    (url, p, cat) => {
      let offset;
      if (p < 2) {
        offset = 0;
      } else {
        offset = (p - 2) * 9 + 6;
      }
      return fetchAPI(`${url}/?taxonomyId=${cat}&offset=${offset}`);
    }
  );

  useEffect(() => {
    if (data) {
      setItems((prevItems) => {
        return {
          ...prevItems,
          [category]: {
            ...prevItems[category],
            posts: data,
          },
        };
      });
    }
    if (data || error) {
      setShouldFetch(false);
    }
  }, [data, error]);

  const isLoading = !data && !error && shouldFetch;

  const handlePaginate = (newPage) => {
    if (newPage) {
      setPage(newPage);
    }
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShouldFetch(true);
  };

  const handleTabChange = (value) => {
    setPage(1);
    setCategory(value);
  };

  const tabItems = Object.values(items)?.map(
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
            items={posts}
            onPaginate={handlePaginate}
            page={page}
            isLoading={isLoading}
          />
        ),
      };
    }
  );

  return (
    <div className={classes.root} ref={contentRef}>
      {page === 1 && <Hero {...hero} />}
      <Section classes={{ root: classes.section }}>
        <Tabs
          key={category}
          name={category}
          activeTab={category}
          items={tabItems}
          onChange={handleTabChange}
        />
      </Section>
    </div>
  );
}

StoriesPage.propTypes = {
  activeCategory: PropTypes.string,
  items: PropTypes.shape({
    news: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      slug: PropTypes.string,
      pagination: PropTypes.shape({}),
      posts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    insights: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      slug: PropTypes.string,
      pagination: PropTypes.shape({}),
      posts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
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
