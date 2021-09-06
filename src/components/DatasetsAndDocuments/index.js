import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import Sources from "@/pesayetu/components/Sources";
import Tabs from "@/pesayetu/components/Tabs";

function DatasetsAndDocuments({
  items,
  activeLabel: activeLabelProp,
  ...props
}) {
  const classes = useStyles(props);

  let activeLabel = activeLabelProp;
  if (activeLabel !== "documents" || activeLabel !== "dataset") {
    activeLabel = "documents";
  }

  const activeTab = items?.map(({ route }) => route)?.indexOf(activeLabel);
  const tabItems = items?.map(({ label, route, ...rest }, index) => {
    return {
      label,
      href: `/data/${route}`,
      children: (
        <Sources
          datasetTypes
          {...rest}
          classes={
            index === 1
              ? {
                  title: classes.title,
                  text: classes.text,
                  sources: classes.sources,
                  description: classes.description,
                  textContent: classes.textContent,
                  linkContent: classes.linkContent,
                }
              : {}
          }
        />
      ),
    };
  });
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Tabs items={tabItems} activeTab={activeTab} />
      </Section>
    </div>
  );
}

DatasetsAndDocuments.propTypes = {
  activeLabel: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.shape({
        filterProps: PropTypes.shape({}),
        items: PropTypes.string,
      }),
    })
  ),
};

DatasetsAndDocuments.defaultProps = {
  activeLabel: "documents",
  items: undefined,
};

export default DatasetsAndDocuments;
