import PropTypes from "prop-types";
import React from "react";

import SubcategoryList from "./SubcategoryList";

import Profile from "@/pesayetu/components/HURUmap/Panel/Profile";

function Panel(props) {
  const { geography, item } = props;

  return (
    <>
      <SubcategoryList items={item.children} />
      <Profile categories={[item]} geography={geography} />
    </>
  );
}

Panel.propTypes = {
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

Panel.defaultProps = {
  item: undefined,
  geography: undefined,
};

export default Panel;
