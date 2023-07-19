import { Box } from "@mui/material";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import MobilePanel from "./MobilePanel";

function Panel(props) {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
        <MobilePanel {...props} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <DesktopPanel {...props} />
      </Box>
    </>
  );
}

export default Panel;
