import { Box, IconButton, SvgIcon } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as PinIconDefault } from "@/pesayetu/assets/Component 96 – 12.svg";
import { ReactComponent as PinIconSelected } from "@/pesayetu/assets/Group 958.svg";
import Select from "@/pesayetu/components/Select";

function PinIcon(props) {
  return <SvgIcon {...props} />;
}

function PinAndCompare({
  helperText,
  onClose,
  onOpen,
  options,
  placeholder,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const handleClose = (args) => {
    setOpen(false);
    if (onClose) {
      onClose(args);
    }
  };
  const handleOpen = (args) => {
    setOpen(true);
    if (onOpen) {
      onOpen(args);
    }
  };
  const component = open ? PinIconSelected : PinIconDefault;

  return (
    <Box display="flex" alignItems="flex-end" className={classes.root}>
      <IconButton onClick={handleClick} className={classes.pinButton}>
        <PinIcon
          component={component}
          style={{ fontSize: 62 }}
          viewBox="0 0 62 62"
        />
      </IconButton>
      <Select
        helperText={helperText}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        options={options}
        placeholder={placeholder}
        classes={{ select: classes.locationSelect }}
      />
    </Box>
  );
}

PinAndCompare.propTypes = {
  helperText: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  placeholder: PropTypes.string,
};

PinAndCompare.defaultProps = {
  helperText: undefined,
  icon: undefined,
  onChange: undefined,
  onClose: undefined,
  onOpen: undefined,
  options: undefined,
  placeholder: undefined,
};

export default PinAndCompare;
