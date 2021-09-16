import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";

function Line({ firstSelector, secondSelector, ...props }) {
  const classes = useStyles(props);
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
  useEffect(() => {
    const firstElement = document
      .querySelector(firstSelector)
      ?.getBoundingClientRect();
    const secondElement = document
      .querySelector(secondSelector)
      ?.getBoundingClientRect();
    if (firstElement && secondElement) {
      if (firstElement.left < secondElement.left) {
        setStart({
          x1: firstElement?.left + firstElement?.width,
          y1: firstElement?.top,
        });
        setEnd({ x2: secondElement?.left, y2: secondElement.top });
      } else {
        setStart({ x1: firstElement?.left, y1: firstElement?.top });
        setEnd({
          x2: secondElement?.left + secondElement?.width,
          y2: secondElement.top,
        });
      }
    }
  }, [firstSelector, secondSelector]);

  return (
    <div className={classes.lineContainer}>
      {console.log("rendered with ", start, end)}
      <svg className={classes.line} height="100vh" width="100vw">
        <line x1={start.x1} y1={start.y1} y2={end.y2} x2={end.x2} id="line" />
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
