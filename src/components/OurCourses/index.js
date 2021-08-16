import { Typography, Grid, Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import OurCourseCard from "@/pesayetu/components/OurCourseCard";
import Section from "@/pesayetu/components/Section";

const responsive = {
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

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
        <Hidden mdDown>
          <Grid container className={classes.list}>
            {items?.map((item) => (
              <Grid item lg={4}>
                <OurCourseCard key={item.title} {...item} />
              </Grid>
            ))}
          </Grid>
        </Hidden>

        <Hidden lgUp>
          <Carousel
            swipeable
            responsive={responsive}
            arrows={false}
            renderDotsOutside
            showDots
            dotListClass={classes.dots}
          >
            {items?.map((item) => (
              <Grid item lg={4}>
                <OurCourseCard key={item.title} {...item} />
              </Grid>
            ))}
          </Carousel>
        </Hidden>
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
