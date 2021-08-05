import { Grid, Typography, Grow } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const DataIndicators = ({ title, items, ...props }) => {
  const [checked, setChecked] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const classes = useStyles({ checked, ...props });

  const handleChange = ({ description, title: itemTitle }) => {
    setCurrentTitle(itemTitle);
    setCurrentDescription(description);
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container className={classes.indicatorsContainer}>
          <Typography className={classes.sectionTitle}>{title}</Typography>
          <div className={classes.iconContainer}>
            {items?.map((item) => (
              <Grid item className={classes.item}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    src={item.image}
                    layout="fill"
                    onClick={() => handleChange(item)}
                  />
                </div>
                <Typography className={classes.text}>{item.title}</Typography>
              </Grid>
            ))}
          </div>
        </Grid>
        <Grow
          in={checked}
          onClick={handleChange}
          className={classes.transition}
        >
          <div className={classes.descriptionSection}>
            <Typography className={classes.title}>{currentTitle}</Typography>
            <Typography className={classes.description}>
              {currentDescription}
            </Typography>
          </div>
        </Grow>
      </Grid>
    </div>
  );
};

DataIndicators.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf({
    image: PropTypes.string,
    title: PropTypes.string,
    string: PropTypes.string,
  }),
};

DataIndicators.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataIndicators;
