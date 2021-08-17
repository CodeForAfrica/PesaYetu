import { RichTypography } from "@commons-ui/core";
import { IconButton, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import statsIcon from "@/pesayetu/assets/Component121.svg";
import DataVisualCard from "@/pesayetu/components/DataVisualCard";
import Section from "@/pesayetu/components/Section";

function Metrics({ dataVisualsProps, secondDataVisualsProps, ...props }) {
  const classes = useStyles(props);
  return (
    <Section classes={{ root: classes.section }}>
      <RichTypography variant="h2" className={classes.title}>
        Our metrics
      </RichTypography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid container item xs={3} className={classes.gridOne}>
          <Grid container item direction="row" alignItems="center">
            <IconButton color="primary" size="small" className={classes.button}>
              <Image src={statsIcon} width={44} height={44} />
            </IconButton>
            <RichTypography variant="h4">Rich data</RichTypography>
          </Grid>
          <div className={classes.subtitle}>
            <RichTypography variant="body2">
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
          className={classes.secondGrid}
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

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid
          container
          direction="row"
          item
          xs={8}
          justifyContent="flex-start"
          alignItems="center"
        >
          <DataVisualCard
            {...secondDataVisualsProps}
            classes={{
              root: classes.dataVisualCard,
              cardMedia: classes.cardMedia,
              content: classes.content,
            }}
          />
        </Grid>

        <Grid container item xs={3}>
          <Grid container item direction="row" alignItems="center">
            <IconButton color="primary" size="small" className={classes.button}>
              <Image src={statsIcon} width={44} height={44} />
            </IconButton>
            <RichTypography variant="h4">PIN TO COMPARE</RichTypography>
          </Grid>
          <div className={classes.subtitle}>
            <RichTypography variant="body2">
              Several sets of data exist for different counties and
              municipalities allowing you to visualise multiple locations side
              by side and make comparisons where similar datasets exist.
              downloaded.
            </RichTypography>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}

Metrics.propTypes = {
  dataVisualsProps: PropTypes.shape({}),
  secondDataVisualsProps: PropTypes.shape({}),
};

Metrics.defaultProps = {
  dataVisualsProps: undefined,
  secondDataVisualsProps: undefined,
};

export default Metrics;
