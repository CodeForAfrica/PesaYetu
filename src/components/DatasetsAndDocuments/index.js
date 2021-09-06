import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/pesayetu/components/Section";
import Sources from "@/pesayetu/components/Sources";
import Tabs from "@/pesayetu/components/Tabs";

function DatasetsAndDocuments({ items, ...props }) {
  const classes = useStyles(props);
  const tabItems = items?.map(({ label, ...rest }, index) => {
    return {
      label,
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
        <Tabs items={tabItems} activeTab={0} />
      </Section>
    </div>
  );
}

DatasetsAndDocuments.propTypes = {
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
  items: undefined,
};

export default DatasetsAndDocuments;
