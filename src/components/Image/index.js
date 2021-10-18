import NImage from "next/image";
import * as Vibrant from "node-vibrant";
import PropTypes from "prop-types";
import React, { useState } from "react";

const shimmer = (w, h, color) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${w}" height="${h}" fill="${color}" />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const getDominantColor = async (srcStr) => {
  let color = "#eee";
  if (typeof window === "undefined") {
    color = Vibrant.from(srcStr).getPalette((err, palette) => {
      return palette.Vibrant.hex;
    });
  }
  return color;
};

function Image({ src, ...props }) {
  const [color, setColor] = useState();

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
    getDominantColor(srcStr).then((dominantColor) => setColor(dominantColor));

    blurProps.blurDataURL = `data:image/svg+xml;base64,${toBase64(
      shimmer(1000, 1000, color)
    )}`;
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
