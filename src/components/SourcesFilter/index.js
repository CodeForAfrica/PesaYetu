import { Grid, Typography, ButtonGroup, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Select from "@/pesayetu/components/Select";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    paddingBottom: typography.pxToRem(20),
  },
  orderLabel: {
    marginRight: typography.pxToRem(40),
  },
  label: {},
  buttonGroup: {},
  buttonGroupGroupedTextHorizontal: {
    "&:not(:last-child)": {
      border: "none",
    },
  },
  button: {
    "&::after": {
      display: "none",
    },
    color: palette.grey.main,
    height: "max-content",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  selectedOption: {
    "&.Mui-disabled": {
      color: `${palette.grey.dark}`,
    },
  },
}));

const SourcesFilter = ({
  countLabel,
  count,
  onPageSize,
  onSort,
  orderLabel,
  orderOptions,
  pageSize,
  paginationLabel,
  paginationOptions,
  sortOrder,
  ...props
}) => {
  const classes = useStyles(props);
  const handleClick = (option) => {
    if (onPageSize) {
      onPageSize(option);
    }
  };

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justifyContent="space-betweeen"
    >
      <Grid item md={2} className={classes.sourcesFilter}>
        <Typography variant="body1">
          {countLabel}: {count}
        </Typography>
      </Grid>
      <Grid
        item
        md={4}
        lg={2}
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
        className={classes.sourcesFilter}
      >
        <Typography className={classes.label} variant="body2">
          {paginationLabel}
        </Typography>
        <ButtonGroup
          classes={{
            root: classes.buttonGroup,
            groupedTextHorizontal: classes.buttonGroupGroupedTextHorizontal,
          }}
          variant="text"
        >
          {paginationOptions?.map((option) => (
            <Button
              className={clsx(classes.button, {
                [classes.selectedOption]: option === pageSize,
              })}
              onClick={() => handleClick(option)}
              key={option}
              disabled={option === pageSize}
            >
              <Typography variant="body2" className={classes.label}>
                {option}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
      <Grid
        item
        md={6}
        lg={4}
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography className={classes.orderLabel} variant="body2">
          {orderLabel}
        </Typography>
        <Select onChange={onSort} options={orderOptions} selected={sortOrder} />
      </Grid>
    </Grid>
  );
};

SourcesFilter.propTypes = {
  countLabel: PropTypes.string,
  count: PropTypes.number,
  onPageSize: PropTypes.func,
  onSort: PropTypes.func,
  orderLabel: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.shape({})),
  pageSize: PropTypes.number,
  paginationOptions: PropTypes.PropTypes.arrayOf(PropTypes.number),
  paginationLabel: PropTypes.string,
  sortOrder: PropTypes.string,
};

SourcesFilter.defaultProps = {
  countLabel: undefined,
  count: undefined,
  onPageSize: undefined,
  onSort: undefined,
  orderLabel: undefined,
  orderOptions: undefined,
  pageSize: undefined,
  paginationOptions: undefined,
  paginationLabel: undefined,
  sortOrder: undefined,
};

export default SourcesFilter;
