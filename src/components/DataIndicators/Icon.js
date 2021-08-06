import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const Icon = ({ item, handleChange, ...props }) => {
  const classes = useStyles(props);
  const { title, image, hover } = item;

  const [imageState, setimageState] = useState(image);

  const changeImage = (img) => {
    setimageState(img);
  };
  return (
    <Grid key={title} item className={classes.item}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={imageState}
          layout="fill"
          onClick={() => handleChange(item)}
          onMouseEnter={() => changeImage(hover)}
          onMouseLeave={() => changeImage(image)}
        />
      </div>
      <Typography className={classes.text}>{title}</Typography>
    </Grid>
  );
};

Icon.propTypes = {
  handleChange: PropTypes.func,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

Icon.defaultProps = {
  handleChange: undefined,
  item: undefined,
};

export default Icon;
