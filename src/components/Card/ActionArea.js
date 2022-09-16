import { CardActionArea } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(() => ({
  root: {},
  focusHightlight: {
    background: "transparent",
  },
  focusVisible: {},
}));

function ActionArea({ href, children, onClick, ...props }) {
  const classes = useStyles(props);

  if (!(href || onClick)) {
    return children;
  }
  return (
    <CardActionArea
      component={href ? Link : undefined}
      color="textPrimary"
      underline="none"
      {...props}
      href={href}
      onClick={onClick}
      classes={{
        root: classes.root,
        focusHighlight: classes.focusHightlight,
        focusVisible: classes.focusVisible,
      }}
    >
      {children}
    </CardActionArea>
  );
}

ActionArea.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

ActionArea.defaultProps = {
  children: undefined,
  href: undefined,
  onClick: undefined,
};

export default ActionArea;
