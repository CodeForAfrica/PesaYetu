import NImage from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Image({ placeholder: placeholderProp, src, ...props }) {
  if (!src) {
    return null;
  }
  const hasBlurData = !!src?.blurDataURL;
  const placeholder = placeholderProp || hasBlurData ? "blur" : undefined;
  return <NImage {...props} placeholder={placeholder} src={src} />;
}

Image.propTypes = {
  placeholder: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};

Image.defaultProps = {
  placeholder: undefined,
  src: undefined,
};

export default Image;
