import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SvgIcon,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const RichDataHeader = ({ title, description, label, pinIcon, printIcon }) => {
  const classes = useStyles();

  if (!(title && description)) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <SvgIcon component={printIcon} className={classes.svgIcon} />
      </Grid>
      <Typography variant="subtitle2" className={classes.description}>
        {description}
      </Typography>
      <hr className={classes.underline} />
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

RichDataHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  pinIcon: PropTypes.string,
  printIcon: PropTypes.string,
};

RichDataHeader.defaultProps = {
  title: undefined,
  description: undefined,
  label: undefined,
  printIcon: undefined,
  pinIcon: undefined,
};

export default RichDataHeader;
