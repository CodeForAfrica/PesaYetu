import { Tab, Divider, Tabs as MuiTabs } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

function a11yProps(name, index) {
  return {
    id: `${name}-tab-${index}`,
    "aria-controls": `${name}-tabpanel-${index}`,
  };
}

function Tabs({ name: nameProp, items, ...props }) {
  const classes = useStyles(props);
  const [value, setValue] = useState(0);
  const name = nameProp || "simple";

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs"
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
      >
        {items.map((item, index) => (
          <Tab
            key={item.label}
            label={item.label}
            {...a11yProps(name, index)}
            disableRipple
            classes={{
              root: classes.tab,
              selected: classes.tabSelected,
            }}
          />
        ))}
      </MuiTabs>
      <Divider className={classes.divider} />
      <div className={classes.tabPanels}>
        {items.map((item, index) => (
          <TabPanel key={item.label} value={value} index={index}>
            {item.children}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.string,
    })
  ),
};

Tabs.defaultProps = {
  name: undefined,
  items: undefined,
};

export default Tabs;
