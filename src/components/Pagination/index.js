import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  section: {},
}));

function Pagination({ onChangePage, page, count, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <MuiPagination
        count={count}
        onChange={onChangePage}
        page={page}
        hideNextButton
        hidePrevButton
        className={classes.paginationButton}
      />
    </div>
  );
}

Pagination.propTypes = {
  onChangePage: PropTypes.func,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  count: PropTypes.number,
};

Pagination.defaultProps = {
  onChangePage: undefined,
  page: undefined,
  count: undefined,
};

export default Pagination;
