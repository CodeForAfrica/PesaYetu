import { Hidden } from "@mui/material";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import MobilePanel from "./MobilePanel";

function Panel(props) {
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel {...props} />
      </Hidden>
      <Hidden lgDown implementation="css">
        <DesktopPanel {...props} />
      </Hidden>
    </>
  );
}

export default Panel;
