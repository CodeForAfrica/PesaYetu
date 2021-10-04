import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

function CategorySection({ category, geography }) {
  return (
    <>
      <CategoryHeader
        icon={category.icon}
        title={category.title}
        description={category?.description}
      />
      {category.children.map((child) => (
        <SubcategoryHeader
          key={child.title}
          title={child.title}
          description={child?.description}
        >
          {child.children.map((indicator) => (
            <Chart {...indicator} geoCode={geography.code} />
          ))}
        </SubcategoryHeader>
      ))}
    </>
  );
}

CategorySection.propTypes = {
  category: PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.shape({})),
    description: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
  }),
  geography: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
};
CategorySection.defaultProps = {
  category: undefined,
  geography: undefined,
};

export default CategorySection;
