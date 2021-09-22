import { Typography, Button } from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const LocationHeader = ({ level, parent, title, icon, ...props }) => {
  const classes = useStyles(props);

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.titleContent}>
        <Typography variant="h3" className={classes.title}>
          {title}
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
  title: PropTypes.string,
  level: PropTypes.string,
  parent: PropTypes.string,
  icon: PropTypes.string,
};

LocationHeader.defaultProps = {
  title: undefined,
  level: undefined,
  parent: undefined,
  icon: undefined,
};

export default LocationHeader;
