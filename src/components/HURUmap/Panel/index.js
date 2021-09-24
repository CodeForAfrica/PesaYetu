import { Drawer, Box } from "@material-ui/core";
import Proptypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

function Panel({ items, ...props }) {
  const [value, setValue] = React.useState();
  const paperRef = React.useRef();

  const handleChange = (nextValue) => {
    setValue(nextValue);
  };

  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });
  return (
    <Box className={classes.root}>
      <Drawer
        PaperProps={{ ref: paperRef }}
        classes={{ paper: classes.paper }}
        variant="persistent"
        anchor="left"
        open={!!value}
      >
        {items.map((item) => (
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
          items={items}
          value={value}
        />
      </Drawer>
    </Box>
  );
}

Panel.propTypes = {
  items: Proptypes.arrayOf(
    Proptypes.shape({
      value: Proptypes.string,
      children: Proptypes.node,
    })
  ),
};

Panel.defaultProps = {
  items: undefined,
};

export default Panel;
