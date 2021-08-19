import { RichTypography } from "@commons-ui/core";
import { ButtonBase, Grid, Typography, Slide } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Icon from "./Icon";
import useStyles from "./useStyles";

import Header from "@/pesayetu/components/Header";

const Content = ({ items, title, ...props }) => {
  const [checked, setChecked] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  const classes = useStyles(props);

  const handleIconClick = (index) => {
    setCurrentItemIndex(index);
    setChecked(true);
  };

  const handleSlideClick = () => {
    setChecked(false);
    setCurrentItemIndex(null);
  };

  const currentItem = items[currentItemIndex];

  return (
    <div className={classes.section}>
      <div
        className={clsx(classes.indicatorsContainer, {
          [classes.slideIn]: checked,
        })}
      >
        <Header className={classes.header}>{title}</Header>
        <Grid container alignItems="center" justifyContent="center">
          {items?.map((item, index) => (
            <Grid
              item
              key={item.title}
              className={clsx(classes.iconContainer, {
                [classes.slideInIconContainer]: checked,
              })}
            >
              <Icon
                handleIconClick={() => handleIconClick(index)}
                item={item}
                index={index}
                checked={checked}
                currentItemIndex={currentItemIndex}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Slide
        in={checked}
        mountOnEnter
        unmountOnExit
        className={classes.slide}
        direction="left"
        timeout={{
          enter: 300,
        }}
      >
        <ButtonBase
          disableRipple
          disableTouchRipple
          onClick={handleSlideClick}
          className={classes.content}
        >
          {currentItem?.title && (
            <Typography component="div" className={classes.title}>
              {currentItem.title}
            </Typography>
          )}
          {currentItem?.description && (
            <RichTypography component="div" className={classes.description}>
              {currentItem.description}
            </RichTypography>
          )}
        </ButtonBase>
      </Slide>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

Content.defaultProps = {
  title: undefined,
  items: undefined,
};

export default Content;
