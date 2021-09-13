import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const CategoryHeader = ({ heading, description, image }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <div className={classes.image}>
          <Image src={image} layout="fill" />
        </div>
        <Typography variant="h3" className={classes.heading}>
          {heading}
        </Typography>
      </Grid>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

CategoryHeader.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

CategoryHeader.defaultProps = {
  heading: undefined,
  description: undefined,
  image: undefined,
};

export default CategoryHeader;
