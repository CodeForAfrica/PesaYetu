import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import useStyles from "./useStyles";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData({ primaryProfile, ...props }) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState();
  const router = useRouter();
  const profileRef = useRef();

  const handleLabelClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const { current: el } = profileRef;
    if (el && id) {
      const as = `${window.location.pathname}#${id}`;
      router.push(router.pathname, as, { shallow: true });
      setExpanded(id);
      document.documentElement.style.scrollBehavior = "smooth";
      el.querySelector(`#${id}`).scrollIntoView();
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
