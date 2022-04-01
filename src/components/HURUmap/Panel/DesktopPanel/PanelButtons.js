import { useTour } from "@reactour/tour";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import PanelButtonGroup from "@/pesayetu/components/HURUmap/PanelButtonGroup";

function PanelButtons({
  isPinning,
  isCompare,
  onClickPin,
  onClickUnpin,
  panelItems: panelItemsProp,
  primaryProfile,
  secondaryProfile,
  drawerRef,
  ...props
}) {
  const [value, setValue] = useState();
  const [pins, setPins] = useState([]);
  const [panelItems, setPanelItems] = useState([]);
  const classes = useStyles({ ...props });
  const { isOpen: tutorialOpen } = useTour();

  useEffect(() => {
    if (primaryProfile.items.length || secondaryProfile?.items?.length) {
      const interval = setTimeout(() => setValue("rich-data"), 200);

      return () => {
        clearTimeout(interval);
      };
    }
    return null;
  }, [primaryProfile.items, secondaryProfile?.items]);

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

  const open = value === "rich-data" && !tutorialOpen;
  /* eslint-disable no-param-reassign */
  if (open) {
    drawerRef.current.style.visibility = "visible";
  } else {
    drawerRef.current.style.visibility = "hidden";
  }

  return (
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
  );
}

PanelButtons.propTypes = {
  drawerRef: PropTypes.shape({
    current: PropTypes.shape({
      style: PropTypes.shape({
        visibility: PropTypes.string,
      }),
    }),
  }),
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
  secondaryProfile: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

PanelButtons.defaultProps = {
  drawerRef: undefined,
  isCompare: undefined,
  isPinning: undefined,
  onClickPin: undefined,
  onClickUnpin: undefined,
  panelItems: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};

export default PanelButtons;
