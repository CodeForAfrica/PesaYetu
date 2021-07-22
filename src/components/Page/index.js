import PropTypes from "prop-types";
import React from "react";

import Base from "./Base";

/**
 * Page component that adds error handling.
 * TODO(kilemensi): Add error handling once we have error page designs
 */
function Page({ errorCode, ...props }) {
  return <Base {...props} />;
}

Page.propTypes = {
  errorCode: PropTypes.number,
};

Page.defaultProps = {
  errorCode: undefined,
};

export default Page;
