import {
  Popper,
  Fade,
  Paper,
  ButtonBase,
  Typography,
  IconButton,
  ClickAwayListener,
  Tooltip,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/action-close.svg";

const useStyles = makeStyles(({ palette, typography, zIndex }) => ({
  root: {},
  popper: {
    zIndex: zIndex.drawer,
  },
  paper: {
    background: palette.background.default,
    border: `1px solid ${palette.grey.light}`,
    width: typography.pxToRem(180),
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 0,
    marginTop: typography.pxToRem(-40),
  },
  header: {
    background: palette.background.paper,
    height: typography.pxToRem(36),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: typography.pxToRem(16),
    paddingRight: typography.pxToRem(10),
  },
  title: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
  },
  button: {
    padding: 0,
  },
}));

function Action({ children, header, icon, title, id, ...props }) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Tooltip title={title}>
        <IconButton onClick={handleClick} className={classes.button}>
          {icon}
        </IconButton>
      </Tooltip>
      <Popper
        open={Boolean(anchorEl)}
        placement="bottom-end"
        anchorEl={anchorEl}
        className={classes.popper}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper className={classes.paper}>
                <ButtonBase onClick={handleClose} className={classes.header}>
                  <Typography className={classes.title}>{header}</Typography>
                  <CloseIcon />
                </ButtonBase>
                {children}
              </Paper>
            </ClickAwayListener>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

Action.propTypes = {
  icon: PropTypes.node,
  header: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Action.defaultProps = {
  icon: undefined,
  title: undefined,
  id: undefined,
  header: undefined,
  children: undefined,
};

export default Action;
