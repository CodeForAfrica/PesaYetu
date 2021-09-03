import RichTypography from "@commons-ui/core/RichTypography";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Content from "@/pesayetu/components/Card/Content";
import Carousel from "@/pesayetu/components/Carousel";
import Header from "@/pesayetu/components/Header";
import Section from "@/pesayetu/components/Section";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function StoriesInsights({ overline, title, stories, ...props }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const classes = useStyles({ currentItemIndex, ...props });

  if (!stories?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Header overline={overline} className={classes.header}>
          {title}
        </Header>
        <Grid container justifyContent="space-between">
          <Grid item lg={8} md={12} container direction="row" wrap="nowrap">
            <div className={classes.fullWidth}>
              {stories.map(({ chart, slug }, index) => (
                <Grid
                  item
                  key={slug}
                  className={clsx(classes.chartContainer, {
                    [classes.currentChart]: index === currentItemIndex,
                  })}
                >
                  <RichTypography className={classes.chart}>
                    {chart}
                  </RichTypography>
                </Grid>
              ))}
            </div>
          </Grid>
          <Grid item lg={3} md={12} container direction="column">
            <Carousel
              responsive={responsive}
              containerClass={classes.carouselList}
              beforeChange={(nextSlide) => {
                setCurrentItemIndex(nextSlide);
              }}
              classes={{ dotList: classes.dotList }}
            >
              {stories.map((story) => (
                <Content key={story.slug} {...story} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

StoriesInsights.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      chart: PropTypes.string,
    })
  ),
};

StoriesInsights.defaultProps = {
  overline: undefined,
  title: undefined,
  stories: undefined,
};

export default StoriesInsights;
