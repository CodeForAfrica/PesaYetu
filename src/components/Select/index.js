import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SvgIcon,
  InputLabel,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as ExpandMore } from "@/pesayetu/assets/icons/expand_more.svg";

function ExpandMoreIcon(props) {
  return <SvgIcon {...props} component={ExpandMore} />;
}

function Input({
  label,
  helperText,
  options,
  selected,
  onChange,
  disabled,
  ...props
}) {
  const classes = useStyles(props);
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl
      variant="filled"
      size="small"
      className={classes.formControl}
      disabled={disabled}
    >
      {helperText && (
        <FormHelperText className={classes.helper}>{helperText}</FormHelperText>
      )}
      {label && (
        <InputLabel
          htmlFor={label ? `${label}-${Date.now()}` : ""}
          className={classes.inputLabel}
        >
          <Typography variant="caption" className={classes.label}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <Select
        labelId={label ? `${label}-${Date.now()}` : ""}
        displayEmpty
        disableUnderline
        onChange={handleChange}
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
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        classes={{ root: classes.select }}
      >
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
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  helperText: undefined,
  selected: undefined,
  onChange: undefined,
  disabled: undefined,
};

export default Input;
