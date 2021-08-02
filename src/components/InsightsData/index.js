import RichTypography from "@commons-ui/core/RichTypography";
import { Typography, useMediaQuery, Grid } from "@material-ui/core";
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

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Typography className={classes.title}>{title}</Typography>
        <RichTypography className={classes.subtitle}>{subtitle}</RichTypography>
        <Grid className={classes.list}>
          {itemsData &&
            itemsData.map((item) => <InsightCard key={item.title} {...item} />)}
        </Grid>
      </Section>
    </div>
  );
};

InsightsData.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

InsightsData.defaultProps = {
  title: undefined,
  subtitle: undefined,
  items: undefined,
};

export default InsightsData;
