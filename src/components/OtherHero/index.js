import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import mapLines from "@/pesayetu/assets/images/bg-map-grey.jpg";
import Header from "@/pesayetu/components/Header";
import Image from "@/pesayetu/components/Image";
import Section from "@/pesayetu/components/Section";
import useProgressiveImage from "@/pesayetu/utils/useProgressiveImage";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
    backgroundPosition: "50% 100%",
    minHeight: "min-content",
    position: "relative",
    paddingBottom: typography.pxToRem(43),
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(93),
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
  overline: {
    position: "relative",
  },
  title: {
    marginBottom: typography.pxToRem(35.5),
    position: "relative",
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(20),
    },
  },
  subtitle: {
    marginRight: 0,
    position: "relative",
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
  rightBackgroundWrapperRoot: {
    maxHeight: "100%",
  },
  rightBackground: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: ({ image }) => `url("${image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
  },
  rightBackgroundWrapper: {
    height: typography.pxToRem(391),
    [breakpoints.up("md")]: {
      position: "relative",
      height: "100%",
      marginLeft: `calc((-100vw + ${breakpoints.values.md}px)/4.4)`, // get width 1/4 of current width, then shift by a margin of 0.4.This ensures the image isn't centered.
    },
  },
  rightImageGrid: {
    marginTop: typography.pxToRem(32),
    position: "absolute",
    top: typography.pxToRem(-16),
    [breakpoints.only("md")]: {
      position: "relative",
      paddingLeft: typography.pxToRem(24),
      top: 0,
    },
    [breakpoints.up("lg")]: {
      position: "relative",
      paddingTop: typography.pxToRem(48),
      top: 0,
    },
  },
  accentImage: {
    width: typography.pxToRem(262),
    padding: `${typography.pxToRem(66)} !important`,
    height: "auto",
    [breakpoints.only("md")]: {
      padding: `${typography.pxToRem(10)} !important`,
    },
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

function OtherHero({
  accentImage,
  accentImageProps,
  image: imageProp,
  overline,
  subtitle,
  title,
  ...props
}) {
  const image = useProgressiveImage(imageProp);
  const classes = useStyles({ image, ...props });

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
          <Grid
            item
            xs={12}
            md={6}
            className={classes.rightBackgroundWrapperRoot}
          >
            <div className={classes.rightBackgroundWrapper}>
              <div className={classes.rightBackground} />
            </div>
          </Grid>
        </Grid>
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={5}>
            <div className={classes.textContainer}>
              <Header
                overline={overline}
                subtitle={subtitle}
                classes={{
                  overline: classes.overline,
                  subtitle: classes.subtitle,
                  title: classes.title,
                }}
              >
                {title}
              </Header>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.rightImageGrid}>
            <Image
              width={400}
              height={400}
              layout="intrinsic"
              className={classes.accentImage}
              src={accentImage}
              {...accentImageProps}
              alt=""
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

OtherHero.propTypes = {
  accentImage: PropTypes.string,
  accentImageProps: PropTypes.shape({}),
  image: PropTypes.string,
  overline: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

OtherHero.defaultProps = {
  accentImage: undefined,
  accentImageProps: undefined,
  image: undefined,
  overline: undefined,
  subtitle: undefined,
  title: undefined,
};

export default OtherHero;
