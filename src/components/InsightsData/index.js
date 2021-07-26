import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";

const InsightsData = ({ title, subtitle, items, ...props }) => {
  let itemsData = [];
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  itemsData = isTablet ? items.slice(0, 2) : items;
  const classes = useStyles(props);

  // get the last part of title to give it background styling
  const subTitleArr = subtitle.split(" ");
  const subTitleEnd = subTitleArr.pop();
  const subTitleFirst = subTitleArr.join(" ");

  return (
    <Section classes={{ root: classes.section }}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography
        display="inline"
        className={classes.subtitle}
      >{`${subTitleFirst} `}</Typography>
      <Typography display="inline" className={classes.subtitleTwo}>
        {subTitleEnd}
      </Typography>
      <div className={classes.list}>
        {itemsData && itemsData.map((item) => <InsightCard {...item} />)}
      </div>
    </Section>
  );
};

InsightsData.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
  subtitle: undefined,
  items: undefined,
};

export default InsightsData;
