import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Panel from "./Panel";
import useStyles from "./useStyles";

import { ReactComponent as TopIcon } from "@/pesayetu/assets/icons/Component 130 – 1.svg";
import Tabs from "@/pesayetu/components/Tabs";
import slugify from "@/pesayetu/utils/slugify";

function MobileTabPanel({ dataItems, geography, activeType, ...props }) {
  const classes = useStyles(props);
  const activeTab = Math.max(
    dataItems.findIndex(({ title }) => title === activeType),
    0
  );
  const formatedItems = dataItems.map((item) => {
    return {
      label: item.title,
      href: `#${item.title}`,
      children: <Panel item={item} geography={geography} {...props} />,
    };
  });
  const scrollToTop = () => {
    document
      .getElementById(slugify(geography.name))
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.root}>
      {/* key is needed to re-render the component when prop changes e.g.
            via storybook controls */}
      <Tabs
        classes={classes}
        key={activeTab}
        name="mobilepanel"
        items={formatedItems}
        activeTab={activeTab}
      />
      <Typography
        href={`#${geography.name}`}
        onClick={scrollToTop}
        className={classes.footer}
      >
        <TopIcon className={classes.footerIcon} /> BACK TO TOP
      </Typography>
    </div>
  );
}

MobileTabPanel.propTypes = {
  dataItems: PropTypes.arrayOf(PropTypes.shape({})),
  geography: PropTypes.shape({
    name: PropTypes.string,
  }),
  activeType: PropTypes.string,
};

MobileTabPanel.defaultProps = {
  dataItems: undefined,
  geography: undefined,
  activeType: undefined,
};

export default MobileTabPanel;
