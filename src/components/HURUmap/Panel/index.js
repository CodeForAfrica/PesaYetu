import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import formatData from "./formatProfileDataIntoArray";
import MobilePanel from "./MobilePanel";

function Panel({ primaryProfile, secondaryProfile, ...props }) {
  const items = formatData(primaryProfile.data);
  const formatedPrimaryProfile = {
    ...primaryProfile,
    items: formatData(primaryProfile.data),
  };
  const formatedSecondaryProfile = {
    ...secondaryProfile,
    items: formatData(secondaryProfile.data),
  };
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel
          primaryProfile={formatedPrimaryProfile}
          secondaryProfile={formatedSecondaryProfile}
          items={items}
          {...props}
        />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DesktopPanel
          primaryProfile={formatedPrimaryProfile}
          secondaryProfile={formatedSecondaryProfile}
          items={items}
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
  }),
  secondaryProfile: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
};

Panel.defaultProps = {
  data: undefined,
  primaryProfile: undefined,
  secondaryProfile: undefined,
};
export default Panel;
