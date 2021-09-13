import { Typography, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Tag from "@/pesayetu/components/Tag";

function MapStatisticsTable({ items, tagitems, ...props }) {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        className={classes.locationTags}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          {tagitems.map((item) => (
            <Tag tag={item.tag} label={item.label} />
          ))}
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.locationInfo}>
        {items.map((item, index) => (
          <Grid
            item
            xs={4}
            className={index === 1 ? classes.middleItem : classes.item}
          >
            <Typography variant="body1" className={classes.name}>
              {item.name}
            </Typography>
            <Typography variant="body1" className={classes.number}>
              {item.number}%
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

MapStatisticsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  tagitems: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

MapStatisticsTable.defaultProps = {
  items: undefined,
  tagitems: undefined,
};

export default MapStatisticsTable;
