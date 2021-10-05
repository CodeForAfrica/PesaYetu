import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import Select from "@/pesayetu/components/Select";

function ChartFilter({
  groups,
  defaultFilter,
  attributeText,
  valueText,
  ...props
}) {
  const classes = useStyles(props);

  const [filters, setFilters] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("All values");
  const [selectedValue, setSelectedValue] = useState("");

  const [attributeOptions, setAttributeOptions] = useState([]);
  const [valueOptions, setValueOptions] = useState([]);

  useEffect(() => {
    if (defaultFilter?.name && defaultFilter?.value) {
      setSelectedAttribute(defaultFilter?.name);
      setSelectedValue(defaultFilter?.value);
      setAttributeOptions([defaultFilter?.name]);
      setValueOptions(
        groups?.find(({ name }) => name === defaultFilter?.name)
          ?.subindicators ?? [defaultFilter.value]
      );
    } else {
      setFilters(groups);
      setAttributeOptions(["All values", ...groups?.map((g) => g.name)]);
    }
  }, [groups, defaultFilter]);

  const onAtrributeChange = (e) => {
    if (e?.target?.value) {
      setSelectedAttribute(e.target.value);
      setValueOptions(
        filters.find(({ name }) => name === e.target.value)?.subindicators
      );
    }
  };

  const onValueChange = (e) => {
    if (e?.target?.value) {
      setSelectedValue(e.target.value);
    }
  };

  if (!groups?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        {attributeOptions?.length > 0 && (
          <Grid item xs={12} md={6}>
            <Select
              helperText={attributeText}
              options={attributeOptions}
              selected={selectedAttribute}
              onChange={onAtrributeChange}
              disabled={!!defaultFilter}
              classes={{ select: classes.select }}
            />
          </Grid>
        )}
        {valueOptions?.length > 0 && (
          <Grid item xs={12} md={6}>
            <Select
              helperText={valueText}
              options={valueOptions}
              selected={selectedValue}
              onChange={onValueChange}
              classes={{ select: classes.select }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

ChartFilter.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      subindicators: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  defaultFilter: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  view: PropTypes.shape({}),
  attributeText: PropTypes.string,
  valueText: PropTypes.string,
};

ChartFilter.defaultProps = {
  defaultFilter: undefined,
  groups: undefined,
  view: undefined,
  attributeText: "Filter by attribute:",
  valueText: "Select a value:",
};

export default ChartFilter;
