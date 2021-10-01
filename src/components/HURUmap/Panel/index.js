import { Hidden } from "@material-ui/core";
import React from "react";

import DeskTopPanel from "./DesktopPanel";
import MobileTabPanel from "./MobileTabPanel";

function Panel(props) {
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobileTabPanel {...props} />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DeskTopPanel {...props} />
      </Hidden>
    </>
  );
}

Panel.propTypes = {};

export default Panel;
