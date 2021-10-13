import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SvgIcon,
  InputLabel,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { uniqueId } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as ExpandMore } from "@/pesayetu/assets/icons/expand_more.svg";

function ExpandMoreIcon(props) {
  return <SvgIcon {...props} component={ExpandMore} />;
}

function Input({
  disabled,
  helperText,
  label: labelProp,
  onChange,
  onOpen,
  onClose,
  open,
  options,
  selected,
  placeholder,
  ...props
}) {
  const classes = useStyles(props);
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  const label = labelProp ? uniqueId(`${labelProp}_`) : undefined;

  return (
    <FormControl
      variant="filled"
      size="small"
      disabled={disabled}
      className={classes.formControl}
    >
      {helperText ? (
        <FormHelperText className={classes.helper}>{helperText}</FormHelperText>
      ) : null}
      {label ? (
        <InputLabel htmlFor={label} shrink className={classes.inputLabel}>
          <Typography variant="caption" className={classes.label}>
            {label}
          </Typography>
        </InputLabel>
      ) : null}
      <Select
        labelId={label}
        displayEmpty
        disableUnderline
        onChange={handleChange}
        onOpen={onOpen}
        onClose={onClose}
        open={open}
        defaultValue={selected || ""}
        IconComponent={ExpandMoreIcon}
        MenuProps={{
          classes: {
            paper: classes.paper,
            list: classes.list,
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          disableScrollLock: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        classes={{
          root: classes.select,
          filled: clsx(classes.filled, { [classes.filledPlaceholder]: !value }),
        }}
      >
        {placeholder ? (
          <MenuItem value="" className={classes.placeholder}>
            {placeholder}
          </MenuItem>
        ) : null}
        {options?.length &&
          options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  selected: PropTypes.string,
};

Input.defaultProps = {
  disabled: undefined,
  helperText: undefined,
  onChange: undefined,
  onOpen: undefined,
  onClose: undefined,
  open: undefined,
  placeholder: undefined,
  selected: undefined,
};

export default Input;
