import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const TwoColumnLayout = ({ content, title, subtitle, ...props }) => {
  const classes = useStyles(props);
  if (!content) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <Typography className={classes.title} variant="h1">
              {title}
            </Typography>
            <Typography className={classes.subtitle} variant="h4">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={12} lg={6} className={classes.container}>
            <RichTypography variant="body2">{content}</RichTypography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

TwoColumnLayout.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

TwoColumnLayout.defaultProps = {
  content: undefined,
  subtitle: undefined,
  title: undefined,
};

export default TwoColumnLayout;
