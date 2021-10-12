import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData({ primaryProfile, ...props }) {
  const classes = useStyles(props);

  return (
    <>
      <TreeView
        classes={{ root: classes.treeView }}
        items={primaryProfile.items}
      />
      <Profile
        {...props}
        categories={primaryProfile.items}
        primaryProfile={primaryProfile}
      />
    </>
  );
}

RichData.propTypes = {
  primaryProfile: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

RichData.defaultProps = {
  primaryProfile: undefined,
};

export default RichData;
