import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(() => ({
  root: {},
  sources: {},
  textContent: {},
  title: {},
  description: {},
  linkContent: {},
  dataTypes: {},
  typeContent: {},
  link: {},
}));

function CarouselItem({ items, type, ...props }) {
  const classes = useStyles(props);
  const isDatasets = type === "datasets";

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <Grid container className={classes.sources} key={item.title}>
          <Grid item xs={12} lg={7} className={classes.textContent}>
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
          <Grid item xs={12} lg={5} className={classes.linkContent}>
            {isDatasets && item.types?.length > 0 ? (
              <Grid
                item
                xs={12}
                lg={7}
                container
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
            ) : null}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
  type: PropTypes.oneOf(["datasets", "documents"]),
};

CarouselItem.defaultProps = {
  items: undefined,
  type: undefined,
};

export default CarouselItem;
