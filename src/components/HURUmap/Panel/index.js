import { Drawer, Box } from "@material-ui/core";
import Proptypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";
import { treeViewArgs } from "@/pesayetu/config";

function Panel({ items, ...props }) {
  const [value, setValue] = React.useState();
  const [pins, setPins] = React.useState([]);
  const paperRef = React.useRef();
  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });

  const isPin = (current) => {
    const found = items.find((item) => item.value === current);
    return !!found?.pin;
  };

  function addOrRemovePin(array, pin) {
    const newArray = [...array];
    const index = newArray.indexOf(pin);
    if (index === -1) {
      newArray.push(pin);
    } else {
      newArray.splice(index, 1);
    }
    return newArray;
  }

  const handleChange = (nextValue) => {
    if (isPin(nextValue)) {
      setPins(addOrRemovePin(pins, nextValue));
    }
    if (!nextValue) {
      setPins([]);
    }

    setValue(nextValue);
  };

  return (
    <Box
      position="absolute"
      width="max-content"
      display="flex"
      className={classes.root}
    >
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
            classes={{ tabPanel: classes.tabPanel }}
          >
            <TreeView classes={{ root: classes.treeView }} {...treeViewArgs} />
            {item.children}
          </TabPanel>
        ))}
        <PanelButtonGroup
          classes={{ root: classes.panelButtons }}
          onChange={handleChange}
          items={items}
          value={value}
          pins={pins}
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
