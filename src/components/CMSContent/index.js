import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const CMSContent = ({ content, title, subtitle, ...props }) => {
  const classes = useStyles(props);
  if (!content) {
    return null;
  }

  return (
    <Section classes={{ root: classes.section }}>
      <Grid container className={classes.root}>
        <Grid item xs={12} lg={4}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </Grid>
        <Grid item lg={2} />
        <Grid item xs={12} lg={6} className={classes.container}>
          <RichTypography variant="body2">{content}</RichTypography>
        </Grid>
      </Grid>
    </Section>
  );
};

CMSContent.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

CMSContent.defaultProps = {
  content: undefined,
  subtitle: undefined,
  title: undefined,
};

export default CMSContent;
