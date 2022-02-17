import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination, PaginationItem } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  paginationButton: {
    minWidth: typography.pxToRem(16),
    height: typography.pxToRem(16),
    border: `2px solid ${palette.text.hint}`,
    borderRadius: "50%",
    color: palette.text.secondary,
    backgroundColor: palette.background.default,
    width: typography.pxToRem(16),
    "&:hover": {
      backgroundColor: palette.text.hint,
      color: palette.text.hint,
    },
    "&$focusVisible": {
      backgroundColor: palette.text.hint,
    },
    "&$selected": {
      backgroundColor: palette.text.hint,
      color: palette.text.hint,
      "&:hover": {
        backgroundColor: palette.text.hint,
        color: palette.text.hint,
      },
    },
  },
  selected: {
    backgroundColor: palette.text.hint,
    color: palette.text.hint,
    "&:hover": {
      backgroundColor: palette.text.hint,
      color: palette.text.hint,
    },
  },
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
        renderItem={(item) => (
          <PaginationItem
            {...item}
            classes={{
              root: classes.paginationButton,
              selected: classes.selected,
            }}
          />
        )}
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
