import { Typography, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import Tag from "@/pesayetu/components/Tag";

function MapStatisticsTable({ items, tags, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Paper className={classes.paper}>
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
              {tags.map((tag) => (
                <Tag tag={tag.tag} label={tag.label} />
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
      </Section>
    </div>
  );
}

MapStatisticsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

MapStatisticsTable.defaultProps = {
  items: undefined,
  tags: undefined,
};

export default MapStatisticsTable;
