import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";
import formatData from "@/pesayetu/utils/formatProfileDataIntoArray";

function RichData(props) {
  const { geography, data } = props;
  const classes = useStyles(props);
  const items = formatData(data);

  return (
    <>
      <TreeView classes={{ root: classes.treeView }} items={items} />
      <Profile categories={items} geography={geography} />
    </>
  );
}

RichData.propTypes = {
  data: PropTypes.shape({
    subcategories: PropTypes.shape({}),
  }),
  geography: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
  geometries: PropTypes.shape({}),
  highlights: PropTypes.shape({}),
  tags: PropTypes.shape({}),
};

RichData.defaultProps = {
  data: undefined,
  geography: undefined,
  geometries: undefined,
  highlights: undefined,
  tags: undefined,
};

export default RichData;
