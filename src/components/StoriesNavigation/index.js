import { Tab, Tabs, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import TabPanel from "@/pesayetu/components/StoriesNavigation/TabPanel";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    marginTop: typography.pxToRem(-8),
    backgroundColor: "#e8e8e8",
  },
  tabs: {
    textTransform: "none",
    minHeight: typography.pxToRem(23),
  },
  activeIndicator: {
    backgroundColor: palette.primary.main,
  },
  indicator: {
    backgroundColor: palette.background.default,
    height: 0,
  },
  secondTab: {
    textTransform: "uppercase",
    letterSpacing: typography.pxToRem(1.6),
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    minHeight: typography.pxToRem(23),
    padding: `0 ${typography.pxToRem(48)}`,
    color: "#666666",
    "&:hover": {
      color: palette.primary.main,
      opacity: 1,
    },
    "&$selected": {
      color: palette.primary.main,
      fontWeight: 600,
      fontSize: typography.pxToRem(16),
    },
    "&:focus": {
      color: palette.primary.main,
      opacity: 1,
    },
  },
  tab: {
    textTransform: "uppercase",
    letterSpacing: typography.pxToRem(1.6),
    borderBottom: `2px solid transparent`,
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    minHeight: typography.pxToRem(23),
    color: "#666666",
    "&:hover": {
      color: palette.primary.main,
      opacity: 1,
    },
    "&$selected": {
      color: palette.primary.main,
      fontWeight: 600,
      fontSize: "16px",
    },
    "&:focus": {
      color: palette.primary.main,
      opacity: 1,
    },
  },
  activeTab: {
    textTransform: "uppercase",
    borderBottom: `2px solid ${palette.primary.main}`,
    letterSpacing: typography.pxToRem(1.6),
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    minHeight: typography.pxToRem(23),
    color: palette.primary.main,
    "&:hover": {
      color: palette.primary.main,
      opacity: 1,
    },
    "&$selected": {
      color: palette.primary.main,
      fontWeight: 600,
      fontSize: typography.pxToRem(16),
    },
    "&:focus": {
      color: palette.primary.main,
      opacity: 1,
    },
  },
  tabsContent: {
    backgroundColor: palette.background.default,
  },
  tabpanel: {
    backgroundColor: palette.background.default,
    padding: `${typography.pxToRem(32)} ${typography.pxToRem(16)}`,
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
            },
          }}
        >
          <Tab
            label={firstLabel}
            {...a11yProps(0)}
            disableRipple
            classes={{ root: value === 0 ? classes.activeTab : classes.tab }}
          />
          <Tab
            label={secondLabel}
            {...a11yProps(1)}
            disableRipple
            classes={{ root: classes.secondTab }}
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
