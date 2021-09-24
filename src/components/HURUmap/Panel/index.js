import { Drawer, Box } from "@material-ui/core";
import Proptypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";
import { panelArgs } from "@/pesayetu/config";

function Panel({ children, ...props }) {
  const [value, setValue] = React.useState();
  const paperRef = React.useRef();

  const handleChange = (nextValue) => {
    setValue(nextValue);
  };

  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });
  return (
    <Box className={classes.root} sx={{ display: "flex" }}>
      <Drawer
        PaperProps={{ ref: paperRef }}
        classes={{ paper: classes.paper }}
        variant="persistent"
        anchor="left"
        open={!!value}
      >
        {panelArgs.items.map((item) => (
          <TabPanel
            key={item.value}
            name={item.value}
            selected={item.value}
            value={value}
          >
            {item.children}
          </TabPanel>
        ))}
        <PanelButtonGroup
          classes={{ root: classes.panelButtons }}
          onChange={handleChange}
          {...panelArgs}
          value={value}
        />
      </Drawer>
    </Box>
  );
}

Panel.propTypes = {
  children: Proptypes.node,
};

Panel.defaultProps = {
  children: undefined,
};

export default Panel;
