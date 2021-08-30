import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import DataFilter from "@/pesayetu/components/DataFilter";
import Section from "@/pesayetu/components/Section";
import SourceItem from "@/pesayetu/components/Sources/SourceItem";

function Sources({ items, filterProps, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!items?.length) {
    return null;
  }
  return (
    <Section classes={{ root: classes.root }}>
      {!isMobile && <DataFilter {...filterProps} />}
      {items.map((item) => (
        <SourceItem
          datasetTypes={!!item.types}
          title={item.title}
          description={item.description}
          href={item.href}
          types={item.types || []}
          classes={{
            title: classes.title,
            text: classes.text,
            sources: classes.sources,
            description: classes.description,
            textContent: classes.textContent,
            linkContent: classes.linkContent,
          }}
        />
      ))}
    </Section>
  );
}

Sources.propTypes = {
  filterProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
};

Sources.defaultProps = {
  items: undefined,
  filterProps: undefined,
};

export default Sources;
