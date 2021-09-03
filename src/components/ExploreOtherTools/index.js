import { Typography } from "@material-ui/core";
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

        <Carousel>
          {items.map((item) => (
            <Card
              key={item.title}
              {...item}
              classes={{
                root: classes.card,
                media: classes.cardMedia,
                contentTitle: classes.cardContentTitle,
              }}
            />
          ))}
        </Carousel>
      </Section>
    </div>
  );
};

ExploreOtherTools.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

ExploreOtherTools.defaultProps = {
  title: undefined,
  items: undefined,
};

export default ExploreOtherTools;
