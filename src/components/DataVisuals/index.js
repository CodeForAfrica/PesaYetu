import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import DataVisualCard from "@/pesayetu/components/DataVisualCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
};

const DataVisuals = ({ title, items, ...props }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));
  const classes = useStyles(props);

  return (
    <Section classes={{ root: classes.root }}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      {isTablet ? (
        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots
          dotListClass={classes.dots}
        >
          {items && items.map((item) => <DataVisualCard {...item} />)}
        </Carousel>
      ) : (
        <div className={classes.section}>
          {items && items.map((item) => <DataVisualCard {...item} />)}
        </div>
      )}
    </Section>
  );
};

DataVisuals.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      order: PropTypes.string,
      image: PropTypes.objectOf(PropTypes.any),
    })
  ),
};

DataVisuals.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataVisuals;
