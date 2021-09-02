import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function SourceItems({ items, className, datasetTypes, ...props }) {
  const classes = useStyles(props);
  return (
    <div>
      {items.map((item) => (
        <div className={classes.sources}>
          <Grid item xs={12} md={6} lg={7} className={classes.textContent}>
            <RichTypography
              variant="body1"
              className={clsx(classes.text, classes.title)}
            >
              {item.title}
            </RichTypography>
            <RichTypography
              variant="body1"
              className={clsx(classes.text, classes.description)}
            >
              {item.description}
            </RichTypography>
          </Grid>
          <Grid item xs={12} md={6} lg={5} className={classes.linkContent}>
            {datasetTypes && (
              <Grid
                item
                xs={12}
                lg={6}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className={classes.dataTypes}
              >
                {item.types.map((data) => (
                  <RichTypography className={classes.typeContent}>
                    {data.name}
                  </RichTypography>
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
        </div>
      ))}
    </div>
  );
}

SourceItems.propTypes = {
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

SourceItems.defaultProps = {
  datasetTypes: undefined,
  className: undefined,
  items: undefined,
};

export default SourceItems;
