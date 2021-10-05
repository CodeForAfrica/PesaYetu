import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import RichData from "./RichData";
import useStyles from "./useStyles";

import { ReactComponent as TopIcon } from "@/pesayetu/assets/icons/Component 130 – 1.svg";
import Tabs from "@/pesayetu/components/Tabs";

function MobilePanel({
  scrollToTopLabel,
  items,
  geography,
  activeType,
  ...props
}) {
  const classes = useStyles(props);
  const activeTab = Math.max(
    items.findIndex(({ title }) => title === activeType),
    0
  );
  const formatedItems = items.map((item) => {
    return {
      label: item.title,
      href: `#${item.title}`,
      children: <RichData item={item} geography={geography} {...props} />,
    };
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <Button
        href={`#${geography.name}`}
        onClick={scrollToTop}
        className={classes.footer}
      >
        <TopIcon className={classes.footerIcon} />
        {scrollToTopLabel}
      </Button>
    </div>
  );
}

MobilePanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  geography: PropTypes.shape({
    name: PropTypes.string,
  }),
  activeType: PropTypes.string,
  scrollToTopLabel: PropTypes.string,
};

MobilePanel.defaultProps = {
  items: undefined,
  geography: undefined,
  activeType: undefined,
  scrollToTopLabel: undefined,
};

export default MobilePanel;
