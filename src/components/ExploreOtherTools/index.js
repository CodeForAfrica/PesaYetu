import { Grid, Hidden, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Carousel from "@/pesayetu/components/Carousel";
import Section from "@/pesayetu/components/Section";

const ExploreOtherTools = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Hidden lgUp implementation="css">
          <Carousel>
            {items.map(({ imageProps, ...item }) => (
              <Card
                key={item.title}
                {...item}
                imageProps={imageProps}
                classes={{
                  root: classes.card,
                  media: classes.cardMedia,
                  content: classes.cardContent,
                  contentTitle: classes.cardContentTitle,
                }}
              />
            ))}
          </Carousel>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Grid container className={classes.list}>
            {items.slice(0, 4).map(({ imageProps, ...item }) => (
              <Grid item lg={3} key={item.href}>
                <Card
                  key={item.title}
                  {...item}
                  imageProps={imageProps}
                  mediaProps={{ square: true }}
                  classes={{
                    root: classes.card,
                    media: classes.cardMedia,
                    content: classes.cardContent,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </Section>
    </div>
  );
};

ExploreOtherTools.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

ExploreOtherTools.defaultProps = {
  items: undefined,
  title: undefined,
};

export default ExploreOtherTools;
