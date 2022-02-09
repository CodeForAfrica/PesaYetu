import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
    minHeight: "min-content",
    position: "relative",
    height: typography.pxToRem(784),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(599),
    },
  },
  backgroundGrid: {
    position: "absolute",
    height: typography.pxToRem(456),
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(599),
    },
  },
  right: {
    right: 0,
  },
  section: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(501),
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
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(376),
    },
  },
  accentImage: {
    height: typography.pxToRem(264),
    width: typography.pxToRem(254),
    position: "relative",
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(400),
      height: typography.pxToRem(432),
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
      <Grid container>
        <Grid item md={image ? 6 : 12} className={classes.backgroundGrid}>
          <Image objectFit="cover" src={mapLines} layout="fill" unoptimized />
        </Grid>
        {image && (
          <Grid
            item
            md={6}
            className={clsx(classes.right, classes.backgroundGrid)}
          >
            <Image objectFit="cover" src={image} layout="fill" unoptimized />
          </Grid>
        )}
      </Grid>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Grid item md={6} className={classes.textContainer}>
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
          </Grid>
          {accentImage && (
            <Grid item className={classes.accentImage}>
              <Image
                layout="fill"
                src={accentImage}
                {...accentImageProps}
                objectFit="contain"
                alt="accent"
              />
            </Grid>
          )}
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
