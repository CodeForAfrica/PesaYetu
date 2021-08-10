import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Icon = ({
  item,
  handleChange,
  currentSelect,
  setCurrentSelect,
  screen,
  ...props
}) => {
  const classes = useStyles(props);
  const { title, image, hover } = item;

  const handleIconChange = (itemSelected) => {
    if (!screen) {
      if (!currentSelect) {
        setCurrentSelect(itemSelected.title);
      } else {
        setCurrentSelect("");
      }
    } else {
      setCurrentSelect(itemSelected.title);
    }

    handleChange(itemSelected);
  };

  return (
    <Grid key={title} item className={classes.item}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={currentSelect === title ? hover : image}
          layout="fill"
          onClick={() => handleIconChange(item)}
        />
      </div>
      <Typography className={classes.text}>{title}</Typography>
    </Grid>
  );
};

Icon.propTypes = {
  handleChange: PropTypes.func,
  currentSelect: PropTypes.func,
  setCurrentSelect: PropTypes.func,
  screen: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

Icon.defaultProps = {
  currentSelect: undefined,
  setCurrentSelect: undefined,
  handleChange: undefined,
  item: undefined,
  screen: undefined,
};

export default Icon;
