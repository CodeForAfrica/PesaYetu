import { Dialog, DialogContent, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import BarChart from "@/pesayetu/components/Charts/BarChart";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  menuDialog: {
    padding: 0,
    width: typography.pxToRem(420),
    left: 0,
    marginTop: typography.pxToRem(89),
    position: "absolute",
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(109),
    },
  },
  dialogMenu: {
    padding: `${typography.pxToRem(10.35)} 0`,
  },
  dialogPaper: {
    backgroundColor: palette.background.default,
  },
  backdrop: {
    background: "transparent",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" timeout={1000} ref={ref} {...props} />;
});

function ExploreDataDialog({ openDialog, handleCloseDialog, ...props }) {
  const classes = useStyles(props);

  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={handleCloseDialog}
      BackdropProps={{
        classes: {
          root: classes.backdrop,
        },
      }}
      TransitionComponent={Transition}
      classes={{ root: classes.menuDialog, paper: classes.dialogPaper }}
    >
      <DialogContent>
        <BarChart {...props} />
      </DialogContent>
    </Dialog>
  );
}

ExploreDataDialog.propTypes = {
  openDialog: PropTypes.bool,
  handleCloseDialog: PropTypes.func,
};

ExploreDataDialog.defaultProps = {
  openDialog: undefined,
  handleCloseDialog: undefined,
};

export default ExploreDataDialog;
