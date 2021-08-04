import { RichTypography } from "@commons-ui/core";
import { Grid, Hidden, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import heroBg from "@/pesayetu/assets/images/map-lines.png";
import Search from "@/pesayetu/components/Search";
import Section from "@/pesayetu/components/Section";

const Map = dynamic(() => import("./Map"), { ssr: false });

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    position: "relative",
  },
  background: {
    position: "absolute",
    zIndex: -1,
    height: typography.pxToRem(468),
    width: "100vw",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  comment: {
    fontSize: typography.pxToRem(11),
    color: "#707070",
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(40),
    },
  },
  section: {
    paddingBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(22),
    },
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(64),
    },
  },
  slabel: {
    marginBottom: typography.pxToRem(10),
  },
  tagline: {
    margin: `${typography.pxToRem(20)} 0`,
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(335),
    },
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(40)} 0`,
      maxWidth: typography.pxToRem(474),
    },
  },
  title: {
    marginTop: typography.pxToRem(40),
    "& .highlight": {
      display: "inline-block",
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 30%, #0067A31A 50% )",
    },
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(46),
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(65),
    },
  },
}));

function Hero({ comment, searchLabel, title, tagline, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const zoom = isUpLg ? 6 : 5.25;

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image src={heroBg} layout="fill" />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item lg={1} />
          <Grid item xs={12} md={7} lg={6}>
            <RichTypography variant="h1" className={classes.title}>
              {title}
            </RichTypography>
            {tagline && (
              <Typography variant="subtitle1" className={classes.tagline}>
                {tagline}
              </Typography>
            )}
            {searchLabel && (
              <Typography variant="subtitle1" className={classes.slabel}>
                {searchLabel}
              </Typography>
            )}
            <Search href="/explore/" />
            {comment && (
              <Typography variant="subtitle1" className={classes.comment}>
                {comment}
              </Typography>
            )}
          </Grid>
          <Hidden smDown implementation="css">
            <Grid item md={5} lg={5}>
              <Map
                center={[0.3051933453207569, 37.908818734483155]}
                zoom={zoom}
                tileLayer={{
                  url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
                }}
                {...props}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Section>
    </div>
  );
}

Hero.propTypes = {
  comment: PropTypes.string,
  searchLabel: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

Hero.defaultProps = {
  comment: undefined,
  searchLabel: undefined,
  tagline: undefined,
  title: undefined,
};

export default Hero;
