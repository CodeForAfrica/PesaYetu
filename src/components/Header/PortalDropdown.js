import React from 'react';
import PropTypes from 'prop-types';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import { Grid, MenuList, MenuItem, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AppContext } from '../../AppContext';

const styles = theme => ({
  root: {
    width: '100%',
    paddingTop: '3.25rem',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(20),
      marginRight: theme.spacing(10),
      paddingTop: 0
    }
  },
  button: {
    border: 0,
    textTransform: 'none',
    padding: 0,
    minWidth: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  p: {
    textDecoration: 'none',
    letterSpacing: '0.195rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'left',
      lineHeight: '7em'
    }
  },
  KeyboardArrowDown: {
    paddingLeft: '0.625rem',
    cursor: 'pointer'
  },
  menuList: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '2rem',
      paddingBottom: '3rem'
    }
  },
  menuListItem: {
    padding: 0,
    minHeight: '2rem'
  },
  link: {},
  selected: {}
});

function CountriesButtonComponent({ classes, onClick, isOpen }) {
  return (
    <Button disableRipple className={classes.button} onClick={onClick}>
      <span className={classes.p}>Countries</span>
      {isOpen ? (
        <KeyboardArrowUp
          fontSize="large"
          className={classes.KeyboardArrowDown}
        />
      ) : (
        <KeyboardArrowDown
          fontSize="large"
          className={classes.KeyboardArrowDown}
        />
      )}
    </Button>
  );
}

CountriesButtonComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export const CountriesButton = withStyles(styles)(CountriesButtonComponent);

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isDropdownOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  }

  render() {
    const { classes, countries } = this.props;
    const { isDropdownOpen } = this.state;
    const {
      state: { selectedCountry }
    } = this.context;

    return (
      <Grid container className={classes.root}>
        <CountriesButton
          onClick={this.toggleDropdown}
          isOpen={isDropdownOpen}
        />
        {isDropdownOpen ? (
          <MenuList className={classes.menuList}>
            {Object.keys(countries).map(country => (
              <MenuItem
                key={country}
                item
                className={classes.menuListItem}
                classes={{ selected: classes.selected }}
                selected={selectedCountry.slug === country}
              >
                <a href={`/${country}`} className={classes.link}>
                  {countries[country].name}
                </a>
              </MenuItem>
            ))}
          </MenuList>
        ) : null}
      </Grid>
    );
  }
}

Dropdown.contextType = AppContext;

Dropdown.propTypes = {
  classes: PropTypes.isRequired,
  countries: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Dropdown);
