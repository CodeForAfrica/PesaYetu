import { RichTypography } from "@commons-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Action from "./Action";
import Download from "./Download";
import renderChart from "./renderChart";
import Share from "./Share";

import { ReactComponent as DownloadIcon } from "@/pesayetu/assets/icons/Component 1.svg";
import { ReactComponent as ShareIcon } from "@/pesayetu/assets/icons/Component 27.svg";
import { ReactComponent as InfoIcon } from "@/pesayetu/assets/icons/Component852.svg";
import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  description: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
    padding: `${typography.pxToRem(18)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(31)} ${typography.pxToRem(16)}`,
  },
  sourceDiv: {
    margin: `${typography.pxToRem(20)} 0`,
  },
  source: {
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    color: "#666666",
    display: "inline-flex",
  },
  link: {
    color: palette.text.primary,
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    fontFamily: typography.body1.fontFamily,
  },
  action: {
    marginRight: typography.pxToRem(14),
    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));

function Chart({ indicator, title, ...props }) {
  const classes = useStyles(props);
  const [view, setView] = useState(null);

  const {
    description,
    metadata: { source, url },
    // chart_configuration: { defaultType, disableToggle }
  } = indicator;

  const actions = [
    {
      id: "act-description",
      header: "Learn More",
      children: (
        <RichTypography className={classes.description}>
          {description}
        </RichTypography>
      ),
      icon: <InfoIcon />,
    },
    {
      id: "act-download",
      header: "Chart value as:",
      children: <Download title={title} view={view?.view} />,
      icon: <DownloadIcon />,
    },
    {
      id: "act-share",
      header: "Share chart via:",
      children: <Share title={title} specs={view?.spec} />,
      icon: <ShareIcon />,
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
        <Grid item xs={12} md={4} container justifyContent="flex-end">
          {actions.map((act) => (
            <Grid item key={act.id} className={classes.action}>
              <Action {...act} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <div id="chart-container" />
      {url && source && (
        <div className={classes.sourceDiv}>
          <Typography className={classes.source}>Source:&nbsp;</Typography>
          <Link underline="always" href={url} className={classes.link}>
            {source}
          </Link>
        </div>
      )}
    </div>
  );
}

Chart.propTypes = {
  indicator: PropTypes.shape({
    description: PropTypes.string,
    metadata: PropTypes.shape({
      source: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
  title: PropTypes.string,
};

Chart.defaultProps = {
  indicator: undefined,
  title: undefined,
};

export default Chart;
