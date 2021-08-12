import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";
import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

import "react-multi-carousel/lib/styles.css";

const InsightsData = ({ overline, title, items, ...props }) => {
  const classes = useStyles(props);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  if (!items?.length) {
    return null;
  }

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Header overline={overline} className={classes.header}>
          {title}
        </Header>
        <Grid container>
          <Grid item lg={8} md={12}>
            <div className={classes.chartContainer}>
              <RichTypography className={classes.chart}>
                {items[currentItemIndex].chart}
              </RichTypography>
            </div>
          </Grid>
          <Grid item lg={1} />
          <Grid item lg={3} md={12} container direction="column">
            <Carousel
              swipeable
              responsive={responsive}
              arrows={false}
              renderDotsOutside
              showDots
              containerClass={classes.carouselList}
              dotListClass={classes.dots}
              afterChange={(_, { currentSlide }) => {
                setCurrentItemIndex(currentSlide);
              }}
            >
              {items?.map(
                ({ title: storyTitle, description, ctaText, href }) => (
                  <>
                    {storyTitle && (
                      <Typography
                        variant="h4"
                        className={classes.marginBottom20}
                      >
                        {storyTitle}
                      </Typography>
                    )}
                    {description && (
                      <Typography
                        variant="subtitle2"
                        className={classes.marginBottom20}
                      >
                        {description}
                      </Typography>
                    )}
                    {ctaText && href && (
                      <Link href={href} underline="always">
                        <Typography
                          variant="subtitle2"
                          className={classes.linkText}
                        >
                          {ctaText}
                        </Typography>
                      </Link>
                    )}
                  </>
                )
              )}
            </Carousel>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

InsightsData.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      chart: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      ctaText: PropTypes.string,
    })
  ),
};

InsightsData.defaultProps = {
  overline: undefined,
  title: undefined,
  items: undefined,
};

export default InsightsData;
