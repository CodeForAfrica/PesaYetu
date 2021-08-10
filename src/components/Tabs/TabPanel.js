import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function TabPanel({ children, index, name, value, ...props }) {
  const classes = useStyles(props);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...props}
      className={classes.tabPanel}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
};

TabPanel.defaultProps = {
  children: undefined,
  index: undefined,
  name: undefined,
  value: undefined,
};

export default TabPanel;
