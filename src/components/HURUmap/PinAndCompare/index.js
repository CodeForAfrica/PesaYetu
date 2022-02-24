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
  locations,
  geographyCode,
  placeholder,
  isMobile,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const options = locations
    ?.filter(({ code }) => code !== geographyCode)
    ?.map(({ code: value, name: label }) => ({
      label,
      value,
    }));

  const handleButtonClick = (e) => {
    e.preventDefault();
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
    setSelected(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleClick = (e) => {
    setOpen(true);
    if (!isMobile && onClickPin) {
      onClickPin(e);
    }
  };
  const component = open ? PinIconSelected : PinIconDefault;

  return (
    <Box display="flex" alignItems="flex-end" className={classes.root}>
      {!isMobile && (
        <IconButton onClick={handleButtonClick} className={classes.pinButton}>
          <PinIcon
            color="primary"
            component={component}
            style={{ fontSize: 60 }}
            viewBox="0 0 62 55"
          />
        </IconButton>
      )}
      <Select
        helperText={isMobile ? placeholder : helperText}
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
  locations: PropTypes.arrayOf(PropTypes.shape({})),
  placeholder: PropTypes.string,
  isMobile: PropTypes.bool,
  geographyCode: PropTypes.string,
};

PinAndCompare.defaultProps = {
  helperText: undefined,
  onChange: undefined,
  onClickPin: undefined,
  onClose: undefined,
  locations: undefined,
  placeholder: undefined,
  isMobile: false,
  geographyCode: undefined,
};

export default PinAndCompare;
