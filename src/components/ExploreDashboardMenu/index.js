import { Typography } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as CheckIcon } from "@/pesayetu/assets/icons/checked.svg";
import Link from "@/pesayetu/components/Link";

const ExploreDashboardMenu = ({ items, ...props }) => {
  const classes = useStyles(props);
  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      {items.map(({ children, label, path }) => (
        <>
          <TreeView>
            <TreeItem
              endIcon={1}
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
          </TreeView>
        </>
      ))}
    </div>
  );
};

ExploreDashboardMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

ExploreDashboardMenu.defaultProps = {
  items: undefined,
};

export default ExploreDashboardMenu;
