import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import ChartFilter from "@/pesayetu/components/HURUmap/ChartFilter";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    paddingBottom: typography.pxToRem(18),
  },
}));

function Filters({
  availableGroups: availableGroupsProps,
  defaultFilters,
  ...props
}) {
  const classes = useStyles(props);

  const [availableGroups, setAvailableGroups] = useState([]);
  useEffect(() => {
    if (defaultFilters?.length) {
      const defaultFiltersName = defaultFilters.map(({ name }) => name);
      const availG = availableGroupsProps?.filter(
        ({ name }) => !defaultFiltersName.include(name)
      );
      setAvailableGroups(availG);
    } else {
      setAvailableGroups(availableGroupsProps);
    }
  }, [defaultFilters, availableGroupsProps]);

  const updateAvailableGroups = (variant, attribute) => {
    if (variant === "add") {
      const attributeGroup = availableGroupsProps.find(
        ({ name }) => name === attribute
      );
      setAvailableGroups([attributeGroup, ...availableGroups]);
    } else {
      const filteredGroup = availableGroups.filter(
        ({ name }) => name !== attribute
      );
      setAvailableGroups(filteredGroup);
    }
  };

  return (
    <div className={classes.root}>
      {defaultFilters?.map((df) => (
        <ChartFilter groups={availableGroupsProps} defaultFilter={df} />
      ))}
      <ChartFilter
        groups={availableGroups}
        updateAvailableGroups={updateAvailableGroups}
      />
    </div>
  );
}

Filters.propTypes = {
  availableGroups: PropTypes.arrayOf(PropTypes.shape({})),
  defaultFilters: PropTypes.arrayOf(PropTypes.shape({})),
  view: PropTypes.shape({}),
};

Filters.defaultProps = {
  defaultFilters: undefined,
  availableGroups: undefined,
  view: undefined,
};

export default Filters;
