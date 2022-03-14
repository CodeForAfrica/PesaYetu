import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination, PaginationItem } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

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

function Pagination({ onChangePage, page, count, href, ...props }) {
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
            component={href ? Link : undefined}
            href={href ? `${href}${item.page}` : undefined}
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
  href: PropTypes.string,
};

Pagination.defaultProps = {
  onChangePage: undefined,
  page: undefined,
  count: undefined,
  href: undefined,
};

export default Pagination;
