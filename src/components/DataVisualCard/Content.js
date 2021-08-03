import { RichTypography } from "@commons-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Content = ({ description, ...props }) => {
  const classes = useStyles(props);
  return (
    <RichTypography
      className={classes.content}
      variant="subtitle2"
      display="inline"
    >
      {description}
    </RichTypography>
  );
};

Content.propTypes = {
  description: PropTypes.string,
};

Content.defaultProps = {
  description: undefined,
};

export default Content;
