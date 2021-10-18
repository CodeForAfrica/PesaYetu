import NImage from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Image({ src, ...props }) {
  if (!src) {
    return null;
  }
  const blurProps = {};

  let srcStr = "";
  if (typeof src === "string") {
    srcStr = src;
  } else if (typeof src?.src === "string") {
    srcStr = src?.src;
  }

  // needed because of this issue https://github.com/vercel/next.js/pull/29367
  if (!srcStr.startsWith("data")) {
    blurProps.blurDataURL = "data:image/svg+xml;base64,";
    blurProps.placeholder = "blur";
  }
  return <NImage {...blurProps} {...props} src={src} />;
}

Image.propTypes = {
  src: PropTypes.string,
};

Image.defaultProps = {
  src: undefined,
};

export default Image;
