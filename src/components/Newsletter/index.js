import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import email from "@/pesayetu/assets/icons/Component 117 – 1@2x.png";
import { ReactComponent as EnvelopeIcon } from "@/pesayetu/assets/icons/Group 4767.svg";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  section: {},
  title: {
    fontWeight: "900",
    color: palette.grey.dark,
    display: "flex",
    alignItems: "center",
  },
  envelopeIcon: {
    marginRight: typography.pxToRem(22.79),
  },
  root: {
    display: "flex",
    width: "100%",
    minHeight: typography.pxToRem(400),
    paddingTop: typography.pxToRem(40.98),
    [breakpoints.up("md")]: {
      minHeight: typography.pxToRem(290),
      paddingLeft: typography.pxToRem(45),
    },
    [breakpoints.up("lg")]: {
      minHeight: typography.pxToRem(400),
      paddingTop: typography.pxToRem(108.09),
      paddingLeft: typography.pxToRem(116),
    },
  },
  form: {
    width: "100%",
    "& #mc_embed_signup": {
      background: "none !important",
      color: "inherit",
    },
    "& #mc_embed_signup form": {
      padding: 0,
    },
    "& #mc_embed_signup label": {
      display: "none",
    },
    "& #mc_embed_signup_scroll": {
      display: "flex",
      "&>div:first-of-type": {
        display: "none !important",
      },
    },
    "& #mc_embed_signup input.email": {
      background: "none",
      border: "none",
      borderBottom: "2px solid #0067A3",
      borderRadius: 0,
      color: "currentColor",
      margin: "1rem 0",
      width: "100%",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        opacity: 1.0,
      },
    },
    "& #mc_embed_signup .button": {
      background: "initial",
      outline: "none",
      backgroundImage: `url('${email.src}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `${typography.pxToRem(48)} ${typography.pxToRem(48)}`,
      border: "none",
      height: typography.pxToRem(48),
      padding: 0,
      width: typography.pxToRem(48),
      minWidth: `${typography.pxToRem(48)} !important`,
      "&:hover , &:focus": {
        background: "initial",
        cursor: "pointer",
        outline: "none",
        backgroundImage: `url('${email.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${typography.pxToRem(48)} ${typography.pxToRem(48)}`,
        border: "none",
      },
    },
  },
}));

function Newsletter({ description, placeholder, title, embedCode, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid item xs={12} container alignItems="center">
        <Typography variant="h4" className={classes.title}>
          <EnvelopeIcon className={classes.envelopeIcon} /> {title}
        </Typography>
        {description && (
          <Typography variant="body2" className={classes.description}>
            {description}
          </Typography>
        )}
        <RichTypography classes={{ root: classes.form }}>
          {embedCode}
        </RichTypography>
      </Grid>
    </div>
  );
}
Newsletter.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  embedCode: PropTypes.string,
};

Newsletter.defaultProps = {
  description: undefined,
  title: undefined,
  placeholder: "Please Enter your email",
  embedCode: undefined,
};

export default Newsletter;
