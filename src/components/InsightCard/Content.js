import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Content = ({ title, description, href, ctaText, variant, ...props }) => {
  const classes = useStyles(props);

  return (
    <>
      {title && (
        <Typography variant={variant} className={classes.cardTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" className={classes.cardDescription}>
          {description}
        </Typography>
      )}
      {ctaText && href && (
        <Link
          className={classes.link}
          href={href}
          underline="always"
          variant="subtitle2"
        >
          {ctaText}
        </Link>
      )}
    </>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
  variant: PropTypes.string,
};

Content.defaultProps = {
  title: undefined,
  description: undefined,
  href: undefined,
  ctaText: undefined,
  variant: "h5",
};

export default Content;
