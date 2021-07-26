import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import howItWorksBg from "@/pesayetu/assets/images/sat-mtKenya@2x.png";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  backgroundWrap: {
    position: "fixed",
    zIndex: -1,
    height: typography.pxToRem(468),
    width: "100vw",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(728),
    },
  },
  section: {},
}));

function HowItWorks({ ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.backgroundWrap}>
        <Image src={howItWorksBg} layout="fill" />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container />
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
