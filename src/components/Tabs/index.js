import { Tab, Divider, Tabs as MuiTabs } from "@material-ui/core";
import { useRouter } from "next/router";
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

function Tabs({
  activeTab,
  items,
  name: nameProp,
  onChange,
  linkComponent,
  ...props
}) {
  const router = useRouter();
  const classes = useStyles(props);
  const [value, setValue] = useState(activeTab);
  const name = nameProp || "simple";

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(_event);
    }
  };

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <MuiTabs
        value={value}
        onChange={linkComponent ? undefined : handleChange}
        variant="scrollable"
        scrollButtons="off"
        aria-label={`${name} tabs`}
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
      >
        {items.map(({ label, href, slug }, index) => (
          <Tab
            key={label}
            label={label}
            value={slug ?? index}
            component={linkComponent}
            href={href}
            underline="none"
            onClick={
              href && !linkComponent
                ? (e) => {
                    e.preventDefault();
                    router.push(href, href, { shallow: true });
                  }
                : null
            }
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
          <TabPanel
            key={item.label}
            name={name}
            selected={value}
            value={item?.slug ?? index}
          >
            {item.children}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  linkComponent: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.node,
    })
  ),
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  activeTab: 0,
  items: undefined,
  linkComponent: undefined,
  name: undefined,
  onChange: undefined,
};

export default Tabs;
