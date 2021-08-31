import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import SourceItem from "@/pesayetu/components/Sources/SourceItem";

function CarouselItems({ items, ...props }) {
  const classes = useStyles(props);
  return (
    <div>
      {items.map((item) => (
        <SourceItem
          title={item.title}
          description={item.description}
          href={item.href}
          types={item.types}
          datasetTypes={!!item.types}
          classes={{
            title: classes.title,
            text: classes.text,
            sources: classes.sources,
            description: classes.description,
            textContent: classes.textContent,
            linkContent: classes.linkContent,
            link: classes.link,
          }}
        />
      ))}
    </div>
  );
}

CarouselItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
};

CarouselItems.defaultProps = {
  items: undefined,
};

export default SourceItem;
