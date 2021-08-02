import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Content = ({ title, description, linkdescription, href, ...props }) => {
  const classes = useStyles(props);
  return (
    <>
      {title && (
        <Typography variant="h4" className={classes.cardTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" className={classes.cardDescription}>
          {description}
        </Typography>
      )}
      <Link className={classes.link} href={href}>
        {linkdescription && (
          <Typography variant="subtitle2" className={classes.linkText}>
            {linkdescription}
          </Typography>
        )}
      </Link>
    </>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkdescription: PropTypes.string,
  href: PropTypes.string,
};

Content.defaultProps = {
  title: undefined,
  description: undefined,
  linkdescription: undefined,
  href: undefined,
};

export default Content;
