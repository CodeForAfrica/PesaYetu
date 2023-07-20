import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const Summary = ({ content, title, subtitle, ...props }) => {
  const classes = useStyles(props);

  if (!content) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid justifyContent="space-between" container>
          <Grid item xs={12} lg={4}>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.container}>
            <RichTypography variant="body2">{content}</RichTypography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

Summary.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

Summary.defaultProps = {
  content: undefined,
  subtitle: undefined,
  title: undefined,
};

export default Summary;
