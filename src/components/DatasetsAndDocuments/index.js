import PropTypes from "prop-types";
import React from "react";

import Tabs from "@/pesayetu/components/Tabs";

function DatasetsAndDocuments({ items }) {
  return <Tabs items={items} />;
}

DatasetsAndDocuments.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.string,
    })
  ),
};

DatasetsAndDocuments.defaultProps = {
  items: undefined,
};

export default DatasetsAndDocuments;
