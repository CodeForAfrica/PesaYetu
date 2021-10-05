import { Grid, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/Component1081.svg";
import Select from "@/pesayetu/components/Select";

function ChartFilter({
  groups,
  defaultFilter,
  onSelectValue,
  deleteFilter,
  index,
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
      onSelectValue(selectedAttribute, e.target.value);
    }
  };

  const removeFilter = (e) => {
    e.preventDefault();
    if (deleteFilter) {
      deleteFilter(selectedAttribute, index);
    }
  };

  if (!groups?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-end">
        {attributeOptions?.length > 0 && (
          <Grid item className={classes.grid}>
            <Select
              helperText={attributeText}
              options={attributeOptions}
              selected={selectedAttribute}
              onChange={onAtrributeChange}
              disabled={!!defaultFilter}
              classes={{ select: classes.select, filled: classes.filled }}
            />
          </Grid>
        )}
        {valueOptions?.length > 0 && (
          <Grid item className={classes.grid}>
            <Select
              helperText={valueText}
              options={valueOptions}
              selected={selectedValue}
              label="Select a value"
              onChange={onValueChange}
              classes={{ select: classes.select, filled: classes.filled }}
            />
          </Grid>
        )}
        {!defaultFilter && index !== 0 && (
          <Grid item>
            <IconButton className={classes.button} onClick={removeFilter}>
              <CloseIcon className={classes.icon} />
            </IconButton>
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
  onSelectValue: PropTypes.func,
  deleteFilter: PropTypes.func,
  index: PropTypes.number,
  attributeText: PropTypes.string,
  valueText: PropTypes.string,
};

ChartFilter.defaultProps = {
  defaultFilter: undefined,
  groups: undefined,
  onSelectValue: undefined,
  deleteFilter: undefined,
  index: undefined,
  attributeText: "Filter by attribute:",
  valueText: "Select a value:",
};

export default ChartFilter;
