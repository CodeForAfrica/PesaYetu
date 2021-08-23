import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function Documents({ items, ...props }) {
  const classes = useStyles(props);
  if (!items?.length) {
    return null;
  }
  return (
    <>
      {items.map((item) => (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className={classes.root}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            item
            xs={7}
          >
            <RichTypography variant="body1" className={classes.text}>
              {item.date}
            </RichTypography>
            <RichTypography variant="body1" className={classes.text}>
              {item.title}
            </RichTypography>
          </Grid>
          <Grid container direction="row" justifyContent="center" item xs={5}>
            <Link
              className={classes.link}
              href={item.href}
              underline="always"
              variant="body2"
            >
              {item.link}
            </Link>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

Documents.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

Documents.defaultProps = {
  items: undefined,
};

export default Documents;
