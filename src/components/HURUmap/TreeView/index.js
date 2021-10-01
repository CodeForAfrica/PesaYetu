import { Typography } from "@material-ui/core";
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
  if (!items?.length) {
    return null;
  }
  const handleClick = (event) => {
    document
      .getElementById(slugify(event.target.dataset.title))
      .scrollIntoView({ behavior: "smooth" });
    if (event.target.dataset.expand) {
      setExpanded(event.target.dataset.title);
    }
  };

  return (
    <div className={classes.root}>
      <MuiTreeView expanded={[expanded]}>
        {items.map((item) => (
          <TreeItem
            key={item.title}
            nodeId={item.title}
            label={
              <Typography
                onClick={handleClick}
                data-title={item.title}
                data-expand
                className={classes.label}
                variant="caption"
              >
                {item.title} <CheckIcon className={classes.icon} />
              </Typography>
            }
            classes={{
              root: classes.tree,
              expanded: classes.expanded,
            }}
          >
            {item.children.map((child) => (
              <TreeItem
                key={child.title}
                nodeId={child.title}
                label={
                  <Typography
                    data-title={child.title}
                    onClick={handleClick}
                    className={clsx(classes.label, classes.childLabel)}
                    variant="caption"
                  >
                    {child.title}
                  </Typography>
                }
              />
            ))}
          </TreeItem>
        ))}
      </MuiTreeView>
    </div>
  );
};

TreeView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.shape({}),
    })
  ),
  expanded: PropTypes.string,
};

TreeView.defaultProps = {
  items: undefined,
  expanded: undefined,
};

export default TreeView;
