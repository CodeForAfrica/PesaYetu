import { Drawer } from "@material-ui/core";
import clsx from "clsx";
import Proptypes from "prop-types";
import React from "react";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
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
  if (!items?.length) {
    return null;
  }

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
      classes={{
        root: clsx(classes.root, {
          [classes.drawerOpen]: !!value,
          [classes.drawerClose]: !value,
        }),
        paper: classes.paper,
      }}
      variant="permanent"
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
          <PanelItem item={item} {...props} />
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
