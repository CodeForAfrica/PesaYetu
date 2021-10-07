import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData({ geography, items, ...props }) {
  const classes = useStyles(props);

  return (
    <>
      <TreeView classes={{ root: classes.treeView }} items={items} />
      <Profile {...props} categories={items} geography={geography} />
    </>
  );
}

RichData.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  geography: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
  geometries: PropTypes.shape({}),
  highlights: PropTypes.shape({}),
  tags: PropTypes.shape({}),
};

RichData.defaultProps = {
  items: undefined,
  geography: undefined,
  geometries: undefined,
  highlights: undefined,
  tags: undefined,
};

export default RichData;
