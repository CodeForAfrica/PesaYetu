/* eslint-disable no-console */
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

function NewsTabStories({ featuredStoryProps, items, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const showItemsData = isTablet ? items.slice(0, 6) : items.slice(0, 3);
  return (
    <Grid container direction="column">
      <Section classes={{ root: classes.section }}>
        <Grid item>
          <FeaturedStoryCard {...featuredStoryProps} />
        </Grid>
        <Grid container item className={classes.stories}>
          {showItemsData &&
            showItemsData?.map((item) => (
              <InsightCard key={item.title} {...item} />
            ))}
        </Grid>
      </Section>
    </Grid>
  );
}
NewsTabStories.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

NewsTabStories.defaultProps = {
  featuredStoryProps: undefined,
  items: undefined,
};

export default NewsTabStories;
