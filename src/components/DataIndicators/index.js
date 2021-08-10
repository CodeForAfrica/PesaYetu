import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Tablet from "./Tablet";
import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const DataIndicators = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section>
        <Hidden mdDown>
          <Desktop items={items} title={title} />
        </Hidden>

        <Hidden smUp>
          <Mobile items={items} title={title} />
        </Hidden>
      </Section>
      <Hidden lgUp smDown>
        <Tablet items={items} title={title} />
      </Hidden>
    </div>
  );
};

DataIndicators.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

DataIndicators.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataIndicators;
