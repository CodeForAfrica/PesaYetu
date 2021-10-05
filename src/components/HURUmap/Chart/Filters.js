import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import ChartFilter from "@/pesayetu/components/HURUmap/ChartFilter";
import slugify from "@/pesayetu/utils/slugify";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    paddingBottom: typography.pxToRem(18),
  },
}));

function Filters({ filterGroups, defaultFilters, view, ...props }) {
  const classes = useStyles(props);
  const [availableGroups, setAvailableGroups] = useState([]);
  const [filterSelectProps, setFilterSelectProps] = useState([
    {
      groups: filterGroups,
      index: 0,
    },
  ]);

  useEffect(() => {
    if (defaultFilters?.length) {
      const defaultFiltersName = defaultFilters.map(({ name }) => name);
      const availG = filterGroups?.filter(
        ({ name }) => !defaultFiltersName.include(name)
      );
      setAvailableGroups(availG);
    } else {
      setAvailableGroups(filterGroups);
      filterGroups.forEach(({ slug: filterName }) => {
        view?.signal(`${filterName}Filter`, false);
      });
    }
  }, [defaultFilters, filterGroups, view]);

  const onSelectValue = (attribute, value) => {
    // adjust available groups
    const fGroups = availableGroups.filter(({ name }) => name !== attribute);
    setAvailableGroups(fGroups);
    if (attribute !== "All values") {
      const slug = slugify(attribute);
      view?.signal(`${slug}Filter`, true);
      view?.signal(`${slug}FilterValue`, value);
    }
  };

  const deleteFilter = (attribute, filterIndex) => {
    const attributeGroup = filterGroups.find(({ name }) => name === attribute);
    const filterProps = filterSelectProps.filter(
      ({ index }) => index !== filterIndex
    );
    setAvailableGroups([attributeGroup, ...availableGroups]);
    setFilterSelectProps(filterProps);
    const slug = slugify(attribute);
    view?.signal(`${slug}Filter`, false);
  };

  const addFilter = () => {
    setFilterSelectProps([
      ...filterSelectProps,
      { groups: availableGroups, index: filterSelectProps?.length },
    ]);
  };

  return (
    <div className={classes.root}>
      {defaultFilters?.map((df) => (
        <ChartFilter groups={filterGroups} defaultFilter={df} />
      ))}
      {filterSelectProps?.map((filterProp) => (
        <ChartFilter
          key={filterProp.index}
          {...filterProp}
          deleteFilter={deleteFilter}
          onSelectValue={onSelectValue}
        />
      ))}
      <ButtonBase onClick={addFilter}>Add new filter</ButtonBase>
    </div>
  );
}

Filters.propTypes = {
  filterGroups: PropTypes.arrayOf(PropTypes.shape({})),
  defaultFilters: PropTypes.arrayOf(PropTypes.shape({})),
  view: PropTypes.shape({
    signal: PropTypes.func,
  }),
};

Filters.defaultProps = {
  defaultFilters: undefined,
  filterGroups: undefined,
  view: undefined,
};

export default Filters;
