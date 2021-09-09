import { Dialog, DialogContent } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import TourCarousel from "./Carousel";
import useStyles from "./useStyles";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";

const Tour = ({ items, ...props }) => {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} open={open}>
        {/* <DialogTitle onClose={handleClose}>Modal title</DialogTitle> */}
        <DialogContent dividers>
          <TourCarousel slides={items} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

Tour.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

Tour.defaultProps = {
  items: undefined,
};

export default Tour;

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });
