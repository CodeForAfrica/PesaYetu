import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Stories from "@/pesayetu/components/Stories";

function Insights({ featuredStoryProps, items, ...props }) {
  const classes = useStyles(props);
  return (
    <Stories
      classes={{
        content: classes.content,
      }}
      {...featuredStoryProps}
      {...items}
    />
  );
}

Insights.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Insights.defaultProps = {
  featuredStoryProps: undefined,
  items: undefined,
};

export default Insights;
