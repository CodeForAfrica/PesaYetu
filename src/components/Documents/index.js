import { RichTypography } from "@commons-ui/core";
import { Grid, Container } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function Documents({ items, className, datasetTypes, children, ...props }) {
  const classes = useStyles(props);
  if (!items?.length) {
    return null;
  }
  return (
    <>
      {items.map((item) => (
        <Container className={classes.root} key={item.title}>
          <Grid
            item
            xs={12}
            lg={7}
            className={clsx(classes.textContent, className)}
          >
            <RichTypography
              variant="body1"
              className={clsx(classes.text, classes.title, className)}
            >
              {item.title}
            </RichTypography>
            <RichTypography
              variant="body1"
              className={clsx(classes.text, classes.description, className)}
            >
              {item.description}
            </RichTypography>
          </Grid>
          <Grid item xs={12} lg={5} className={classes.linkContent}>
            {datasetTypes && (
              <Grid
                item
                xs={6}
                md={3}
                lg={4}
                container
                direction="row"
                justifyContent="space-evenly"
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
        </Container>
      ))}
    </>
  );
}

Documents.propTypes = {
  children: PropTypes.node,
  datasetTypes: PropTypes.bool,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
};

Documents.defaultProps = {
  children: undefined,
  datasetTypes: undefined,
  className: undefined,
  items: undefined,
};

export default Documents;
