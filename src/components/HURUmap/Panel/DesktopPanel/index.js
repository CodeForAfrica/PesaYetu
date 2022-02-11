import { Drawer } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import IdleTimer from "react-idle-timer";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";
import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

function DesktopPanel({
  isPinning,
  isCompare,
  onClickPin,
  onClickUnpin,
  panelItems: panelItemsProp,
  primaryProfile,
  ...props
}) {
  const [value, setValue] = useState();
  const [pins, setPins] = useState([]);
  const [panelItems, setPanelItems] = useState([]);
  const paperRef = useRef();
  const drawerWidth = paperRef.current?.clientWidth;
  const classes = useStyles({ ...props, drawerWidth });

  const timerEl = useRef();
  const handleOnIdle = () => {
    if (!value) {
      setValue("rich-data");
    }
    timerEl.current.pause();
  };

  useEffect(() => {
    const pItems =
      panelItemsProp?.map((x) => {
        if (
          (x?.value === "rich-data" || x?.value === "pin") &&
          primaryProfile?.items?.length === 0
        ) {
          return {
            ...x,
            disabled: true,
          };
        }
        return x;
      }) ?? [];

    if (isCompare) {
      const foundCompare = pItems?.find(
        (item) => item.value === "secondaryPin"
      );
      if (!foundCompare) {
        const pinIndex = pItems?.findIndex((i) => i?.value === "pin");
        const secondaryPin = {
          ...pItems[pinIndex],
          value: "secondaryPin",
        };
        pItems.splice(pinIndex + 1, 0, secondaryPin);
      }
    }
    setPanelItems(pItems);
  }, [isCompare, panelItemsProp, primaryProfile.items]);

  useEffect(() => {
    if (isPinning || isCompare) {
      setPins((p) => {
        const index = p.indexOf("pin");
        if (index === -1) {
          return [...p, "pin"];
        }
        return p;
      });
    } else if (!isPinning && !isCompare) {
      setPins((p) => {
        const index = p.indexOf("pin");
        const c = [...p];
        if (index !== -1) {
          c?.splice(index, 1);
        }
        return c;
      });
    }
  }, [isPinning, isCompare]);

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
      if (!isPinning && !isCompare) {
        onClickPin();
      } else {
        onClickUnpin();
      }
    }
    if (!nextValue) {
      setPins([]);
    }

    setValue(nextValue);
  };

  const activePanelItems = panelItems.find((a) => !a.disabled);
  const open = value === "rich-data" && activePanelItems;

  return (
    <>
      <IdleTimer ref={timerEl} timeout={1000 * 0.2} onIdle={handleOnIdle} />
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
        open={open}
      >
        {panelItems?.map((item) => (
          <TabPanel
            key={item.value}
            name={item.value}
            selected={item.value}
            value={open ? value : undefined}
            classes={{ tabPanel: classes.tabPanel }}
          >
            <PanelItem
              item={item}
              onClickUnpin={onClickUnpin}
              isPinning={isPinning}
              onClickPin={onClickPin}
              primaryProfile={primaryProfile}
              {...props}
            />
          </TabPanel>
        ))}
        <PanelButtonGroup
          onChange={handleChange}
          items={panelItems}
          value={open ? value : undefined}
          pins={pins}
          classes={{
            root: clsx(classes.panelButtons, {
              [classes.panelButtonsOpen]: open,
            }),
          }}
        />
      </Drawer>
    </>
  );
}

DesktopPanel.propTypes = {
  isCompare: PropTypes.bool,
  isPinning: PropTypes.bool,
  onClickPin: PropTypes.func,
  onClickUnpin: PropTypes.func,
  panelItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      children: PropTypes.node,
      tree: PropTypes.shape({}),
    })
  ),
  primaryProfile: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

DesktopPanel.defaultProps = {
  isCompare: undefined,
  isPinning: undefined,
  onClickPin: undefined,
  onClickUnpin: undefined,
  panelItems: undefined,
  primaryProfile: undefined,
};

export default DesktopPanel;
