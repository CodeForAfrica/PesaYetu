import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import visualsImg from "@/pesayetu/assets/images/Component1236.svg";
import videoImg from "@/pesayetu/assets/images/Group 4702.svg";
import howItWorksBg from "@/pesayetu/assets/images/sat-mtKenya@2x.png";
import Player from "@/pesayetu/components/HowItWorks/Player";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    position: "relative",
    height: typography.pxToRem(390),
    width: "100vw",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(618),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(728),
    },
  },
  background: {
    zIndex: -1,
  },
  section: {
    position: "relative",
    padding: `${typography.pxToRem(64)} 0`,
  },
  video: {
    position: "relative",
    height: typography.pxToRem(227),
    width: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(194),
      width: typography.pxToRem(299),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(244),
      width: typography.pxToRem(376),
    },
    "& .video-js": {
      width: "100%",
      height: "100%",
    },
    "& .vjs-youtube .vjs-poster": {
      backgroundColor: palette.background.default,
      backgroundSize: "auto",
    },
    "& .video-js .vjs-big-play-button": {
      display: "none",
    },
  },
  visualsGrid: {
    margin: "auto",
  },
  visuals: {
    position: "absolute",
    height: typography.pxToRem(265),
    width: typography.pxToRem(253.6),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(211),
      width: typography.pxToRem(202),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(441.6),
      width: typography.pxToRem(422.5),
    },
  },
  content: {
    backgroundColor: palette.background.default,
    opacity: 0.9,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(66)} ${typography.pxToRem(
        77
      )} ${typography.pxToRem(70)}`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(81)} ${typography.pxToRem(98)}`,
    },
  },
  image: {
    fill: palette.primary.main,
    padding: 0,
  },
  title: {
    margin: `${typography.pxToRem(20)} 0`,
  },
}));

const videoJsOptions = {
  techOrder: ["youtube"],
  autoplay: false,
  controls: true,
  poster: videoImg,
  sources: [
    {
      src: "https://www.youtube.com/watch?v=IxQB14xVas0",
      type: "video/youtube",
    },
  ],
};

function HowItWorks({ title, description, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Image src={howItWorksBg} layout="fill" className={classes.background} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <div className={classes.content}>
              <div className={classes.video}>
                <Player {...videoJsOptions} />
              </div>
              <Typography className={classes.title} variant="h4">
                {title}
              </Typography>
              <Typography className={classes.description}>
                {description}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <div className={classes.visuals}>
              <Image src={visualsImg} layout="fill" objectFit="contain" />
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

HowItWorks.propTypes = {
  ctaText: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};

HowItWorks.defaultProps = {
  ctaText: undefined,
  description: undefined,
  href: undefined,
  title: undefined,
};

export default HowItWorks;
