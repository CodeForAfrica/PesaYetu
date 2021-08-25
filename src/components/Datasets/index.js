import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Documents from "@/pesayetu/components/Documents";

function Datasets({ items, datasetType, ...props }) {
  const classes = useStyles(props);
  if (!datasetType?.length) {
    return null;
  }
  return (
    <Documents items={items}>
      <Grid
        item
        xs={3}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.dataTypes}
      >
        {datasetType.map((data) => (
          <RichTypography className={classes.typeContent}>
            {data.name}
          </RichTypography>
        ))}
      </Grid>
    </Documents>
  );
}

Datasets.propTypes = {
  datasetType: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

Datasets.defaultProps = {
  items: undefined,
  datasetType: undefined,
};

export default Datasets;
