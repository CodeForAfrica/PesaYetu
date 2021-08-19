import { Typography, IconButton } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Icon = ({
  item,
  handleIconClick,
  currentItemIndex,
  checked,
  index,
  ...props
}) => {
  const classes = useStyles(props);
  const { title, image, hover } = item;

  return (
    <>
      <IconButton className={classes.imageContainer} onClick={handleIconClick}>
        <Image src={index === currentItemIndex ? hover : image} layout="fill" />
      </IconButton>
      <Typography
        className={clsx(classes.text, { [classes.slideInText]: checked })}
      >
        {title}
      </Typography>
    </>
  );
};

Icon.propTypes = {
  handleIconClick: PropTypes.func,
  currentItemIndex: PropTypes.number,
  checked: PropTypes.bool,
  index: PropTypes.number,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      hover: PropTypes.string,
    })
  ),
};

Icon.defaultProps = {
  checked: undefined,
  currentItemIndex: undefined,
  handleIconClick: undefined,
  item: undefined,
  index: undefined,
};

export default Icon;
