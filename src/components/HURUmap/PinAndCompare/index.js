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
  onChange,
  onClose,
  onClickPin,
  onOpen,
  options,
  placeholder,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
    if (!open && onClickPin) {
      onClickPin(e);
    }
  };

  const handleClose = (e) => {
    setOpen(false);
    if (onClose) {
      onClose(e);
    }
  };

  const handleChange = (e) => {
    const code = e.target.value;
    setSelected(code);
    if (onChange) {
      onChange(code);
    }
  };

  const handleClick = (e) => {
    setOpen(true);
    if (onOpen) {
      onOpen(e);
    }
  };
  const component = open ? PinIconSelected : PinIconDefault;

  return (
    <Box display="flex" alignItems="flex-end" className={classes.root}>
      <IconButton onClick={handleButtonClick} className={classes.pinButton}>
        <PinIcon
          color="primary"
          component={component}
          style={{ fontSize: 60 }}
          viewBox="0 0 62 55"
        />
      </IconButton>
      <Select
        helperText={helperText}
        onChange={handleChange}
        open={open}
        onOpen={handleClick}
        onClose={handleClose}
        options={options}
        placeholder={placeholder}
        selected={selected}
        classes={{ select: classes.locationSelect }}
      />
    </Box>
  );
}

PinAndCompare.propTypes = {
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  onClickPin: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  placeholder: PropTypes.string,
};

PinAndCompare.defaultProps = {
  helperText: undefined,
  onChange: undefined,
  onClickPin: undefined,
  onClose: undefined,
  onOpen: undefined,
  options: undefined,
  placeholder: undefined,
};

export default PinAndCompare;
