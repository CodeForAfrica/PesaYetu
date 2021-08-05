import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Enablingpartners from "./EnablingPartners";
import MainPartner from "./MainPartner";

import Newsletter from "@/pesayetu/components/Newsletter";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(
  ({ breakpoints, widths, palette, typography }) => ({
    root: {
      minHeight: "min-content",
      position: "relative",
    },
    section: {
      maxWidth: typography.pxToRem(310),
      [breakpoints.up("md")]: {
        maxWidth: "unset",
      },
    },
    backgroundGrid: {
      position: "absolute",
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      zIndex: -100,
      [breakpoints.up("lg")]: {
        flexDirection: "row",
        justifyContent: "flex-start",
      },
      // flexGrow: 1,
    },
    leftBackground: {
      width: `100%`,
      [breakpoints.up("lg")]: {
        width: `calc((100vw - ${widths.values.lg}px)/2 + (${widths.values.lg}px * 0.8))`,
      },
    },
    rightBackground: {
      width: `100%`,
      display: "flex",
      flexDirection: "column",
      [breakpoints.up("md")]: {
        flexDirection: "row",
      },
      [breakpoints.up("lg")]: {
        width: `calc((100vw - ${widths.values.lg}px)/2 + (${widths.values.lg}px * 0.4))`,
        flexDirection: "column",
      },
    },
    rightTop: {
      background: palette.grey.light,
      width: "100%",
      height: typography.pxToRem(300),

      [breakpoints.up("md")]: {
        width: `50%`,
        height: typography.pxToRem(290),
      },
      [breakpoints.up("lg")]: {
        marginLeft: typography.pxToRem(16),
        height: typography.pxToRem(300),
        width: "100%",
      },
    },
    rightBottom: {
      background: "#0067A31A",
      width: "100%",
      height: typography.pxToRem(400),
      [breakpoints.up("md")]: {
        width: `50%`,
        height: typography.pxToRem(290),
      },
      [breakpoints.up("lg")]: {
        width: "100%",
        height: typography.pxToRem(400),
      },
    },
  })
);

function Index({ mainPartner, newsletter, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.backgroundGrid}>
        <div className={classes.leftBackground} />

        <div className={classes.rightBackground}>
          <div className={classes.rightTop} />
          <div className={classes.rightBottom} />
        </div>
      </div>
      <Section className={classes.section}>
        <Grid container xs={12}>
          <Grid item xs={12} lg={7}>
            <Enablingpartners {...props} />
          </Grid>
          <Grid item xs={12} md={1} />
          <Grid direction="row" item container xs={12} lg={4}>
            <Grid item xs={12} md={6} lg={12}>
              <div className={classes.mainContainer}>
                <MainPartner {...mainPartner} />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <div className={classes.newsletterContainer}>
                <Newsletter {...newsletter} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Index.propTypes = {
  mainPartner: PropTypes.shape({}),
  newsletter: PropTypes.shape({}),
};

Index.defaultProps = {
  mainPartner: undefined,
  newsletter: undefined,
};
export default Index;
