import { RichTypography } from "@commons-ui/core";
import { Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
};

function DataVisualisationGuide({ title, items, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <RichTypography component="h4" variant="h4" className={classes.title}>
          {title}
        </RichTypography>

        <Hidden smDown implementation="css">
          <Carousel
            swipeable
            responsive={responsive}
            arrows={false}
            renderDotsOutside
            showDots={!isDesktop}
            dotListClass={classes.dots}
          >
            {items.map((item) => (
              <Card
                {...item}
                key={item.image}
                classes={{
                  root: classes.card,
                  contentDescription: classes.cardContentDescription,
                }}
              />
            ))}
          </Carousel>
        </Hidden>

        <Hidden mdUp implementation="css">
          <Grid container className={classes.container}>
            {items.map((item) => (
              <Grid item xs={12} key={item.image}>
                <Card
                  {...item}
                  classes={{
                    root: classes.card,
                    contentDescription: classes.cardContentDescription,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </Section>
    </div>
  );
}

DataVisualisationGuide.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

DataVisualisationGuide.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataVisualisationGuide;
