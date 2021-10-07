import PropTypes from "prop-types";
import React from "react";

import SubcategoryList from "./SubcategoryList";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";

function RichData(props) {
  const { geography, item } = props;

  return (
    <>
      <SubcategoryList items={item.children} />
      <Profile {...props} categories={[item]} geography={geography} />
    </>
  );
}

RichData.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  geography: PropTypes.shape({
    name: PropTypes.string,
  }),
};

RichData.defaultProps = {
  item: undefined,
  geography: undefined,
};

export default RichData;
