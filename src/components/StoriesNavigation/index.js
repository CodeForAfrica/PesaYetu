import { Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import TabPanel from "@/pesayetu/components/StoriesNavigation/TabPanel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    textTransform: "none",
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
  selected: {},
  demo1: {
    backgroundColor: "white",
  },
  tabpanel: {
    backgroundColor: "white",
  },
  padding: {
    padding: "1rem",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function StoriesNavigation({
  firstLabel,
  secondLabel,
  firstchild,
  secondChild,
  ...props
}) {
  const classes = useStyles(props);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs"
          classes={{ root: classes.tabs }}
        >
          <Tab label={firstLabel} {...a11yProps(0)} disableRipple />
          <Tab label={secondLabel} {...a11yProps(1)} disableRipple />
        </Tabs>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0}>
          {firstchild}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {secondChild}
        </TabPanel>
      </div>
    </div>
  );
}

StoriesNavigation.propTypes = {
  firstLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  firstchild: PropTypes.arrayOf(PropTypes.shape({})),
  secondChild: PropTypes.arrayOf(PropTypes.shape({})),
};

StoriesNavigation.defaultProps = {
  firstchild: undefined,
  secondChild: undefined,
  firstLabel: undefined,
  secondLabel: undefined,
};

export default StoriesNavigation;
