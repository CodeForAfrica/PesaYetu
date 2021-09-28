import { RichTypography } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Image from "@/pesayetu/components/Image";
import slugify from "@/pesayetu/utils/slugify";

const CategoryHeader = ({ title, description, icon }) => {
  const classes = useStyles();

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography id={slugify(title)} variant="h3" className={classes.title}>
        {icon && (
          <div className={classes.icon}>
            <Image src={icon} layout="fill" />
          </div>
        )}
        {title}
      </Typography>
      {description && (
        <RichTypography variant="body2" className={classes.description}>
          {description}
        </RichTypography>
      )}
    </div>
  );
};

CategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

CategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
  icon: undefined,
};

export default CategoryHeader;
