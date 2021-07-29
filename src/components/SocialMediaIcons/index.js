import { Grid, IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(32),
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(8),
    },
  },
  image: {
    filter:
      "invert(15%) sepia(98%) saturate(6602%) hue-rotate(192deg) brightness(97%) contrast(101%);",
    [breakpoints.up("lg")]: {
      filter:
        "invert(0%) sepia(7%) saturate(27%) hue-rotate(270deg) brightness(102%) contrast(109%)",
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
}));

function SocialMediaIcons({ socialLinks, ...props }) {
  const classes = useStyles(props);
  const viewBoxValue = "0 0 48 48";
  if (!socialLinks?.length) {
    return null;
  }
  return (
    <Grid item className={classes.root}>
      {socialLinks.map(({ url, label, src }) => (
        <Link href={url} key={label}>
          <IconButton
            size="medium"
            edge="end"
            viewBox={viewBoxValue}
            className={classes.button}
          >
            <Image src={src} width={48} height={48} className={classes.image} />
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
      src: PropTypes.string,
    })
  ),
};

SocialMediaIcons.defaultProps = {
  socialLinks: undefined,
};

export default SocialMediaIcons;
