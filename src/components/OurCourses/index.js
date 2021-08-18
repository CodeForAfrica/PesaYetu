import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import OurCourseCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const OurCourses = ({ title, items, ...props }) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots={!isDesktop}
          dotListClass={classes.dots}
        >
          {items?.map((item) => (
            <Grid item key={item.title}>
              <OurCourseCard {...item} />
            </Grid>
          ))}
        </Carousel>
      </Section>
    </div>
  );
};

OurCourses.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

OurCourses.defaultProps = {
  title: undefined,
  items: undefined,
};

export default OurCourses;
