import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import formatData from "./formatProfileDataIntoArray";
import MobilePanel from "./MobilePanel";

function Panel({ data, ...props }) {
  const items = formatData(data);

  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel items={items} {...props} />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DesktopPanel items={items} {...props} />
      </Hidden>
    </>
  );
}

Panel.propTypes = {
  data: PropTypes.shape({}),
};

Panel.defaultProps = {
  data: undefined,
};
export default Panel;
