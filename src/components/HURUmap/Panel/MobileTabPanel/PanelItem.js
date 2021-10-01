import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Print from "@/pesayetu/assets/icons/print.svg";
import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";

function RichData(props) {
  const { geography, item } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.profile}>
      <LocationHeader icon={Print} title={geography.name} {...geography} />
      <div key={item.title}>
        <CategoryHeader
          icon={item.icon}
          title={item.title}
          description={item?.description}
        />
        {item.children.map((child) => (
          <SubcategoryHeader
            key={child.title}
            title={child.title}
            description={child?.description}
          />
        ))}
      </div>
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
