/* eslint-disable no-console */
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Sources from "@/pesayetu/components/Sources";

function Datasets({ items, ...props }) {
  const classes = useStyles(props);
  return (
    <Sources
      {...props}
      datasetTypes
      items={items}
      classes={{
        title: classes.title,
        text: classes.text,
        sources: classes.sources,
        description: classes.description,
        textContent: classes.textContent,
        linkContent: classes.linkContent,
      }}
    />
  );
}

Datasets.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
      types: PropTypes.arrayOf({
        name: PropTypes.string,
        link: PropTypes.string,
      }),
    })
  ),
};

Datasets.defaultProps = {
  items: undefined,
};

export default Datasets;
