import { RichTypography } from "@commons-ui/core";
import { IconButton, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import statsIcon from "@/pesayetu/assets/Component121.svg";

const useStyles = makeStyles(() => ({
  root: {},
  title: {},
  grid: {
    padding: "3rem 0rem",
  },
}));

function Metrics({ ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
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
        <Grid container direction="row" item xs={8} justifyContent="flex-end">
          <RichTypography variant="body1" className={classes.subtitle}>
            This section includes all the data indicators visualised in
            interactive charts for a particular location. These charts - as well
            as the datasets behind them - can be shared, embedded, or
            downloaded.
          </RichTypography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Metrics;
