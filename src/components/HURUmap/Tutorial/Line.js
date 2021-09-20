import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Line({ x1, x2, y1, y2, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.lineContainer}>
      <svg className={classes.line} height="100vh" width="100vw">
        <line x1={x1} y1={y1} x2={x2} y2={y2} />
        <circle cx={x2} cy={y2} r="9" strokeWidth={2} stroke="white" />
      </svg>
    </div>
  );
}

Line.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
};

export default Line;
