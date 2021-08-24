import { ButtonBase, Typography } from "@material-ui/core";
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
    <ButtonBase onClick={handleIconClick} className={classes.iconRoot}>
      <div className={classes.image}>
        <Image src={index === currentItemIndex ? hover : image} layout="fill" />
      </div>
      <Typography
        className={clsx(classes.text, { [classes.slideInText]: checked })}
      >
        {title}
      </Typography>
    </ButtonBase>
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
