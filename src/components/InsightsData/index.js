import { useMediaQuery, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";
import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";

const InsightsData = ({ title, overline, items, ...props }) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  if (!items?.length) {
    return null;
  }
  const itemsToShow = isTablet ? items.slice(0, 2) : items;
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Header
          overline={overline}
          classes={{ overline: classes.overline, title: classes.title }}
        >
          {title}
        </Header>
        <Grid container className={classes.list}>
          {itemsToShow.map((item) => {
            return (
              <Grid item lg={4} xs={12} md={6} key={item.href}>
                <InsightCard {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Section>
    </div>
  );
};

InsightsData.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
    })
  ),
  overline: PropTypes.string,
  title: PropTypes.string,
};

InsightsData.defaultProps = {
  items: undefined,
  overline: undefined,
  title: undefined,
};

export default InsightsData;
