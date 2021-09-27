import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Icon from "@/pesayetu/components/Image";

const LocationHeader = ({ level, parent, name, icon, ...props }) => {
  const classes = useStyles(props);

  if (!name) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.titleContent}>
        <Typography variant="h3" className={classes.title}>
          {name}
        </Typography>
        <Button variant="contained" className={classes.button}>
          <div className={classes.icon}>
            <Icon src={icon} layout="fill" />
          </div>
        </Button>
      </div>
      {parent && (
        <Typography variant="subtitle2" className={classes.description}>
          {`A ${level} in ${parent}`}
        </Typography>
      )}
    </div>
  );
};

LocationHeader.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  parent: PropTypes.string,
  icon: PropTypes.string,
};

LocationHeader.defaultProps = {
  name: undefined,
  level: undefined,
  parent: undefined,
  icon: undefined,
};

export default LocationHeader;
