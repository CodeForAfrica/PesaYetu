/* eslint-disable no-console */
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Documents from "@/pesayetu/components/Documents";

function Datasets({ items, ...props }) {
  const classes = useStyles(props);
  return (
    <Documents
      // datasetTypes
      items={items}
      classes={{
        title: classes.title,
        description: classes.description,
        textContent: classes.textContent,
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
