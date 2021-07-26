import { Grid, IconButton, Link, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(32),
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(8),
    },
    "& > svg:nth-of-type(2)": {
      padding: "3rem",
    },
  },
  button: {
    background: "#7DB2D3",
    borderRadius: 50,
    width: 48,
    height: 48,
    margin: typography.pxToRem(3.2),
    "&:hover": {
      background: "#7DB2D3",
      borderRadius: 50,
    },
    [breakpoints.up("lg")]: {
      background: "#EBEBEB",
      "&:hover": {
        background: "#EBEBEB",
        borderRadius: 50,
      },
    },
  },
  svgIcon: {},
}));

function SocialMediaIcons({ socialLinks, ...props }) {
  const classes = useStyles(props);
  const viewBoxValue = "0 0 48 48";
  if (!socialLinks?.length) {
    return null;
  }
  return (
    <Grid item className={classes.root}>
      {socialLinks.map(({ url, label, component }) => (
        <Link href={url} key={label}>
          <IconButton
            size="medium"
            edge="end"
            aria-label={label}
            viewBox={viewBoxValue}
            className={classes.button}
          >
            <SvgIcon
              component={component}
              classes={{
                root: classes.svgIcon,
              }}
            />
          </IconButton>
        </Link>
      ))}
    </Grid>
  );
}

SocialMediaIcons.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
      component: PropTypes.func,
    })
  ),
};

SocialMediaIcons.defaultProps = {
  socialLinks: undefined,
};

export default SocialMediaIcons;
