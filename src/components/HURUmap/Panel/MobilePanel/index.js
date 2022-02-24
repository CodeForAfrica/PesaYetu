import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import RichData from "./RichData";

import { ReactComponent as TopIcon } from "@/pesayetu/assets/icons/Component 130 – 1.svg";
import Print from "@/pesayetu/assets/icons/print.svg";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import PinAndCompare from "@/pesayetu/components/HURUmap/PinAndCompare";
import Section from "@/pesayetu/components/Section";
import Tabs from "@/pesayetu/components/Tabs";
import { hurumapArgs } from "@/pesayetu/config";

// being last is necessary for style override to work
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

function MobilePanel({ scrollToTopLabel, activeType, ...props }) {
  const classes = useStyles(props);
  const { onSelectLocation, primaryProfile, dataNotAvailable } = props;
  const { geography, items } = primaryProfile;

  const { pinAndCompare } = hurumapArgs;

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
            {...props}
            {...pinAndCompare}
            isMobile
            onClose={handleClose}
            geographyCode={geography.code}
          />
          <Typography
            className={classes.dataNotAvailable}
          >{`${geography.name} ${dataNotAvailable}`}</Typography>
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
  activeType: PropTypes.string,
  dataNotAvailable: PropTypes.string,
  onSelectLocation: PropTypes.func,
  primaryProfile: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
    geography: PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
  }),
  scrollToTopLabel: PropTypes.string,
};

MobilePanel.defaultProps = {
  activeType: undefined,
  dataNotAvailable: undefined,
  onSelectLocation: undefined,
  primaryProfile: undefined,
  scrollToTopLabel: undefined,
};

export default MobilePanel;
