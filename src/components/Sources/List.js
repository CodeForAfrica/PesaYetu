import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Dataset from "./Dataset";
import Document from "./Document";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function List({ ctaText, items, type, ...props }) {
  const classes = useStyles(props);
  const Component = type === "datasets" ? Dataset : Document;

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <Component key={item.href} {...props} {...item} ctaText={ctaText} />
      ))}
    </div>
  );
}

List.propTypes = {
  ctaText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
    })
  ),
  type: PropTypes.oneOf(["datasets", "documents"]),
};

List.defaultProps = {
  ctaText: "Read More",
  items: undefined,
  type: undefined,
};

export default List;
