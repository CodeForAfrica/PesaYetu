import { Box, IconButton, SvgIcon } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as PinIconDefault } from "@/pesayetu/assets/Component 96 – 12.svg";
import { ReactComponent as PinIconSelected } from "@/pesayetu/assets/Group 958.svg";
import Select from "@/pesayetu/components/Select";

function PinIcon(props) {
  return <SvgIcon {...props} />;
}

function PinAndCompare({
  helperText,
  isPinning,
  onChange,
  onClose,
  onClickPin,
  options,
  placeholder,
  ...props
}) {
  const classes = useStyles(props);
  const handleClick = (e) => {
    if (onClickPin) {
      onClickPin(e);
    }
  };
  const component = isPinning ? PinIconSelected : PinIconDefault;

  return (
    <Box display="flex" alignItems="flex-end" className={classes.root}>
      <IconButton onClick={handleClick} className={classes.pinButton}>
        <PinIcon
          color="primary"
          component={component}
          style={{ fontSize: 62 }}
          viewBox="0 0 62 62"
        />
      </IconButton>
      <Select
        helperText={helperText}
        onClose={onClose}
        onChange={onChange}
        open={isPinning}
        onOpen={handleClick}
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
  isPinning: PropTypes.bool,
  onChange: PropTypes.func,
  onClickPin: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  placeholder: PropTypes.string,
};

PinAndCompare.defaultProps = {
  helperText: undefined,
  icon: undefined,
  isPinning: undefined,
  onChange: undefined,
  onClickPin: undefined,
  onClose: undefined,
  onOpen: undefined,
  options: undefined,
  placeholder: undefined,
};

export default PinAndCompare;
