import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Print from "@/pesayetu/assets/icons/print.svg";
import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";
import formatData from "@/pesayetu/utils/formatProfileDataIntoArray";

function RichData(props) {
  const { geography, data } = props;
  const classes = useStyles(props);
  const items = formatData(data);

  return (
    <>
      <TreeView classes={{ root: classes.treeView }} items={items} />
      <div className={classes.profile}>
        <LocationHeader icon={Print} title={geography.name} {...geography} />
        {items.map((item) => (
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
        ))}
      </div>
    </>
  );
}

RichData.propTypes = {
  data: PropTypes.shape({
    subcategories: PropTypes.shape({}),
  }),
  geography: PropTypes.shape({
    name: PropTypes.string,
  }),
  geometries: PropTypes.shape({}),
  highlights: PropTypes.shape({}),
  tags: PropTypes.shape({}),
};

RichData.defaultProps = {
  data: undefined,
  geography: undefined,
  geometries: undefined,
  highlights: undefined,
  tags: undefined,
};

export default RichData;
