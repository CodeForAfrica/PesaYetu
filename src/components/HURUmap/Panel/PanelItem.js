import PropTypes from "prop-types";
import React from "react";

import RichData from "./RichData";

function PanelItem({ item, ...props }) {
  const key = item.value;
  switch (key) {
    case "rich-data":
      return <RichData {...props} />;
    case "pin":
      return <RichData {...props} />;
    default:
      return null;
  }
}

PanelItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
  }),
};

PanelItem.defaultProps = {
  item: undefined,
};

export default PanelItem;
