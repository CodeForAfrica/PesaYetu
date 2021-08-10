import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import AboutTeamCard from "@/pesayetu/components/AboutTeamCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
};

const DataVisuals = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  return (
    <Section classes={{ root: classes.root }}>
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
        showDots
        dotListClass={classes.dots}
      >
        {items?.map((item) => (
          <AboutTeamCard key={item.image} {...item} />
        ))}
      </Carousel>

      {/* <Hidden only="md" implementation="css" className={classes.section}>
        <Grid container className={classes.container}>
          {items?.map((item) => {
            return (
              <Grid item lg={4} xs={12} key={item.image}>
                <DataVisualCard {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Hidden> */}
    </Section>
  );
};

DataVisuals.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

DataVisuals.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataVisuals;
