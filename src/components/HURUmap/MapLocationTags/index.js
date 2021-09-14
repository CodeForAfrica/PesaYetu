import { Typography, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";
import Section from "@/pesayetu/components/Section";

function MapLocationTags({ items, tags, ...props }) {
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
                <LocationTag
                  level={tag.level}
                  name={tag.name}
                  classes={{
                    root: classes.locationTag,
                    level: classes.level,
                    name: classes.name,
                  }}
                />
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
                <Typography variant="body1" className={classes.label}>
                  {item.label}
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

MapLocationTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};

MapLocationTags.defaultProps = {
  items: undefined,
  tags: undefined,
};

export default MapLocationTags;
