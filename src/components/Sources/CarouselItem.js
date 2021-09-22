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

function CarouselItem({ ctaText, items, type, ...props }) {
  const classes = useStyles(props);
  const isDatasets = type === "datasets";

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <Grid key={item.title} container className={classes.sources}>
          <Grid
            item
            xs={12}
            lg={isDatasets ? 7 : 10}
            className={classes.textContent}
          >
            <Typography
              variant="body1"
              className={clsx(classes.text, classes.title)}
            >
              {isDatasets ? item.title : item.date}
            </Typography>
            <Typography
              variant="body1"
              className={clsx(classes.text, classes.description)}
            >
              {isDatasets ? item.date : item.title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={isDatasets ? 5 : 2}
            className={classes.linkContent}
          >
            {isDatasets ? (
              <Grid
                item
                xs={12}
                lg={7}
                container
                justifyContent="flex-start"
                alignItems="center"
                className={classes.dataTypes}
              >
                {item?.types?.map(({ href, name }) => (
                  <Typography
                    component={href ? Link : undefined}
                    href={href || undefined}
                    underline={href ? "none" : undefined}
                    className={classes.typeContent}
                    key={name}
                  >
                    {name}
                  </Typography>
                )) ?? null}
              </Grid>
            ) : null}
            <Link
              className={classes.link}
              href={item.href}
              underline="always"
              variant="body2"
            >
              {ctaText}
            </Link>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

CarouselItem.propTypes = {
  ctaText: PropTypes.string,
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
  ctaText: "Read More",
  items: undefined,
  type: undefined,
};

export default CarouselItem;
