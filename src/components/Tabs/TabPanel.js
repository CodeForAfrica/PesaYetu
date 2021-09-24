import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function TabPanel({ children, value, name, selected, ...props }) {
  const classes = useStyles(props);

  return (
    <div
      role="tabpanel"
      hidden={selected !== value}
      id={`${name}-tabpanel-${value}`}
      aria-labelledby={`${name}-tab-${value}`}
      {...props}
      className={classes.tabPanel}
    >
      {selected === value && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  name: PropTypes.string,
  selected: PropTypes.number,
};

TabPanel.defaultProps = {
  children: undefined,
  value: undefined,
  name: undefined,
  selected: undefined,
};

export default TabPanel;
