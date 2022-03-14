import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function TabPanel({ children, value, name, selected, ...props }) {
  const classes = useStyles(props);

  if (selected !== value || !children) {
    return null;
  }
  return (
    <div
      role="tabpanel"
      hidden={selected !== value}
      id={`${name}-tabpanel-${value}`}
      aria-labelledby={`${name}-tab-${value}`}
      {...props}
      className={classes.tabPanel}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

TabPanel.defaultProps = {
  children: undefined,
  value: undefined,
  name: undefined,
  selected: undefined,
};

export default TabPanel;
