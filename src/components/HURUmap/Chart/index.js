import { RichTypography } from "@commons-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Action from "./Action";
import Download from "./Download";
import renderChart from "./renderChart";
import Share from "./Share";

import { ReactComponent as InfoIcon } from "@/pesayetu/assets/icons/chart-info.svg";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  description: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
    padding: `${typography.pxToRem(18)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(31)} ${typography.pxToRem(16)}`,
  },
}));

function Chart({ indicator, title, ...props }) {
  const classes = useStyles(props);
  const [view, setView] = useState(null);

  const actions = [
    {
      id: "act-description",
      header: "Learn More",
      children: (
        <RichTypography className={classes.description}>
          {indicator.description}
        </RichTypography>
      ),
      icon: <InfoIcon />,
    },
    {
      id: "act-download",
      header: "Chart value as:",
      children: <Download title={title} view={view?.view} />,
      icon: <InfoIcon />,
    },
    {
      id: "act-share",
      header: "Share chart via:",
      children: <Share title={title} specs={view?.spec} />,
      icon: <InfoIcon />,
    },
  ];
  useEffect(() => {
    async function plotChart(data) {
      const result = await renderChart("#chart-container", data);
      setView(result);
    }
    if (indicator) {
      plotChart(indicator);
    }
  }, [indicator]);

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={8}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12} md={4} container>
          {actions.map((act) => (
            <Grid item key={act.id}>
              <Action {...act} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <div id="chart-container" />
    </div>
  );
}

Chart.propTypes = {
  indicator: PropTypes.shape({
    description: PropTypes.string,
  }),
  title: PropTypes.string,
};

Chart.defaultProps = {
  indicator: undefined,
  title: undefined,
};

export default Chart;
