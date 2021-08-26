import { Grid, Typography, ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    width: "100%",
  },
  paginationLabel: {
    marginRight: typography.pxToRem(40),
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
    <Grid container>
      <Grid lg={2}>
        <Typography variant="body1">
          {datasetLabel}:{datatset}
        </Typography>
      </Grid>
      <Grid lg={2}>
        <Typography className={classes.paginationLabel} variant="body1">
          {paginationlabel}
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          {paginationOptions?.map((option) => (
            <Button
              className={classes.button}
              onClick={() => setSelectedPageCount(option)}
              key={option}
              disabled={selectedPageCount}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
      <Grid lg={4} />
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
