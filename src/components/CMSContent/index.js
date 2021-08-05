import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";

const CMSContent = ({ content, ...props }) => {
  const classes = useStyles(props);
  if (!content) {
    return null;
  }

  return (
    <Grid container className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid item lg={12} className={classes.container}>
          <RichTypography variant="body2">{content}</RichTypography>
        </Grid>
      </Section>
    </Grid>
  );
};

CMSContent.propTypes = {
  content: PropTypes.string,
};

CMSContent.defaultProps = {
  content: undefined,
};

export default CMSContent;
