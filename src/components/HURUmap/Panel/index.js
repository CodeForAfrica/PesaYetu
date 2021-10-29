import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import formatData from "./formatProfileDataIntoArray";
import MobilePanel from "./MobilePanel";

function Panel({ primaryProfile, secondaryProfile, ...props }) {
  const primaryItems = formatData(primaryProfile?.data, primaryProfile?.parent);

  if (!primaryItems?.length) {
    return null;
  }
  const formatedPrimaryProfile = {
    ...primaryProfile,
    items: primaryItems,
  };
  const formatedSecondaryProfile = secondaryProfile
    ? {
        ...secondaryProfile,
        items: formatData(secondaryProfile?.data, secondaryProfile?.parent),
      }
    : undefined;
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel
          primaryProfile={formatedPrimaryProfile}
          secondaryProfile={formatedSecondaryProfile}
          {...props}
        />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DesktopPanel
          primaryProfile={formatedPrimaryProfile}
          secondaryProfile={formatedSecondaryProfile}
          {...props}
        />
      </Hidden>
    </>
  );
}

Panel.propTypes = {
  data: PropTypes.shape({}),
  primaryProfile: PropTypes.shape({
    data: PropTypes.shape({}),
    parent: PropTypes.shape({}),
  }),
  secondaryProfile: PropTypes.shape({
    data: PropTypes.shape({}),
    parent: PropTypes.shape({}),
  }),
};

Panel.defaultProps = {
  data: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};
export default Panel;
