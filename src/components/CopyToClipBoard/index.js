import PropTypes from "prop-types";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyToClipBoard({ text, onCopy, children }) {
  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      {children}
    </CopyToClipboard>
  );
}

CopyToClipBoard.propTypes = {
  text: PropTypes.string,
  onCopy: PropTypes.func,
  children: PropTypes.node,
};

CopyToClipBoard.defaultProps = {
  text: undefined,
  onCopy: undefined,
  children: undefined,
};

export default CopyToClipBoard;
