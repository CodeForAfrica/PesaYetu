import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";

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
      selectedValue: undefined,
      selectedAttribute: "All values",
    },
  ]);

  const resetFilters = useCallback(() => {
    filterGroups.forEach(({ slug: filterName }) => {
      view?.signal(`${filterName}Filter`, false);
    });
    view?.run();
  }, [view, filterGroups]);

  useEffect(() => {
    resetFilters();
    setAvailableGroups(filterGroups);
  }, [filterGroups, resetFilters]);

  useEffect(() => {
    resetFilters();
    const sortedFiltersProps = filterSelectProps?.sort(
      (a, b) => a.index - b.index
    );
    sortedFiltersProps.forEach((fp) => {
      if (fp.selectedAttribute !== "All values" && fp.selectedValue) {
        const filterName = slugify(fp.selectedAttribute);
        view?.signal(`${filterName}Filter`, true);
        view?.signal(`${filterName}FilterValue`, fp.selectedValue);
        view?.run();
      }
    });
  }, [filterSelectProps, resetFilters, view]);

  const onSelectValue = (attribute, value, pos) => {
    if (pos === "default") {
      const filterName = slugify(attribute);
      view?.signal(`${filterName}FilterValue`, value).run();
    } else {
      const indexFilterProp = filterSelectProps.map((fp) => {
        if (fp.index === pos) {
          // adjust available groups for next filter inputs
          const fGroups = fp.groups?.filter(({ name }) => name !== attribute);
          setAvailableGroups(fGroups);
          return {
            ...fp,
            selectedAttribute: attribute,
            selectedValue: value,
          };
        }
        return fp;
      });

      setFilterSelectProps(indexFilterProp);
    }
  };

  const onSelectAttribute = (attribute, pos) => {
    const indexFilterProp = filterSelectProps.map((fp) => {
      if (fp.index === pos) {
        return {
          ...fp,
          selectedAttribute: attribute,
          selectedValue: undefined,
        };
      }
      return fp;
    });
    setFilterSelectProps(indexFilterProp);
  };

  const deleteFilter = (attribute, filterIndex) => {
    const attributeGroup = filterGroups.find(({ name }) => name === attribute);
    const filterProps = filterSelectProps.filter(
      ({ index }) => index !== filterIndex
    );
    setAvailableGroups([attributeGroup, ...availableGroups]);
    setFilterSelectProps(filterProps);
  };

  const addFilter = () => {
    setFilterSelectProps([
      ...filterSelectProps,
      {
        groups: availableGroups,
        index: filterSelectProps?.length,
        selectedValue: undefined,
        selectedAttribute: "All values",
      },
    ]);
  };

  if (!filterGroups?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      {
        // default filters cannot be deleted
        // & their attributes cannot be changes, but values can
        defaultFilters?.map((df) => (
          <ChartFilter
            groups={filterGroups}
            selectedAttribute={df.name}
            selectedValue={df.value}
            index="default"
            onSelectValue={onSelectValue}
          />
        ))
      }
      {filterSelectProps?.map((filterProp) => (
        <ChartFilter
          key={filterProp.index}
          {...filterProp}
          deleteFilter={deleteFilter}
          onSelectValue={onSelectValue}
          onSelectAttribute={onSelectAttribute}
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
    run: PropTypes.func,
  }),
};

Filters.defaultProps = {
  defaultFilters: undefined,
  filterGroups: undefined,
  view: undefined,
};

export default Filters;
