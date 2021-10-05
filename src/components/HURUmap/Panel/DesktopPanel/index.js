import { Drawer } from "@material-ui/core";
import clsx from "clsx";
import Proptypes from "prop-types";
import React from "react";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

function DesktopPanel({ panelItems, ...props }) {
  const [value, setValue] = React.useState();
  const [pins, setPins] = React.useState([]);
  const paperRef = React.useRef();
  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });

  const isPin = (current) => {
    const found = panelItems.find((item) => item.value === current);
    return !!found?.pin;
  };
  if (!panelItems?.length) {
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
      {panelItems.map((item) => (
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
        classes={{
          root: clsx(classes.panelButtons, {
            [classes.panelButtonsOpen]: !!value,
          }),
        }}
        onChange={handleChange}
        items={panelItems}
        value={value}
        pins={pins}
      />
    </Drawer>
  );
}

DesktopPanel.propTypes = {
  panelItems: Proptypes.arrayOf(
    Proptypes.shape({
      value: Proptypes.string,
      children: Proptypes.node,
      tree: Proptypes.shape({}),
    })
  ),
};

DesktopPanel.defaultProps = {
  panelItems: undefined,
};

export default DesktopPanel;
