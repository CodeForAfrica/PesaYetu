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
    section: {},
    backgroundGrid: {
      position: "absolute",
      display: "flex",
      width: "100%",
      height: "100%",
      zIndex: -100,
      // flexGrow: 1,
    },
    leftBackground: {
      [breakpoints.up("md")]: {
        width: `calc((100vw)/2)`,
      },
      [breakpoints.up("lg")]: {
        width: `calc((100vw - ${widths.values.lg}px)/2 + (${widths.values.lg}px * 0.8))`,
      },
    },
    rightBackground: {
      [breakpoints.up("md")]: {
        width: `calc((100vw)/2)`,
      },
      [breakpoints.up("lg")]: {
        width: `calc((100vw - ${widths.values.lg}px)/2 + (${widths.values.lg}px * 0.4))`,
      },
    },
    rightTop: {
      background: palette.grey.light,
      height: typography.pxToRem(300),
      [breakpoints.up("lg")]: {
        marginLeft: typography.pxToRem(16),
      },
    },
    rightBottom: {
      background: "#0067A31A",
      height: typography.pxToRem(400),
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
          <div>
            <div className={classes.rightTop} />
            <div className={classes.rightBottom} />
          </div>
        </div>
      </div>
      <Section className={classes.section}>
        <Grid container xs={12}>
          <Grid item xs={12} lg={7}>
            <Enablingpartners {...props} />
          </Grid>
          <Grid xs={12} md={1} />
          <Grid direction="row" item container xs={12} lg={4}>
            <Grid xs={12} md={6} lg={12}>
              <div className={classes.mainContainer}>
                <MainPartner {...mainPartner} />
              </div>
            </Grid>
            <Grid xs={12} md={6} lg={12}>
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
