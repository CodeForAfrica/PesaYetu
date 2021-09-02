import { Grid, Typography, ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Input from "./input";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    paddingBottom: typography.pxToRem(20),
    borderBottom: `1px solid ${palette.grey.main}`,
  },
  orderLabel: {
    marginRight: typography.pxToRem(40),
  },
  label: {},
  buttonGroup: {},
  button: {
    "&::after": {
      display: "none",
    },
    color: palette.grey.main,
    border: "none !important",
    height: "max-content",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  selectedOption: {
    color: `${palette.grey.dark} !important`,
  },
}));

const SourcesFilter = ({
  datasetLabel,
  datatset,
  paginationlabel,
  paginationOptions,
  orderLabel,
  orderOptions,
  ...props
}) => {
  const classes = useStyles(props);
  const [selectedPageCount, setSelectedPageCount] = useState(
    paginationOptions[0]
  );
  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="space-betweeen"
    >
      <Grid md={2} className={classes.sourcesFilter}>
        <Typography variant="body1">
          {datasetLabel}: {datatset}
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
          {paginationlabel}
        </Typography>
        <ButtonGroup
          classes={{ root: classes.buttonGroup, groupedTextHorizontal: {} }}
          variant="text"
          color="primary"
        >
          {paginationOptions?.map((option) => (
            <Button
              className={clsx(classes.button, {
                [classes.selectedOption]: option === selectedPageCount,
              })}
              onClick={() => setSelectedPageCount(option)}
              key={option}
              disabled={selectedPageCount === option}
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
        <Input options={orderOptions} />
      </Grid>
    </Grid>
  );
};

SourcesFilter.propTypes = {
  datasetLabel: PropTypes.string,
  datatset: PropTypes.number,
  orderLabel: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.shape({})),
  paginationOptions: PropTypes.PropTypes.arrayOf(PropTypes.number),
  paginationlabel: PropTypes.string,
};

SourcesFilter.defaultProps = {
  datasetLabel: undefined,
  datatset: undefined,
  orderLabel: undefined,
  orderOptions: undefined,
  paginationOptions: undefined,
  paginationlabel: undefined,
};

export default SourcesFilter;
