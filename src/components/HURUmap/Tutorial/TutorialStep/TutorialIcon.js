import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  background: {
    fill: palette.primary.main,
    stroke: "#0e68a1",
    strokeWidth: typography.pxToRem(2),
  },
  text: {
    fill: palette.text.secondary,
    fontSize: typography.pxToRem(30),
    fontWeight: 600,
    fontFamily: typography.fontFamily,
  },
  c: {
    stroke: "none",
  },
  d: {
    fill: "none",
  },
}));

function TutorialIcon({ number, ...props }) {
  const classes = useStyles(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g transform="translate(-803 -330)">
        <g transform="translate(803 330)">
          <g className={classes.background}>
            <rect className={classes.c} width="48" height="48" rx="24" />
            <rect
              className={classes.d}
              x="1"
              y="1"
              width="46"
              height="46"
              rx="23"
            />
          </g>
        </g>
        <text className={classes.text} transform="translate(827 365)">
          <tspan x="-5.43" y="0">
            {number}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

TutorialIcon.propTypes = {
  number: PropTypes.string || PropTypes.number,
};

TutorialIcon.defaultProps = {
  number: undefined,
};

export default TutorialIcon;
