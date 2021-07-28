import { RichTypography, Section } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  section: {},
  root: {
    alignItems: "center",
    backgroundColor: "#90DAFF",
    display: "flex",
    justifyContent: "center",
    padding: `${typography.pxToRem(36)} 0 ${typography.pxToRem(49)}`,
    width: "100%",
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(25)} 0`,
    },
  },
}));

function Newsletter({ description, placeholder, title, embedCode, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container justify="space-between" alignItems="stretch">
          <Grid item xs={12} lg={4} container alignItems="center">
            <div className={classes.textContainer}>
              <Typography variant="h1" className={classes.title}>
                {title}
              </Typography>
              {description && (
                <Typography variant="body1" className={classes.description}>
                  {description}
                </Typography>
              )}
              <RichTypography classes={{ root: classes.form }}>
                {embedCode}
              </RichTypography>
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}
Newsletter.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  embedCode: PropTypes.string,
};

Newsletter.defaultProps = {
  description: undefined,
  title: undefined,
  placeholder: "Please Enter your email",
  embedCode: undefined,
};

export default Newsletter;
