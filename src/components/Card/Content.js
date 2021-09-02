import { RichTypography } from "@commons-ui/core";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: 0,
  },
  title: {},
  description: {
    marginTop: typography.pxToRem(20),
  },
  link: {
    display: "inline-flex",
    marginTop: typography.pxToRem(20),
  },
}));

const Content = ({
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
    <CardContent className={classes.root}>
      {title && (
        <RichTypography variant="h5" {...titleProps} className={classes.title}>
          {title}
        </RichTypography>
      )}
      {description && (
        <RichTypography
          variant="subtitle2"
          {...descriptionProps}
          className={classes.description}
        >
          {description}
        </RichTypography>
      )}
      {ctaText && href && (
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
  description: PropTypes.string,
  descriptionProps: PropTypes.shape({}),
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
  href: PropTypes.string,
  ctaText: PropTypes.string,
  linkProps: PropTypes.shape({}),
};

Content.defaultProps = {
  description: undefined,
  descriptionProps: undefined,
  title: undefined,
  titleProps: undefined,
  href: undefined,
  ctaText: undefined,
  linkProps: undefined,
};

export default Content;
