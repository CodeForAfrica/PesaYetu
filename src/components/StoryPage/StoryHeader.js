import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Header from "@/pesayetu/components/Header";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(60)} 0`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(100)} 0 ${typography.pxToRem(73)}`,
    },
  },
  title: {
    padding: 0,
    margin: `${typography.pxToRem(20)} 0`,
  },
  overline: {
    marginBottom: 0,
  },
  displayFlex: {
    display: "flex",
  },
}));

function StoryHeader({ title, author, date, category, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section>
        <Grid container>
          <Grid item lg={1} />
          <Grid item xs={12} lg={10}>
            <Header
              overline={category}
              classes={{
                overline: classes.overline,
                title: classes.title,
              }}
            >
              {title}
            </Header>
            {date && (
              <Typography className={classes.displayFlex} variant="overline">
                {date}
              </Typography>
            )}
            {author && (
              <Typography className={classes.displayFlex} variant="overline">
                {author}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

StoryHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
};

StoryHeader.defaultProps = {
  title: undefined,
  date: undefined,
  category: undefined,
  author: undefined,
};

export default StoryHeader;
