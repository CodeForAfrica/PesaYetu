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

function Input({ label, options, selected, onChange, ...props }) {
  const classes = useStyles(props);
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl variant="filled" size="small" className={classes.formControl}>
      <FormHelperText className={classes.helper}>Select a value</FormHelperText>
      {label && (
        <InputLabel htmlFor="temp-id" className={classes.inputLabel}>
          <Typography variant="caption" className={classes.label}>
            {label}
          </Typography>
        </InputLabel>
      )}
      <Select
        labelId="temp-id"
        displayEmpty
        disableUnderline
        onChange={handleChange}
        // label={selected}
        // value={selected}
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
        <MenuItem disabled value="">
          <em>{selected}</em>
        </MenuItem>
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
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.string,
};

Input.defaultProps = {
  selected: undefined,
  onChange: undefined,
};

export default Input;
