import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData(props) {
  const { geography, dataItems } = props;
  const classes = useStyles(props);

  return (
    <>
      <TreeView classes={{ root: classes.treeView }} items={dataItems} />
      <Profile categories={dataItems} geography={geography} />
    </>
  );
}

RichData.propTypes = {
  dataItems: PropTypes.arrayOf(PropTypes.shape({})),
  geography: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
  geometries: PropTypes.shape({}),
  highlights: PropTypes.shape({}),
  tags: PropTypes.shape({}),
};

RichData.defaultProps = {
  dataItems: undefined,
  geography: undefined,
  geometries: undefined,
  highlights: undefined,
  tags: undefined,
};

export default RichData;
