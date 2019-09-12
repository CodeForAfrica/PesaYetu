import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import createAPI from '../../lib/api';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '50px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '100px',
      paddingRight: '100px'
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '100px'
    }
  },
  comparisonSearch: {
    width: '80%'
  }
});

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.loadSuggestions = this.loadSuggestions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    if (prevState.searchTerm !== searchTerm) {
      this.loadSuggestions(searchTerm);
    }
  }

  async loadSuggestions(searchTerm) {
    const api = createAPI();
    const {
      mapit: { codeType }
    } = api;

    let results = [];

    if (searchTerm !== '') {
        results = await api.getGeography('KE', searchTerm);
    }
    this.setState({ codeType, results });
  }

  handleSearch(searchTerm) {
    this.setState({ results: [], searchTerm });
  }

  render() {
    const {
      classes,
      children,
      handleIconClick,
      placeholder,
      icon,
      thisGeoId,
      isComparisonSearch
    } = this.props;
    const { codeType, results, searchTerm } = this.state;

    return (
      <Grid
        container
        direction="column"
        wrap="nowrap"
        className={isComparisonSearch ? classes.comparisonSearch : classes.root}
      >
        <SearchBar
          autoFocus
          value={searchTerm}
          handleValueChange={this.handleSearch}
          handleIconClick={handleIconClick}
          placeholder={placeholder}
          isComparisonSearch={isComparisonSearch}
          icon={icon}
        />
        {results.length ? (
          <SearchResults
            results={results}
            codeType={codeType}
            isComparisonSearch={isComparisonSearch}
            thisGeoId={thisGeoId}
          />
        ) : (
          children
        )}
      </Grid>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  handleIconClick: PropTypes.func,
  placeholder: PropTypes.string,
  isComparisonSearch: PropTypes.bool,
  icon: PropTypes.string,
  thisGeoId: PropTypes.string
};

Search.defaultProps = {
  children: null,
  thisGeoId: '',
  icon: null,
  placeholder: '',
  isComparisonSearch: false,
  handleIconClick: null
};

export default withStyles(styles)(Search);
