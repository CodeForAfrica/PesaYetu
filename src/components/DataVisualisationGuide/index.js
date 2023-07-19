import { RichTypography } from "@commons-ui/core";
import { Grid, Hidden, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Carousel from "@/pesayetu/components/Carousel";
import Section from "@/pesayetu/components/Section";

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
          <Carousel showDots={!isDesktop}>
            {items.map(({ imageProps, ...item }) => (
              <Card
                key={item.image}
                {...item}
                imageProps={imageProps}
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
            {items.map(({ imageProps, ...item }) => (
              <Grid item xs={12} key={item.image}>
                <Card
                  {...item}
                  imageProps={imageProps}
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
