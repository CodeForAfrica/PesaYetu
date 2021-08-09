import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <Grid
      container
      direction="column"
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Grid>
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
