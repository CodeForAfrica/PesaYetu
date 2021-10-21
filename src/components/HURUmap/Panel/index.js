import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import formatData from "./formatProfileDataIntoArray";
import MobilePanel from "./MobilePanel";

function Panel({ primaryProfile, secondaryProfile, ...props }) {
  const formatedPrimaryProfile = {
    ...primaryProfile,
    items: formatData(primaryProfile?.data, primaryProfile.parent),
  };
  const formatedSecondaryProfile = {
    ...secondaryProfile,
    items: formatData(secondaryProfile?.data, secondaryProfile?.parent),
  };
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
