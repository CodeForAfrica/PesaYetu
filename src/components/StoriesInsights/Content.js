import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Link from "@/pesayetu/components/Link";

import "react-multi-carousel/lib/styles.css";

function Content({ description, title, ctaText, href, ...props }) {
  const classes = useStyles(props);

  return (
    <Card href={href}>
      {title && (
        <Typography variant="h4" className={classes.marginBottom20}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" className={classes.marginBottom20}>
          {description}
        </Typography>
      )}
      {ctaText && href && (
        <Link href={href} underline="always">
          <Typography variant="subtitle2" className={classes.linkText}>
            {ctaText}
          </Typography>
        </Link>
      )}
    </Card>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
};

Content.defaultProps = {
  ctaText: undefined,
  title: undefined,
  href: undefined,
  description: undefined,
};

export default Content;
