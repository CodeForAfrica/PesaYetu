import { FormControl, MenuItem, Select, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as ExpandMore } from "@/pesayetu/assets/icons/expand_more.svg";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
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
    width: typography.pxToRem(135),
    background: palette.background.paper,
    borderStyle: "none",
    borderRadius: 2,
    paddingLeft: typography.pxToRem(24),
    paddingBottom: typography.pxToRem(15),
    paddingTop: typography.pxToRem(15),
    fontSize: typography.caption.fontSize,
    "&:focus": {
      borderRadius: 2,
      background: palette.background.paper,
      borderColor: "none",
    },
    "&::before": {
      display: "none",
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(165),
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
      <Select
        displayEmpty
        disableUnderline
        onChange={handleChange}
        value={selected}
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
