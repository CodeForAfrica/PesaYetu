import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData({ geography, items, ...props }) {
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
        items={items}
        onLabelClick={handleLabelClick}
        classes={{ root: classes.treeView }}
      />
      <Profile categories={items} geography={geography} ref={profileRef} />
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
};

RichData.defaultProps = {
  items: undefined,
  geography: undefined,
  geometries: undefined,
};

export default RichData;
