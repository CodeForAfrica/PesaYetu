import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import email from "@/pesayetu/assets/icons/Component 117 – 1@2x.png";

const useStyles = makeStyles(({ typography, palette }) => ({
  section: {},
  title: {
    fontWeight: "900",
    color: palette.grey.dark,
  },
  titleContainer: {},
  root: {
    display: "flex",
    width: "100%",
    minHeight: typography.pxToRem(400),
    paddingTop: typography.pxToRem(108.09),
    paddingLeft: typography.pxToRem(116),
  },
  form: {
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
      borderBottom: "1px solid currentColor",
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
        <div className={classes.titleContainer}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </div>
        {description && (
          <Typography variant="body1" className={classes.description}>
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
