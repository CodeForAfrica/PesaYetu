import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData({ primaryProfile, ...props }) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState();
  const profileRef = useRef();

  const handleLabelClick = (e) => {
    e.preventDefault();
    const { id, expand } = e.target.dataset;
    const { current: el } = profileRef;
    if (el) {
      el.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
      if (expand) {
        setExpanded(id);
      }
    }
  };

  return (
    <>
      <TreeView
        expanded={expanded}
        items={primaryProfile.items}
        onLabelClick={handleLabelClick}
        classes={{ root: classes.treeView }}
      />
      <Profile
        {...props}
        categories={primaryProfile.items}
        primaryProfile={primaryProfile}
        ref={profileRef}
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
