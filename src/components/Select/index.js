import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SvgIcon,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { uniqueId } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as ExpandMore } from "@/pesayetu/assets/icons/expand_more.svg";

function ExpandMoreIcon(props) {
  return <SvgIcon {...props} component={ExpandMore} />;
}

function Input({
  label: labelProp,
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
  const labelId = labelProp ? uniqueId(`${labelProp}_`) : undefined;

  return (
    <FormControl
      variant="filled"
      size="small"
      className={classes.formControl}
      disabled={disabled}
    >
      {helperText ? (
        <FormHelperText className={classes.helper}>{helperText}</FormHelperText>
      ) : null}
      {labelId ? (
        <InputLabel htmlFor={labelId} shrink className={classes.inputLabel}>
          <Typography variant="caption" className={classes.label}>
            {labelProp}
          </Typography>
        </InputLabel>
      ) : null}
      <Select
        labelId={labelId}
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
          disableScrollLock: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        classes={{ root: classes.select, filled: classes.filled }}
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
