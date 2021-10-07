import { Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DesktopPanel from "./DesktopPanel";
import formatData from "./formatProfileDataIntoArray";
import MobilePanel from "./MobilePanel";

function Panel({ data, comparedProfile, ...props }) {
  const items = formatData(data);
  const formatedComparedProfile = {
    ...comparedProfile,
    items: formatData(comparedProfile.data),
  };
  return (
    <>
      <Hidden lgUp implementation="css">
        <MobilePanel
          comparedProfile={formatedComparedProfile}
          items={items}
          {...props}
        />
      </Hidden>
      <Hidden mdDown implementation="css">
        <DesktopPanel
          comparedProfile={formatedComparedProfile}
          items={items}
          {...props}
        />
      </Hidden>
    </>
  );
}

Panel.propTypes = {
  data: PropTypes.shape({}),
  comparedProfile: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
};

Panel.defaultProps = {
  data: undefined,
  comparedProfile: undefined,
};
export default Panel;
