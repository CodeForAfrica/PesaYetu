import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Vega } from "react-vega";
import { Handler } from "vega-tooltip";

import configureScope from "./configureScope";

import IndicatorTitle from "@/pesayetu/components/HURUmap/IndicatorTitle";
import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  source: {
    margin: `${typography.pxToRem(20)} 0`,
  },
  sourceTitle: {
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    color: "#666666",
    display: "inline-flex",
  },
  sourceLink: {
    color: palette.text.primary,
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    fontFamily: typography.body1.fontFamily,
  },
}));

function Chart({ indicator, title, ...props }) {
  const classes = useStyles(props);
  const [view, setView] = useState(null);

  const {
    description,
    metadata: { source, url },
  } = indicator;

  const spec = configureScope(indicator);

  // const tooltipHandler = () => {

  // }

  return (
    <div className={classes.root}>
      <IndicatorTitle
        title={title}
        description={description}
        view={view}
        spec={spec}
      />
      <Vega
        spec={spec}
        tooltip={new Handler().call}
        actions={false}
        onNewView={(v) => setView(v)}
      />
      {url && source && (
        <div className={classes.source}>
          <Typography className={classes.sourceTitle}>Source:&nbsp;</Typography>
          <Link underline="always" href={url} className={classes.sourceLink}>
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
