import PropTypes from "prop-types";
import React from "react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      container
      direction="column"
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  value: PropTypes.string,
};

TabPanel.defaultProps = {
  children: undefined,
  index: undefined,
  value: undefined,
};

export default TabPanel;
