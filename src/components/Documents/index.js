import { RichTypography } from "@commons-ui/core";
import { Grid, Container, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

function Documents({ items, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
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
            md={7}
            container
            direction="row"
            justifyContent={isDesktop ? "space-evenly" : "flex-start"}
            className={classes.content}
          >
            <RichTypography variant="body1" className={classes.text}>
              {item.date}
            </RichTypography>
            <RichTypography variant="body1" className={classes.text}>
              {item.title}
            </RichTypography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={5}
            direction="row"
            justifyContent={isDesktop ? "center" : "flex-start"}
          >
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
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
