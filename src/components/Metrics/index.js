import { RichTypography } from "@commons-ui/core";
import { IconButton, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import statsIcon from "@/pesayetu/assets/Component121.svg";
import DataVisualCard from "@/pesayetu/components/DataVisualCard";

function Metrics({ dataVisualsProps, ...props }) {
  const classes = useStyles(props);
  return (
    <div>
      <div>
        <RichTypography variant="h1" className={classes.title}>
          Our metrics
        </RichTypography>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        <Grid container item xs={3}>
          <Grid container item direction="row" alignItems="center">
            <IconButton color="primary" size="small" className={classes.button}>
              <Image src={statsIcon} width={44} height={44} />
            </IconButton>
            <RichTypography variant="body1" className={classes.subtitle}>
              Rich data
            </RichTypography>
          </Grid>
          <div>
            <RichTypography variant="body1" className={classes.subtitle}>
              This section includes all the data indicators visualised in
              interactive charts for a particular location. These charts - as
              well as the datasets behind them - can be shared, embedded, or
              downloaded.
            </RichTypography>
          </div>
        </Grid>

        <Grid
          container
          direction="row"
          item
          xs={8}
          justifyContent="center"
          alignItems="center"
        >
          <DataVisualCard
            {...dataVisualsProps}
            classes={{
              root: classes.dataVisualCard,
              cardMedia: classes.cardMedia,
              content: classes.content,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

Metrics.propTypes = {
  dataVisualsProps: PropTypes.shape({}),
};

Metrics.defaultProps = {
  dataVisualsProps: undefined,
};

export default Metrics;
