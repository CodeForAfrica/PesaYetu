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
  paginationLabel: {
    marginRight: typography.pxToRem(40),
  },
  buttonGroup: {},
  button: {
    "&::after": {
      display: "none",
    },
    color: palette.grey.main,
    border: "none !important",
    height: "max-content",
  },
  selectedOption: {
    color: `${palette.grey.dark} !important`,
  },
}));

const DataFilter = ({
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
    <Grid className={classes.root} container alignItems="center">
      <Grid lg={2}>
        <Typography variant="body1">
          {datasetLabel}:{datatset}
        </Typography>
      </Grid>
      <Grid item lg={2} container alignItems="center">
        <Typography className={classes.paginationLabel} variant="body1">
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
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
      <Grid item lg={4} container alignItems="center">
        <Typography className={classes.paginationLabel} variant="body1">
          {orderLabel}
        </Typography>
        <Input options={orderOptions} />
      </Grid>
    </Grid>
  );
};

DataFilter.propTypes = {
  datasetLabel: PropTypes.string,
  datatset: PropTypes.number,
  orderLabel: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.shape({})),
  paginationOptions: PropTypes.PropTypes.arrayOf(PropTypes.number),
  paginationlabel: PropTypes.string,
};

DataFilter.defaultProps = {
  datasetLabel: undefined,
  datatset: undefined,
  orderLabel: undefined,
  orderOptions: undefined,
  paginationOptions: undefined,
  paginationlabel: undefined,
};

export default DataFilter;
