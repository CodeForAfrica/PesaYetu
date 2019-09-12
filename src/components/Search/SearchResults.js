import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, List, ListItem, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.up('sm')]: {
      padding: '47px 0'
    }
  },
  rootDropdown: {
    color: 'black',
    backgroundColor: 'white',
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(),
    position: 'absolute',
    width: '84%',
    zIndex: '400',
    [theme.breakpoints.up('md')]: {
      width: '28.5%'
    }
  },
  list: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },
  listItem: {
    color: 'white',
    '&:hover': {
      color: '#e7e452'
    }
  },
  listItemDropdown: {
    color: 'black',
    '&:hover': {
      fontWeight: '600'
    }
  },
  selected: {
    color: '#e7e452'
  },
  level: {
    margin: 0,
    fontSize: '14px',
    fontWeight: '600',
    opacity: '0.5',
    marginRight: '20px',
    width: '80px',
    textTransform: 'capitalize',
    textAlign: 'right',
    color: 'inherit'
  },
  levelDropdown: {
    fontSize: '10px',
    fontWeight: '400',
    width: '30%'
  },
  name: {
    margin: 0,
    fontWeight: '600',
    fontSize: '30px',
    textTransform: 'capitalize',
    color: 'inherit',
    [theme.breakpoints.up('sm')]: {
      fontSize: '35px'
    }
  },
  nameDropdown: {
    fontSize: '16px',
    fontWeight: '400'
  }
});

const maxResults = 6;

function renderHref(codeType, result, thisGeoId, isComparisonSearch) {
  let href;
  if (isComparisonSearch) {
    href = `/compare/${thisGeoId}/vs/${result.codes[codeType]}/`;
  } else if (result.type.toLowerCase() === 'country') {
    href = `/${result.slug}`;
  } else {
    href = `/profile/${result.codes[codeType]}`;
  }
  return href;
}

function SearchResults({
  classes,
  codeType,
  results,
  isComparisonSearch,
  thisGeoId
}) {
  return (
    <Grid
      container
      className={classNames(classes.root, {
        [classes.rootDropdown]: isComparisonSearch
      })}
    >
      <Grid container direction="row" justify="flex-end">
        <List className={classes.list}>
          {results.slice(0, maxResults).map(result => (
            <ListItem
              key={result.id}
              button
              disableGutters
              className={
                isComparisonSearch ? classes.listItemDropdown : classes.listItem
              }
              component="a"
              href={renderHref(codeType, result, thisGeoId, isComparisonSearch)}
            >
              <Grid container direction="row" alignItems="baseline">
                <Typography
                  className={classNames(classes.level, {
                    [classes.levelDropdown]: isComparisonSearch
                  })}
                  variant="body2"
                  component="p"
                >
                  {result.type.toLowerCase()}
                </Typography>
                <Typography
                  className={classNames(classes.name, {
                    [classes.nameDropdown]: isComparisonSearch
                  })}
                  variant="body2"
                  component="p"
                >
                  {result.name.toLowerCase()}
                </Typography>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

SearchResults.propTypes = {
  classes: PropTypes.shape().isRequired,
  codeType: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  thisGeoId: PropTypes.string,
  isComparisonSearch: PropTypes.bool.isRequired
};

SearchResults.defaultProps = {
  thisGeoId: ''
};

export default withStyles(styles)(SearchResults);
