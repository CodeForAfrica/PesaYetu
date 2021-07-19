import { Layout } from '@commons-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    display: 'block', // Fix IE 11 layout when used with main.
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: typography.pxToRem(360),
    padding: `0 ${typography.pxToRem(15)}`,
    width: '100%',
  },
  /* Styles applied to the root element if `fixed={true}`. */
  fixed: Object.keys(widths.values).reduce((acc, breakpoint) => {
    const value = widths.values[breakpoint];
    if (value !== 0) {
      acc[breakpoints.up(breakpoint)] = {
        padding: 0,
        width: value,
      };
    }
    return acc;
  }, {}),
}));

const Section = React.forwardRef(function Section(
  { children, classes: classesProp, className, fixed, ...props },
  ref
) {
  const classes = useStyles({ classes: classesProp });

  if (!children) {
    return null;
  }
  return (
    <Layout
      {...props}
      classes={{ root: classes.root }}
      className={clsx(
        {
          [classes.fixed]: fixed,
        },
        className
      )}
      ref={ref}
    >
      {children}
    </Layout>
  );
});

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    fixed: PropTypes.string,
  }),
  className: PropTypes.string,
  fixed: PropTypes.bool,
};

Section.defaultProps = {
  classes: undefined,
  className: undefined,
  fixed: true,
};

export default Section;
