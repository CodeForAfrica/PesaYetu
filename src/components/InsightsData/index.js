import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";

const InsightsData = ({ title, subTitle, items, ...props }) => {
  const classes = useStyles(props);
  return (
    <Section classes={{ root: classes.section }}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.subtitle}>{subTitle}</Typography>
      {items && items.map((item) => <InsightCard {...item} />)}
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
