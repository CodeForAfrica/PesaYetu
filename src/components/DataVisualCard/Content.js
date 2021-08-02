import { RichTypography } from "@commons-ui/core";
import PropTypes from "prop-types";
import React from "react";

const Content = ({ description }) => (
  <RichTypography variant="subtitle2" display="inline">
    {description}
  </RichTypography>
);

Content.propTypes = {
  description: PropTypes.string,
};

Content.defaultProps = {
  description: undefined,
};

export default Content;
