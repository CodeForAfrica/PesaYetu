import {
  Popper,
  Fade,
  Paper,
  ButtonBase,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/action-close.svg";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
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
}));

function Action({ children, header, icon, id, ...props }) {
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
      <IconButton onClick={handleClick} aria-describedby={`aria-${id}`}>
        {icon}
      </IconButton>
      <Popper
        open={Boolean(anchorEl)}
        placement="bottom-end"
        anchorEl={anchorEl}
        className={classes.root}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper className={classes.paper}>
              <ButtonBase onClick={handleClose} className={classes.header}>
                <Typography className={classes.title}>{header}</Typography>
                <CloseIcon />
              </ButtonBase>
              {children}
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

Action.propTypes = {
  icon: PropTypes.node,
  header: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Action.defaultProps = {
  icon: undefined,
  id: undefined,
  header: undefined,
  children: undefined,
};

export default Action;
