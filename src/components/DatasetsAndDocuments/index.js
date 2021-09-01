import PropTypes from "prop-types";
import React from "react";

import Sources from "@/pesayetu/components/Sources";
import Tabs from "@/pesayetu/components/Tabs";

function DatasetsAndDocuments({ items }) {
  const tabItems = items?.map(({ label, children }) => {
    return {
      label,
      children: <Sources {...children} />,
    };
  });
  return <Tabs items={tabItems} />;
}

DatasetsAndDocuments.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.shape({
        filterProps: PropTypes.shape({}),
        items: PropTypes.string,
      }),
    })
  ),
};

DatasetsAndDocuments.defaultProps = {
  items: undefined,
};

export default DatasetsAndDocuments;
