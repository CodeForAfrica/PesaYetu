import { useMediaQuery, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";

const NewsGrid = ({ items, ...props }) => {
  let itemsData = [];
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  itemsData = isTablet ? items.slice(0, 6) : items.slice(0, 3);
  const classes = useStyles(props);
  return (
    <Grid item className={classes.stories}>
      {itemsData &&
        itemsData.map((item) => <InsightCard key={item.title} {...item} />)}
    </Grid>
  );
};

NewsGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

NewsGrid.defaultProps = {
  items: undefined,
};

export default NewsGrid;
