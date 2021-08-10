import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightsData from "@/pesayetu/components/InsightsData";

function InsightTabStories({ insightProps, ...props }) {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.root}>
      <Grid container item>
        <InsightsData {...insightProps} />
      </Grid>
    </Grid>
  );
}

InsightTabStories.propTypes = {
  insightProps: PropTypes.arrayOf(PropTypes.shape({})),
};

InsightTabStories.defaultProps = {
  insightProps: undefined,
};

export default InsightTabStories;
