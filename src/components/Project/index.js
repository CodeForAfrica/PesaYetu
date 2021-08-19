import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import PropTypes from "prop-types";
import React from "react";

import Newsletter from "@/pesayetu/components/Newsletter";
import ProjectOwner from "@/pesayetu/components/ProjectOwner";
import ProjectPartners from "@/pesayetu/components/ProjectPartners";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      overflow: "hidden",
    },
    section: {},
    project: {
      display: "flex",
      background: palette.grey.light,
      [breakpoints.up("lg")]: {
        paddingLeft: typography.pxToRem(119),
      },
    },
    newsletter: {
      background: palette.primary.main,
      backgroundColor: alpha(palette.primary.main, 0.1),
      [breakpoints.up("lg")]: {
        marginLeft: `-${typography.pxToRem(16)}`,
        paddingLeft: typography.pxToRem(116),
      },
    },
    aside: {
      height: "100%",
      position: "relative",
      left: "calc(-50vw + 50%)",
      width: "100vw",
      [breakpoints.up("md")]: {
        left: `calc(-50vw + ${widths.values.md / 2}px)`,
      },
      [breakpoints.up("lg")]: {
        left: 0,
        right: 0,
        width: `calc(100% + (100vw - ${widths.values.lg}px)/2)`,
      },
    },
  })
);

function Project({ mainPartner, newsletter, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container justify="space-between">
          <Grid item xs={12} lg={7}>
            <ProjectPartners {...props} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container className={classes.aside}>
              <Grid item xs={12} md={6} lg={12} container>
                <ProjectOwner {...mainPartner} className={classes.project} />
              </Grid>
              <Grid item xs={12} md={6} lg={12} container>
                <Newsletter {...newsletter} className={classes.newsletter} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Project.propTypes = {
  mainPartner: PropTypes.shape({}),
  newsletter: PropTypes.shape({}),
};

Project.defaultProps = {
  mainPartner: undefined,
  newsletter: undefined,
};

export default Project;
