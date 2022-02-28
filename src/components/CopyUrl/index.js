import PropTypes from "prop-types";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyUrl({ text, onCopy, children }) {
  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      {children}
    </CopyToClipboard>
  );
}

CopyUrl.propTypes = {
  text: PropTypes.string,
  onCopy: PropTypes.func,
  children: PropTypes.node,
};

CopyUrl.defaultProps = {
  text: undefined,
  onCopy: undefined,
  children: undefined,
};

export default CopyUrl;
