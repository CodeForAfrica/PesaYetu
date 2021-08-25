import { RichTypography } from "@commons-ui/core";
import { Grid, Container } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function Documents({ items, children, ...props }) {
  const classes = useStyles(props);
  if (!items?.length) {
    return null;
  }
  return (
    <>
      {items.map((item) => (
        <Container className={classes.root} key={item.title}>
          <Grid item xs={12} className={classes.textContent}>
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
          <Grid item xs={12} className={classes.linkContent}>
            {children}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

Documents.defaultProps = {
  children: undefined,
  items: undefined,
};

export default Documents;
