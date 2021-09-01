import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";
import Sources from "@/pesayetu/components/Sources";
import Tabs from "@/pesayetu/components/Tabs";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
}));

function DatasetsAndDocuments({ items, ...props }) {
  const classes = useStyles(props);
  const tabItems = items?.map(({ label, children }) => {
    return {
      label,
      children: <Sources {...children} />,
    };
  });
  return (
    <div>
      <Section classes={{ root: classes.section }}>
        <Tabs items={tabItems} />
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
