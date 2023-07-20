import { RichTypography } from "@commons-ui/core";
import { CardContent } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: 0,
    "&:last-child": {
      padding: 0,
    },
  },
  title: {},
  description: {
    marginTop: typography.pxToRem(20),
  },
  link: {
    display: "inline-flex",
    marginTop: typography.pxToRem(20),
    fontWeight: "bold",
  },
}));

const Content = ({
  className,
  description,
  descriptionProps,
  title,
  titleProps,
  href,
  ctaText,
  linkProps,
  ...props
}) => {
  const classes = useStyles(props);
  if (!(title || description || href)) {
    return null;
  }

  return (
    <CardContent className={clsx(classes.root, className)}>
      <RichTypography variant="h5" {...titleProps} className={classes.title}>
        {title}
      </RichTypography>
      <RichTypography
        variant="subtitle2"
        {...descriptionProps}
        className={classes.description}
      >
        {description}
      </RichTypography>
      {href && ctaText && (
        <Link
          href={href}
          underline="always"
          variant="subtitle2"
          {...linkProps}
          className={classes.link}
        >
          {ctaText}
        </Link>
      )}
    </CardContent>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  descriptionProps: PropTypes.shape({}),
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
  href: PropTypes.string,
  ctaText: PropTypes.string,
  linkProps: PropTypes.shape({}),
};

Content.defaultProps = {
  className: undefined,
  description: undefined,
  descriptionProps: undefined,
  title: undefined,
  titleProps: undefined,
  href: undefined,
  ctaText: undefined,
  linkProps: undefined,
};

export default Content;
