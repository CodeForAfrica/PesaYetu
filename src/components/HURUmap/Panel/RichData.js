import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import useStyles from "./useStyles";

import defaultIcon from "@/pesayetu/assets/icons/Group 4658-white.svg";
import Print from "@/pesayetu/assets/icons/print.svg";
import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";
import TreeView from "@/pesayetu/components/HURUmap/TreeView";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

function formatData(data) {
  return Object.keys(data).map((label) => {
    return {
      title: label,
      icon: data[label].icon ?? defaultIcon,
      description: data[label].description,
      children: Object.keys(data[label]?.subcategories).map((child) => {
        return {
          title: child,
          description: data[label]?.subcategories[child].description,
          children: Object.keys(
            data[label]?.subcategories[child]?.indicators ?? []
          ).map((indicator) => {
            return {
              title: indicator,
              indicator:
                data[label]?.subcategories[child]?.indicators[indicator],
            };
          }),
        };
      }),
    };
  });
}

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
              <Fragment key={child.title}>
                <SubcategoryHeader
                  title={child.title}
                  description={child?.description}
                />
                {child.children.map((indicator) => (
                  <Chart {...indicator} geoCode={geography.code} />
                ))}
              </Fragment>
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
    code: PropTypes.string,
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
