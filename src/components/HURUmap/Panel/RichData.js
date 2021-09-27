import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

function RichData(props) {
  const { geography, data } = props;
  const classes = useStyles(props);
  return (
    <>
      <TreeView classes={{ root: classes.treeView }} items={data} />
      <div className={classes.panelMain}>
        <LocationHeader {...geography} />
        {Object.keys(data).map((label) => (
          <div key={label}>
            <CategoryHeader
              title={label}
              description={data[label]?.description}
            />
            {Object.keys(data[label]?.subcategories).map((child) => (
              <SubcategoryHeader
                title={child}
                description={data[label]?.subcategories[child].description}
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
  geography: PropTypes.shape({}),
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
