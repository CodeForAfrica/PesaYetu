import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";

const InsightsData = ({ title, subTitle, items, ...props }) => {
  let itemsData = [];
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  itemsData = isTablet ? items.slice(0, 2) : items;
  const classes = useStyles(props);
  return (
    <Section classes={{ root: classes.section }}>
      <Typography className={classes.title}>{title}</Typography>
      <div className={classes.underline} />
      <Typography className={classes.subtitle}>{subTitle}</Typography>
      <div className={classes.list}>
        {itemsData && itemsData.map((item) => <InsightCard {...item} />)}
      </div>
    </Section>
  );
};

InsightsData.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.objectOf(PropTypes.any),
    })
  ),
};

InsightsData.defaultProps = {
  title: undefined,
  subTitle: undefined,
  items: undefined,
};

export default InsightsData;
