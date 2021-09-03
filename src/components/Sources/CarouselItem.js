import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function CarouselItem({ items, className, datasetTypes, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {items.map((item) => (
        <Grid container className={classes.sources} key={item.title}>
          <Grid item xs={12} md={6} lg={7} className={classes.textContent}>
            <Typography
              variant="body1"
              className={clsx(classes.text, classes.title)}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              className={clsx(classes.text, classes.description)}
            >
              {item.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={5} className={classes.linkContent}>
            {datasetTypes && (
              <Grid
                item
                xs={12}
                lg={7}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className={classes.dataTypes}
              >
                {item.types.map((data) => (
                  <Typography className={classes.typeContent} key={data.name}>
                    {data.name}
                  </Typography>
                ))}
              </Grid>
            )}
            <Link
              className={classes.link}
              href={item.href}
              underline="always"
              variant="body2"
            >
              Read More
            </Link>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

CarouselItem.propTypes = {
  datasetTypes: PropTypes.bool,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
};

CarouselItem.defaultProps = {
  datasetTypes: undefined,
  className: undefined,
  items: undefined,
};

export default CarouselItem;
