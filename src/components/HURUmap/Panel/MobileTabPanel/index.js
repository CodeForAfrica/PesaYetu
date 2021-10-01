import { Typography } from "@material-ui/core";
import Proptypes from "prop-types";
import React from "react";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import { ReactComponent as TopIcon } from "@/pesayetu/assets/icons/Component 130 – 1.svg";
import Tabs from "@/pesayetu/components/Tabs";
import formatData from "@/pesayetu/utils/formatProfileDataIntoArray";
import slugify from "@/pesayetu/utils/slugify";

function MobileTabPanel({ data, geography, activeType, ...props }) {
  const items = formatData(data);
  const classes = useStyles(props);
  const activeTab = Math.max(
    items.findIndex(({ title }) => title === activeType),
    0
  );
  const formatedItems = items.map((item) => {
    return {
      label: item.title,
      href: `#${item.title}`,
      children: <PanelItem item={item} geography={geography} {...props} />,
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
  data: Proptypes.shape({}),
  geography: Proptypes.shape({
    name: Proptypes.string,
  }),
  activeType: Proptypes.string,
};

MobileTabPanel.defaultProps = {
  data: undefined,
  geography: undefined,
  activeType: undefined,
};

export default MobileTabPanel;
