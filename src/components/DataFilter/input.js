import {
  Typography,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  formControl: {
    display: "block",
    "&::after": {
      display: "none",
    },
  },
  label: {
    color: palette.text.primary,
    marginBottom: typography.pxToRem(10),
  },
  select: {
    height: "100%",
    minWidth: typography.pxToRem(200),
    background: palette.background.paper,
    borderStyle: "none",
    borderRadius: 2,
    paddingLeft: 24,
    paddingTop: typography.pxToRem(8),
    paddingBottom: typography.pxToRem(8),
    fontSize: typography.caption.fontSize,
    outline: "none",
    "&:focus": {
      borderRadius: 2,
      background: palette.background.paper,
      borderColor: "none",
    },
  },
  paper: {
    borderRadius: 12,
    marginTop: 8,
  },
  title: {
    color: palette.text.primary,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "white",
    "& li": {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
      fontSize: typography.caption.fontSize,
    },
    "& li:hover": {
      background: palette.background,
    },
    "& li.Mui-selected": {
      background: palette.background,
    },
    "& li.Mui-selected:hover": {
      background: palette.background,
    },
  },
  placeholder: {
    color: "#A0A0A0",
  },
}));

function Input({
  emptyLabel,
  label,
  placeholder,
  items,
  index,
  selected,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <FormControl variant="filled" size="small" className={classes.formControl}>
      <FormLabel>
        <Typography className={classes.label} variant="h4">
          {label}
        </Typography>
      </FormLabel>
      <Select
        classes={{ root: classes.select }}
        value={1}
        displayEmpty
        // onChange={handleChange}
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
        renderValue={
          selected
            ? undefined
            : () => (
                <Typography variant="caption" className={classes.placeholder}>
                  {placeholder}
                </Typography>
              )
        }
      >
        <MenuItem value="as">{emptyLabel}</MenuItem>
        {items?.length &&
          items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  emptyLabel: PropTypes.string,
  placeholder: PropTypes.string,
  index: PropTypes.number,
  selected: PropTypes.string,
};

Input.defaultProps = {
  emptyLabel: "None",
  placeholder: "select",
  index: undefined,
  selected: undefined,
};

export default Input;
