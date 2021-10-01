import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Print from "@/pesayetu/assets/icons/print.svg";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import CategorySection from "@/pesayetu/components/HURUmap/Panel/CategorySection";

function RichData(props) {
  const { geography, item } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.profile}>
      <LocationHeader icon={Print} title={geography.name} {...geography} />
      <CategorySection category={item} />
    </div>
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
