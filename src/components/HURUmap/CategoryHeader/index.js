import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const CategoryHeader = ({ title, description, image }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center">
        {image && (
          <div className={classes.image}>
            <Image src={image} layout="fill" />
          </div>
        )}
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
      </Grid>
      {description && (
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      )}
    </div>
  );
};

CategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

CategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
};

export default CategoryHeader;
