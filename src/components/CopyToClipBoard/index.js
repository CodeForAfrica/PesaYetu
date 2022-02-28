import PropTypes from "prop-types";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import useStyles from "./useStyles";

import { ReactComponent as CopyIcon } from "@/pesayetu/assets/icons/Group 4105.svg";

function CopyToClipBoard({ text, onCopy, ...props }) {
  const classes = useStyles(props);
  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      <CopyIcon className={classes.icon} />
    </CopyToClipboard>
  );
}

CopyToClipBoard.propTypes = {
  text: PropTypes.string,
  onCopy: PropTypes.func,
};

CopyToClipBoard.defaultProps = {
  text: undefined,
  onCopy: undefined,
};

export default CopyToClipBoard;
