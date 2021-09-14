import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const TreeView = ({ items, ...props }) => {
  const [selected, setSelected] = useState();
  const classes = useStyles(props);
  if (!items || !items.length) {
    return null;
  }
  const handleClick = (item) => {
    setSelected(item);
  };
  return (
    <div className={classes.root}>
      {items.map(({ label, path }) => (
        <Button selected={selected} href={path} onClick={handleClick}>
          {label}
        </Button>
      ))}
    </div>
  );
};

TreeView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};

TreeView.defaultProps = {
  items: undefined,
};

export default TreeView;
