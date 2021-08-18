import { RichTypography } from "@commons-ui/core";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import email from "@/pesayetu/assets/icons/Component 117 – 1@2x.png";
import { ReactComponent as EnvelopeIcon } from "@/pesayetu/assets/icons/Group 4767.svg";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    flexGrow: 1,
    padding: `${typography.pxToRem(96.09)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(40.96)} 0`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(96.09)} 0`,
    },
  },
  content: {
    maxWidth: typography.pxToRem(300),
  },
  title: {},
  envelopeIcon: {
    marginRight: typography.pxToRem(22.79),
  },
  description: {
    marginTop: typography.pxToRem(19.93),
  },
  form: {
    marginTop: typography.pxToRem(20),
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
      borderBottom: `2px solid ${palette.primary.main}`,
      borderRadius: 0,
      color: "currentColor",
      margin: 0,
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
      // TODO(kilemensi): Nextjs import impage as object while storybook import as string
      //                  Find a way to import image as object in both storybook and nextjs
      backgroundImage: `url('${email?.src || email}')`,
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
        backgroundImage: `url('${email?.src || email}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${typography.pxToRem(48)} ${typography.pxToRem(48)}`,
        border: "none",
      },
    },
  },
}));

function Newsletter({ className, description, embedCode, title, ...props }) {
  const classes = useStyles(props);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={clsx(classes.root, className)}
    >
      <Grid container justifyContent="center" className={classes.content}>
        <Grid item xs={12} container alignItems="center">
          <EnvelopeIcon className={classes.envelopeIcon} />
          <RichTypography variant="h4" component="h4" className={classes.title}>
            {title}
          </RichTypography>
        </Grid>
        <Grid item xs={12}>
          <RichTypography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {description}
          </RichTypography>
        </Grid>
        <Grid item xs={12}>
          <RichTypography className={classes.form}>{embedCode}</RichTypography>
        </Grid>
      </Grid>
    </Box>
  );
}
Newsletter.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  embedCode: PropTypes.string,
  title: PropTypes.string,
};

Newsletter.defaultProps = {
  className: undefined,
  description: undefined,
  embedCode: undefined,
  title: undefined,
};

export default Newsletter;
