import { MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  formControl: {
    "& .MuiFilledInput-underline": {
      "&::before": {
        display: "none",
      },
    },
  },
  select: {
    height: "100%",
    // minWidth: typography.pxToRem(165),
    width: "165px",
    background: palette.background.paper,
    borderStyle: "none",
    borderRadius: 2,
    paddingLeft: 24,
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: typography.caption.fontSize,
    "&:focus": {
      borderRadius: 2,
      background: palette.background.paper,
      borderColor: "none",
    },
    "&::before": {
      display: "none",
    },
  },
  paper: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
    },
    "& li.Mui-selected": {
      fontWeight: "bold",
    },
  },
}));

function Input({ label, options, selected, onChange, ...props }) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl variant="filled" size="small" className={classes.formControl}>
      <Select
        classes={{ root: classes.select }}
        value={selected}
        displayEmpty
        onChange={handleChange}
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
