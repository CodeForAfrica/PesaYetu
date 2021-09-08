import { Typography } from "@material-ui/core";
import TreeItem from "@material-ui/lab/TreeItem";
import MuiTreeView from "@material-ui/lab/TreeView";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as CheckIcon } from "@/pesayetu/assets/icons/checked.svg";
import Link from "@/pesayetu/components/Link";

const TreeView = ({ items, expanded: expandedProps, ...props }) => {
  const [expanded, setExpanded] = useState(expandedProps);
  const classes = useStyles(props);
  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <MuiTreeView expanded={[expanded]}>
        {items.map(({ children, label, path }) => (
          <TreeItem
            onClick={() => setExpanded(path)}
            label={
              <Link underline="none" href={path}>
                <Typography className={classes.label} variant="caption">
                  {label} <CheckIcon className={classes.icon} />
                </Typography>
              </Link>
            }
            classes={{
              root: classes.tree,
              expanded: classes.expanded,
            }}
            nodeId={path}
          >
            {children.map((child) => (
              <TreeItem
                key={child.path}
                nodeId={child.path}
                label={
                  <Link underline="none" href={child.path}>
                    <Typography
                      className={clsx(classes.label, classes.childLabel)}
                      variant="caption"
                    >
                      {child.label}
                    </Typography>
                  </Link>
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
  items: PropTypes.arrayOf(PropTypes.shape({})),
  expanded: PropTypes.string,
};

TreeView.defaultProps = {
  items: undefined,
  expanded: undefined,
};

export default TreeView;
