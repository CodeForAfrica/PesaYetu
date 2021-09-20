import {
  Typography,
  Grid,
  SvgIcon,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const ComparisonPin = ({ pinIcon, label }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Button variant="contained" className={classes.button}>
          <SvgIcon component={pinIcon} className={classes.svgIconButton} />
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
  pinIcon: PropTypes.string,
};

ComparisonPin.defaultProps = {
  label: undefined,
  pinIcon: undefined,
};

export default ComparisonPin;
