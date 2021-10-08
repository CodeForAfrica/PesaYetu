import { Popover, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as Caret } from "@/pesayetu/assets/icons/caret.svg";
import Link from "@/pesayetu/components/Link";
import slugify from "@/pesayetu/utils/slugify";

const useStyles = makeStyles(({ palette, typography, zIndex }) => ({
  root: {
    position: "sticky",
    top: 60,
    zIndex: zIndex.modal,
  },
  caretContainer: {
    alignItems: "center",
    backgroundColor: palette.grey.light,
    display: "flex",
    height: typography.pxToRem(16),
    justifyContent: "center",
    width: "100%",
    "&:active,&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.grey.light,
    },
    "&:after": {
      display: "none",
    },
  },
  paper: {
    width: "100%",
    left: "0 !important",
    right: 0,
    maxWidth: "unset",
    backgroundColor: "#F0F0F0",
    borderRadius: 0,
    boxShadow: "unset",
    paddingTop: typography.pxToRem(9),
    paddingBottom: typography.pxToRem(24),
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: typography.pxToRem(10),
    display: "block",
    cursor: "pointer",
    color: typography.caption.color,
  },
  notSelected: {
    opacity: 0.2,
  },
}));

function SubcategoryList({ items }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (!items?.length) {
    return null;
  }

  const handleCaretClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (event) => {
    setSelectedIndex(Number(event.target.dataset.index));
    document
      .getElementById(slugify(event.target.dataset.title))
      .scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <Button className={classes.caretContainer} onClick={handleCaretClick}>
        <Caret />
      </Button>
      <Popover
        classes={{ paper: classes.paper }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {items.map(({ title }, index) => (
          <Link
            underline="none"
            href={`#${slugify(title)}`}
            onClick={handleSelect}
            data-index={index}
            data-title={title}
            variant="caption"
            className={clsx(classes.title, {
              [classes.notSelected]: selectedIndex !== index,
            })}
          >
            {title}
          </Link>
        ))}
      </Popover>
    </div>
  );
}
SubcategoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

SubcategoryList.defaultProps = {
  items: undefined,
};

export default SubcategoryList;
