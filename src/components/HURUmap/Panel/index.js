import { Drawer } from "@material-ui/core";
import Proptypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

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
    <Drawer
      PaperProps={{ ref: paperRef }}
      classes={{ root: classes.root, paper: classes.paper }}
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
          <TreeView classes={{ root: classes.treeView }} {...item.tree} />
          <div>{item.children}</div>
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
  );
}

Panel.propTypes = {
  items: Proptypes.arrayOf(
    Proptypes.shape({
      value: Proptypes.string,
      children: Proptypes.node,
      tree: Proptypes.shape({}),
    })
  ),
};

Panel.defaultProps = {
  items: undefined,
};

export default Panel;
