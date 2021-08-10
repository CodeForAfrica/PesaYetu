import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import mapLines from "@/pesayetu/assets/images/Mask Group 8@2x.png";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
    backgroundPosition: "50% 100%",
    minHeight: "min-content",
    position: "relative",
    paddingBottom: typography.pxToRem(43),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(98),
    },
  },
  textContainer: {
    height: "100%",
    paddingTop: typography.pxToRem(50 + 390),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(50),
    },
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(129.94),
    },
  },
  intro: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  title: {
    marginBottom: typography.pxToRem(35.5),
    fontWeight: 900,
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(20),
    },
    "& .highlight": {
      display: "inline-block",
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 30%, #0067A31A 50% )",
    },
  },
  tagline: {
    marginRight: 0,
  },
  backgroundGrid: {
    width: "100%",
    height: typography.pxToRem(390),
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: 1,
    display: "flex",
    [breakpoints.up("md")]: {
      paddingLeft: `calc((100vw - ${breakpoints.values.md}px)/2)`,
      position: "absolute",
      height: "100%",
    },
  },
  leftBackground: {
    [breakpoints.up("md")]: {
      height: typography.pxToRem(390),
    },
  },
  rightBackground: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  rightBackgroundWrapper: {
    height: typography.pxToRem(391),
    [breakpoints.up("md")]: {
      position: "relative",
      height: "100%",
      marginLeft: `calc((-100vw + ${breakpoints.values.md}px)/6)`,
    },
  },
  accentImage: {
    width: typography.pxToRem(262),
    padding: `${typography.pxToRem(66)} !important`,
    height: "auto",
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(400),
      padding: `0 !important`,
    },
  },
  section: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    backgroundImage: `url('${mapLines}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [breakpoints.up("md")]: {
      backgroundImage: "none",
    },
  },
}));
function OtherHero({ image, intro, accentImage, tagline, title, ...props }) {
  const classes = useStyles(props);

  if (!title?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.backgroundGrid}>
        <Image objectFit="cover" src={mapLines} layout="fill" />
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.leftBackground} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.rightBackgroundWrapper}>
              <div className={classes.rightBackground}>
                <Image objectFit="cover" src={image} layout="fill" />
                <Image
                  width={400}
                  height={400}
                  layout="intrinsic"
                  className={classes.accentImage}
                  src={accentImage}
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <div className={classes.textContainer}>
              <Typography className={classes.intro} variant="h6">
                {intro}
              </Typography>
              <RichTypography variant="h1" className={classes.title}>
                {title}
              </RichTypography>
              <Typography className={classes.tagline} variant="body1">
                {tagline}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

OtherHero.propTypes = {
  image: PropTypes.string,
  intro: PropTypes.string,
  accentImage: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

OtherHero.defaultProps = {
  image: undefined,
  intro: undefined,
  accentImage: undefined,
  tagline: undefined,
  title: undefined,
};

export default OtherHero;
