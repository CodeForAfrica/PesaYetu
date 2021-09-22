import {
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const ComparisonPin = ({ icon, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Button variant="contained" className={classes.button}>
          <div className={classes.icon}>
            <Icon src={icon} layout="fill" />
          </div>
        </Button>
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
          >
            <MenuItem value={2} className={classes.currentItem}>
              <Typography variant="caption" className={classes.placeholder}>
                Select location
              </Typography>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <hr className={classes.underline} />
    </div>
  );
};

ComparisonPin.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

ComparisonPin.defaultProps = {
  label: undefined,
  icon: undefined,
};

export default ComparisonPin;
