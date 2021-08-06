import { Tab, Tabs, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import TabPanel from "@/pesayetu/components/StoriesNavigation/TabPanel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  divider: {},
  tabs: {
    textTransform: "none",
    minHeight: "29px",
  },
  tab: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "16px",
    minHeight: "23px",
    color: "#666666",
    "&:hover": {
      color: "#0067A3",
      opacity: 1,
    },
    "&$selected": {
      color: "#0067A3",
      fontWeight: 600,
      fontSize: "16px",
    },
    "&:focus": {
      color: "#0067A3",
      opacity: 1,
    },
  },
  tabsContent: {
    backgroundColor: "white",
  },
  tabpanel: {
    backgroundColor: "white",
    padding: "2rem 1rem",
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
  firstChild,
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
      <div className={classes.tabsContent}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs"
          TabIndicatorProps={{
            style: {
              display: "none",
              padding: 0,
            },
          }}
          classes={{ root: classes.tabs }}
        >
          <Tab
            label={firstLabel}
            {...a11yProps(0)}
            disableRipple
            classes={{ root: classes.tab }}
          />
          <Tab
            label={secondLabel}
            {...a11yProps(1)}
            disableRipple
            classes={{ root: classes.tab }}
          />
        </Tabs>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0}>
          {firstChild}
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
  firstChild: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  secondChild: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

StoriesNavigation.defaultProps = {
  firstLabel: undefined,
  secondLabel: undefined,
  firstChild: undefined,
  secondChild: undefined,
};

export default StoriesNavigation;
