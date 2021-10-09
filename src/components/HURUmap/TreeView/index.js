import { Link } from "@material-ui/core";
import TreeItem from "@material-ui/lab/TreeItem";
import MuiTreeView from "@material-ui/lab/TreeView";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as CheckIcon } from "@/pesayetu/assets/icons/checked.svg";
import slugify from "@/pesayetu/utils/slugify";

const TreeView = ({ items, expanded: expandedProps, ...props }) => {
  const [expanded, setExpanded] = useState(expandedProps);
  const classes = useStyles(props);

  const handleClick = (e) => {
    e.preventDefault();

    document
      .getElementById(e.target.dataset.id)
      .scrollIntoView({ behavior: "smooth" });
    if (e.target.dataset.expand) {
      setExpanded(e.target.dataset.id);
    }
  };

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <MuiTreeView expanded={[expanded]}>
        {items.map((item) => {
          const itemId = slugify(item.title);

          return (
            <TreeItem
              key={itemId}
              nodeId={itemId}
              label={
                <Link
                  color="textPrimary"
                  data-expand
                  data-id={itemId}
                  href={`#${itemId}`}
                  underline="none"
                  variant="caption"
                  className={classes.label}
                >
                  {item.title} <CheckIcon className={classes.icon} />
                </Link>
              }
              onLabelClick={handleClick}
              classes={{
                root: classes.tree,
                expanded: classes.expanded,
              }}
            >
              {item.children.map((child) => {
                const childId = slugify(child.title);

                return (
                  <TreeItem
                    key={childId}
                    nodeId={childId}
                    label={
                      <Link
                        color="textPrimary"
                        data-id={childId}
                        href={`#${childId}`}
                        onClick={handleClick}
                        underline="none"
                        variant="caption"
                        className={clsx(classes.label, classes.childLabel)}
                      >
                        {child.title}
                      </Link>
                    }
                  />
                );
              })}
            </TreeItem>
          );
        })}
      </MuiTreeView>
    </div>
  );
};

TreeView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
  expanded: PropTypes.string,
};

TreeView.defaultProps = {
  items: undefined,
  expanded: undefined,
};

export default TreeView;
