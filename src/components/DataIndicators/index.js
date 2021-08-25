import { RichTypography } from "@commons-ui/core";
import {
  ButtonBase,
  ClickAwayListener,
  Grid,
  Typography,
  Dialog,
  Slide,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Icon from "./Icon";
import useStyles from "./useStyles";

import bg from "@/pesayetu/assets/images/Mask Group 8.png";
import Header from "@/pesayetu/components/Header";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" timeout={300} ref={ref} {...props} />;
});

function DataIndicators({ items, title, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [checked, setChecked] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  if (!items?.length) {
    return null;
  }

  const handleIconClick = (index) => {
    setCurrentItemIndex(index);
    setChecked(true);
  };

  const resetItemClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setChecked(false);
    setCurrentItemIndex(null);
  };

  const currentItem = items[currentItemIndex];

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={bg} layout="fill" />
      </div>
      <div className={classes.section}>
        <div
          className={clsx(classes.indicatorsContainer, {
            [classes.slideIn]: checked,
          })}
        >
          <Header className={classes.header}>{title}</Header>
          <ClickAwayListener onClickAway={resetItemClick}>
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
                    currentItemIndex={currentItemIndex}
                    handleClickAway={() => resetItemClick()}
                  />
                </Grid>
              ))}
            </Grid>
          </ClickAwayListener>
        </div>
        {isDesktop ? (
          <Slide
            in={checked}
            mountOnEnter
            unmountOnExit
            className={classes.slide}
            direction="left"
            timeout={300}
          >
            <ButtonBase
              disableRipple
              disableTouchRipple
              onClick={resetItemClick}
              className={classes.content}
            >
              {currentItem?.title && (
                <Typography
                  component="div"
                  variant="h3"
                  className={classes.title}
                >
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
        ) : (
          <Dialog
            open={checked}
            onClose={resetItemClick}
            BackdropProps={{
              classes: {
                root: classes.backdrop,
              },
            }}
            TransitionComponent={Transition}
            classes={{ root: classes.dialog, paper: classes.dialogPaper }}
          >
            <ButtonBase
              disableRipple
              disableTouchRipple
              onClick={resetItemClick}
              className={classes.content}
            >
              {currentItem?.title && (
                <Typography
                  component="div"
                  variant="h3"
                  className={classes.title}
                >
                  {currentItem.title}
                </Typography>
              )}
              {currentItem?.description && (
                <RichTypography component="div" className={classes.description}>
                  {currentItem.description}
                </RichTypography>
              )}
            </ButtonBase>
          </Dialog>
        )}
      </div>
    </div>
  );
}

DataIndicators.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

DataIndicators.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataIndicators;
