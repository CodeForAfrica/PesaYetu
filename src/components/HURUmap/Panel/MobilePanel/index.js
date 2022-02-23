import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import RichData from "./RichData";
import useStyles from "./useStyles";

import { ReactComponent as TopIcon } from "@/pesayetu/assets/icons/Component 130 – 1.svg";
import Print from "@/pesayetu/assets/icons/print.svg";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import PinAndCompare from "@/pesayetu/components/HURUmap/PinAndCompare";
import Section from "@/pesayetu/components/Section";
import Tabs from "@/pesayetu/components/Tabs";
import { hurumapArgs } from "@/pesayetu/config";
import { computeLocationOptions } from "@/pesayetu/lib/hurumap";

function MobilePanel({ scrollToTopLabel, activeType, ...props }) {
  const classes = useStyles(props);
  const { locationCodes, onSelectLocation, primaryProfile } = props;
  const { geography, items } = primaryProfile;

  const { pinAndCompare } = hurumapArgs;
  const [options] = useState(
    computeLocationOptions(primaryProfile, locationCodes, true)
  );

  const activeTab = Math.max(
    items?.findIndex(({ title }) => title === activeType),
    0
  );
  const formatedItems = items?.map((item) => {
    return {
      label: item.title,
      href: `#${item.title}`,
      children: <RichData item={item} {...props} />,
    };
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClose = (e) => {
    // TODO(kilemensi): For some reason, e.target.value doesn't seem to work.
    const code = e.nativeEvent?.target?.dataset?.value;
    if (code && onSelectLocation) {
      onSelectLocation({ code });
    }
  };

  return (
    <div className={classes.root}>
      {items?.length === 0 && (
        <Section>
          <LocationHeader
            variant="primary"
            icon={Print}
            title={geography.name}
            {...geography}
          />
          <PinAndCompare
            {...pinAndCompare}
            isMobile
            onClose={handleClose}
            options={options}
          />
        </Section>
      )}
      {/* key is needed to re-render the component when prop changes e.g.
            via storybook controls */}
      <Tabs
        key={activeTab}
        name="mobilepanel"
        items={formatedItems}
        activeTab={activeTab}
        classes={{
          divider: classes.tabsDivider,
          indicator: classes.tabIndicator,
          tabs: classes.tabs,
          tab: classes.tab,
          tabPanels: classes.tabPanels,
          tabSelected: classes.tabSelected,
        }}
      />
      {items?.length > 0 && (
        <Button
          href={`#${geography.name}`}
          onClick={scrollToTop}
          className={classes.scrollButton}
          startIcon={<TopIcon className={classes.topIcon} />}
        >
          {scrollToTopLabel}
        </Button>
      )}
    </div>
  );
}

MobilePanel.propTypes = {
  primaryProfile: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
    geography: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  locationCodes: PropTypes.arrayOf(PropTypes.string),
  onSelectLocation: PropTypes.func,
  activeType: PropTypes.string,
  scrollToTopLabel: PropTypes.string,
};

MobilePanel.defaultProps = {
  primaryProfile: undefined,
  activeType: undefined,
  scrollToTopLabel: undefined,
  locationCodes: undefined,
  onSelectLocation: undefined,
};

export default MobilePanel;
