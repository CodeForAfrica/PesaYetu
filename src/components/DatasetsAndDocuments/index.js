import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";
import Sources from "@/pesayetu/components/Sources";
import Tabs from "@/pesayetu/components/Tabs";

// NOTE(kilemensi) useStyles uses import/definition order to determine how
//                 classes are ordered.
//                 see: https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

function DatasetsAndDocuments({ items: sources, activeType, ...props }) {
  const classes = useStyles(props);

  if (!sources?.length) {
    return null;
  }
  const activeTab = sources.findIndex(({ type }) => type === activeType);
  const items = sources.map(({ label, type, ...rest }) => {
    return {
      label,
      href: `/data/${type}`,
      children: (
        <Sources
          datasetTypes
          {...rest}
          classes={
            type === "datasets"
              ? {
                  title: classes.title,
                  text: classes.text,
                  sources: classes.sources,
                  description: classes.description,
                  textContent: classes.textContent,
                  linkContent: classes.linkContent,
                }
              : undefined
          }
        />
      ),
    };
  });
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        {/* key is needed to re-render the component when prop changes e.g.
            via storybook controls */}
        <Tabs key={activeTab} name="dnd" items={items} activeTab={activeTab} />
      </Section>
    </div>
  );
}

DatasetsAndDocuments.propTypes = {
  activeType: PropTypes.oneOf(["datasets", "documents"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

DatasetsAndDocuments.defaultProps = {
  activeType: undefined,
  items: undefined,
};

export default DatasetsAndDocuments;
