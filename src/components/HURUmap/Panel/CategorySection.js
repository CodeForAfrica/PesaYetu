import PropTypes from "prop-types";
import React from "react";

import CategoryHeader from "@/pesayetu/components/HURUmap/CategoryHeader";
import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubcategoryHeader";

function CategorySection({ category }) {
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
        />
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
};
CategorySection.defaultProps = {
  category: undefined,
};

export default CategorySection;
