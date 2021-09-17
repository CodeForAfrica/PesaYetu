import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";

function Line({ firstSelector, secondSelector, ...props }) {
  const classes = useStyles(props);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    const firstElement = document
      .querySelector(firstSelector)
      ?.getBoundingClientRect();
    const secondElement = document
      .querySelector(secondSelector)
      ?.getBoundingClientRect();
    const y1 = firstElement?.top + firstElement?.height / 2;
    const y2 = secondElement?.top + secondElement?.height / 2;

    if (firstElement && secondElement) {
      if (firstElement.left < secondElement.left) {
        setStart({
          x1: firstElement?.left + firstElement?.width + 20,
          y1,
        });
        setEnd({ x2: secondElement?.left - 20, y2 });
      } else {
        setStart({ x1: firstElement?.left - 20, y1 });
        setEnd({
          x2: secondElement?.left + secondElement?.width + 20,
          y2,
        });
      }
    }
  }, [firstSelector, secondSelector]);

  if (!start || !end) {
    return null;
  }

  return (
    <div key={start.x1 + start.y1} className={classes.lineContainer}>
      <svg
        key={start.x1 + start.y1}
        className={classes.line}
        height="100vh"
        width="100vw"
      >
        <line {...start} {...end} id="line" />
        <circle cx={end.x2} cy={end.y2} r="10" stroke="white" />
      </svg>
    </div>
  );
}

Line.propTypes = {
  firstSelector: PropTypes.string.isRequired,
  secondSelector: PropTypes.string.isRequired,
};

export default Line;
