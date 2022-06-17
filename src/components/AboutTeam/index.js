import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk, uniqueId } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import Card from "@/pesayetu/components/Card";
import Carousel from "@/pesayetu/components/Carousel";
import Section from "@/pesayetu/components/Section";

// NOTE(kilemensi) useStyles uses import/definition order to determine how
//                 classes are ordered.
//                 see: https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function AboutTeam({ title, items: itemsProp, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  if (!itemsProp?.length) {
    return null;
  }
  const chunkSize = isMdUp ? 4 : 2;
  const items = chunk(itemsProp, chunkSize);
  return (
    <div className={classes.root}>
      <Section>
        {title && (
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        )}
        <Carousel
          responsive={responsive}
          classes={{ dotList: classes.dotList }}
        >
          {items?.map((itemChunks) => (
            <Grid
              container
              justifyContent="space-between"
              key={uniqueId("team-chunk-")}
            >
              {itemChunks?.map((itemChunk) => (
                <Grid item key={itemChunk.image}>
                  <Card {...itemChunk} mediaProps={{ square: true }} />
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Section>
    </div>
  );
}

AboutTeam.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

AboutTeam.defaultProps = {
  title: undefined,
  items: undefined,
};

export default AboutTeam;
