import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Grid, IconButton } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      borderBottom: '2px solid white'
    }
  },
  searchField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '1rem 0 0.5rem 1rem',
      borderBottom: '2px solid'
    }
  },
  searchFieldInput: {
    color: 'white'
  },
  rootBorderBottom: {
    borderBottom: '2px solid white'
  },
  searchFieldNoBorderBottom: {
    borderBottom: 'none !important'
  },
  searchFieldNoMargin: {
    marginLeft: 0,
    marginRight: 0
  },
  iconButton: {
    color: 'white',
    padding: 0
  },
  iconButtonDropdown: {
    marginLeft: -theme.spacing(4)
  },
  resultsContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: '47px'
    }
  }
});

function SearchBar({
  primary,
  classes,
  placeholder,
  value,
  width,
  handleIconClick,
  handleValueChange,
  isComparisonSearch,
  autoFocus,
  icon
}) {
  return (
    <Grid
      container
      wrap="nowrap"
      className={classNames(classes.root, {
        [classes.rootBorderBottom]: primary
      })}
    >
      <InputBase
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        classes={{ input: classes.searchFieldInput }}
        className={classNames(
          classes.searchField,
          { [classes.searchFieldNoBorderBottom]: primary },
          { [classes.searchFieldNoMargin]: isComparisonSearch }
        )}
        onChange={event => {
          const { value: searchTerm } = event.target;
          if (handleValueChange) {
            handleValueChange(searchTerm);
          }
        }}
      />
      <IconButton
        disableRipple
        disableTouchRipple
        focusRipple={false}
        style={{ backgroundColor: 'transparent' }}
        className={classNames(classes.iconButton, {
          [classes.iconButtonDropdown]: isComparisonSearch
        })}
        aria-label="Search"
        onClick={handleIconClick}
      >
        {!icon && isWidthUp('md', width) ? <CloseIcon /> : <SearchIcon />}
      </IconButton>
    </Grid>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleIconClick: PropTypes.func,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  isComparisonSearch: PropTypes.bool,
  icon: PropTypes.string
};

SearchBar.defaultProps = {
  autoFocus: false,
  handleIconClick: null,
  placeholder: '',
  isComparisonSearch: false,
  primary: true,
  icon: null
};

export default withWidth()(withStyles(styles)(SearchBar));
