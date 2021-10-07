import { Grid, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import { ReactComponent as CloseIcon } from "@/pesayetu/assets/icons/Component1081.svg";
import Select from "@/pesayetu/components/Select";

function ChartFilter({
  groups,
  onSelectValue,
  onSelectAttribute,
  deleteFilter,
  index,
  attributeText,
  valueText,
  selectedAttribute: selectedAttributeProp,
  selectedValue: selectedValueProp,
  ...props
}) {
  const classes = useStyles(props);

  const [selectedAttribute, setSelectedAttribute] = useState(
    selectedAttributeProp
  );
  const [selectedValue, setSelectedValue] = useState(selectedValueProp);

  const [attributeOptions, setAttributeOptions] = useState([]);
  const [valueOptions, setValueOptions] = useState([]);

  useEffect(() => {
    if (index === "default") {
      setAttributeOptions([selectedAttribute]);
      setValueOptions(
        groups?.find(({ name }) => name === selectedAttribute)
          ?.subindicators ?? [selectedValue]
      );
    } else {
      setAttributeOptions(["All values", ...groups?.map((g) => g.name)]);
    }
  }, [groups, index, selectedValue, selectedAttribute]);

  const onAtrributeChange = (e) => {
    if (e?.target?.value) {
      setSelectedAttribute(e.target.value);
      if (e.target.value === "All values") {
        setSelectedValue(undefined);
      }
      setValueOptions(
        groups.find(({ name }) => name === e.target.value)?.subindicators
      );
      if (onSelectAttribute) {
        onSelectAttribute(e.target.value, index);
      }
    }
  };

  const onValueChange = (e) => {
    if (e?.target?.value) {
      setSelectedValue(e.target.value);
      if (onSelectValue) {
        onSelectValue(selectedAttribute, e.target.value, index);
      }
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
              disabled={index === "default"}
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
              label={selectedValue?.length ? "" : "Select a value"}
              onChange={onValueChange}
              classes={{ select: classes.select, filled: classes.filled }}
            />
          </Grid>
        )}
        {index !== "default" && (
          <Grid item>
            <IconButton className={classes.button} onClick={removeFilter}>
              <CloseIcon />
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
  onSelectValue: PropTypes.func,
  onSelectAttribute: PropTypes.func,
  deleteFilter: PropTypes.func,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  attributeText: PropTypes.string,
  valueText: PropTypes.string,
  selectedValue: PropTypes.string,
  selectedAttribute: PropTypes.string,
};

ChartFilter.defaultProps = {
  groups: undefined,
  onSelectValue: undefined,
  deleteFilter: undefined,
  index: undefined,
  onSelectAttribute: undefined,
  selectedValue: undefined,
  selectedAttribute: undefined,
  attributeText: "Filter by attribute:",
  valueText: "Select a value:",
};

export default ChartFilter;
