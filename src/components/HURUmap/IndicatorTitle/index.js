import { RichTypography } from "@commons-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Action from "./Action";
import Download from "./Download";
import Share from "./Share";

import { ReactComponent as DownloadIcon } from "@/pesayetu/assets/icons/Component 1.svg";
import { ReactComponent as ShareIcon } from "@/pesayetu/assets/icons/Component 27.svg";
import { ReactComponent as InfoIcon } from "@/pesayetu/assets/icons/Component852.svg";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    paddingTop: typography.pxToRem(24),
    paddingBottom: typography.pxToRem(25),
  },
  description: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
    padding: `${typography.pxToRem(18)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(31)} ${typography.pxToRem(16)}`,
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
  buttons: {
    justifyContent: "flex-start",
    marginTop: typography.pxToRem(20),
    marginBottom: typography.pxToRem(20),
    [breakpoints.up("md")]: {
      justifyContent: "flex-end",
      margin: 0,
    },
  },
  embedButtons: {
    justifyContent: "flex-end",
    margin: 0,
  },
}));

function IndicatorTitle({
  description,
  title,
  disableToggle,
  embed,
  ...props
}) {
  const classes = useStyles(props);

  const actions = [
    description && {
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
      header: disableToggle ? "Download chart as" : "Chart value as:",
      children: (
        <Download title={title} {...props} disableToggle={disableToggle} />
      ),
      icon: <DownloadIcon />,
    },
    {
      id: "act-share",
      header: "Share chart via:",
      children: <Share title={title} {...props} />,
      icon: <ShareIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={embed ? 7 : 12} md={8}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid
          item
          xs={embed ? 5 : 12}
          md={4}
          container
          className={clsx(classes.buttons, { [classes.embedButtons]: embed })}
        >
          {actions.map((act) => (
            <Grid item key={act.id} className={classes.action}>
              <Action {...act} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

IndicatorTitle.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  disableToggle: PropTypes.bool,
  embed: PropTypes.bool,
};

IndicatorTitle.defaultProps = {
  description: undefined,
  title: undefined,
  disableToggle: undefined,
  embed: undefined,
};

export default IndicatorTitle;
