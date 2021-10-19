import NImage from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Image({ src, ...props }) {
  if (!src) {
    return null;
  }
  return <NImage {...props} src={src} />;
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};

Image.defaultProps = {
  src: undefined,
};

export default Image;
