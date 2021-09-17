import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Line({ start, end, ...props }) {
  const classes = useStyles(props);

  return (
    <div key={start.x1 + start.y1} className={classes.lineContainer}>
      <svg
        key={start.x1 + start.y1}
        className={classes.line}
        height="100vh"
        width="100vw"
      >
        <line {...start} {...end} id="line" />
        <circle cx={end.x2} cy={end.y2} r="9" strokeWidth={2} stroke="white" />
      </svg>
    </div>
  );
}

Line.propTypes = {
  start: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
  }).isRequired,
  end: PropTypes.shape({
    x2: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
};

export default Line;
