import { Typography } from "@material-ui/core";
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
    items: 4,
  },
};

function AboutTeam({ title, items, ...props }) {
  const classes = useStyles(props);

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
          {items?.map((item) => (
            <Card {...item} key={item.image} mediaProps={{ square: true }} />
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
