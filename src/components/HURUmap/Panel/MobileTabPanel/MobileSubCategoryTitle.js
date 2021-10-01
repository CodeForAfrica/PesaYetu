import { Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { ReactComponent as Caret } from "@/pesayetu/assets/icons/caret.svg";

const useStyles = makeStyles(({ typography, palette }) => ({
  caretContainer: {
    width: "100%",
    height: typography.pxToRem(16),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.grey.light,
    position: "fixed",
    left: 0,
    right: 0,
    top: 140,
  },
  paper: {
    width: "100%",
    left: "0 !important",
    right: 0,
    maxWidth: "unset",
    borderRadius: 0,
  },
}));

function MobileSubCategoryTitle() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <Typography className={classes.caretContainer} onClick={handleClick}>
        <Caret />
      </Typography>
      <Popover
        classes={{ paper: classes.paper }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </div>
  );
}

export default MobileSubCategoryTitle;
