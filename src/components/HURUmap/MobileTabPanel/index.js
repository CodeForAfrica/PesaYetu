import Proptypes from "prop-types";
import React from "react";

import PanelItem from "./PanelItem";
import useStyles from "./useStyles";

import Tabs from "@/pesayetu/components/Tabs";
import formatData from "@/pesayetu/utils/formatProfileDataIntoArray";

function Panel({ data, geography, activeType, ...props }) {
  const items = formatData(data);
  const classes = useStyles(props);
  const activeTab = items.findIndex(({ title }) => title === activeType);
  const formatedItems = items.map((item) => {
    return {
      label: item.title,
      href: `#${item.title}`,
      children: <PanelItem item={item} geography={geography} {...props} />,
    };
  });
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
    </div>
  );
}

Panel.propTypes = {
  data: Proptypes.shape({}),
  geography: Proptypes.shape({}),
  activeType: Proptypes.string,
};

Panel.defaultProps = {
  data: undefined,
  geography: undefined,
  activeType: undefined,
};

export default Panel;
