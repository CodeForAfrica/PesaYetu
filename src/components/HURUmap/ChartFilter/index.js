import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const ChartFiler = ({ label, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="temp-id" className={classes.inputLabel}>
          <Typography variant="caption" className={classes.label}>
            {label}
          </Typography>
        </InputLabel>
        <Select
          labelId="select-id"
          id="simple-select"
          className={classes.select}
          value={2}
          MenuProps={{
            classes: {
              list: classes.list,
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <MenuItem value={2} className={classes.currentItem}>
            <Typography variant="caption" className={classes.placeholder}>
              All values
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

ChartFiler.propTypes = {
  label: PropTypes.string,
};

ChartFiler.defaultProps = {
  label: undefined,
};

export default ChartFiler;
