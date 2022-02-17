import { Hidden } from "@material-ui/core";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import MobilePanel from "./MobilePanel";

function Panel(props) {
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel {...props} />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DesktopPanel {...props} />
      </Hidden>
    </>
  );
}

export default Panel;
