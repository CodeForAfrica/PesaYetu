import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import InsightsData from "@/pesayetu/components/InsightsData";

function InsightTabStories({ insightProps }) {
  return (
    <Grid container>
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
