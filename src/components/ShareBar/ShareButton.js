import { Tooltip, Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function ShareButton({ component, url, alt, title, children, ...props }) {
  const classes = useStyles(props);

  const Component = component;

  return (
    <Tooltip
      disableFocusListener
      title={alt}
      classes={{ tooltip: classes.tooltip }}
    >
      {!component ? (
        <Button className={classes.copyButton} variant="text">
          {children}
        </Button>
      ) : (
        <Component title={title} url={url}>
          {children}
        </Component>
      )}
    </Tooltip>
  );
}

ShareButton.propTypes = {
  component: PropTypes.node,
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

ShareButton.defaultProps = {
  component: undefined,
  url: undefined,
  alt: undefined,
  title: undefined,
  children: undefined,
};

export default ShareButton;
