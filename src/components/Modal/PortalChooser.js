import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  MenuList,
  MenuItem,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import geolocate from '../../assets/images/icons/shape.svg';
import cross from '../../assets/images/icons/close.svg';
import GetLocation from './GetLocation';
import { AppContext } from '../../AppContext';

const styles = theme => ({
  grid: {
    flexGrow: 1,
    width: '100%',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      height: 400,
      alignItems: 'flex-end'
    }
  },
  countryList: {
    height: 300
  },
  locationText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    '&:hover': {
      color: '#e7e452'
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '150px'
    }
  },
  locateImage: {
    float: 'right'
  },
  listIndex: {
    marginRight: '50px',
    width: '80px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  closeButton: {
    color: 'white',
    border: 0,
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      marginTop: theme.spacing(10)
    }
  },
  closeSpan: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  closeImage: {
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      float: 'right'
    }
  },
  browseText: {
    color: 'white',
    opacity: 0.5,
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  locationGrid: {
    flexDirection: 'column',
    alignItem: 'flex-start',
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      paddingTop: 0
    }
  },
  countryLocationGrid: {
    justifyContent: 'flex-start',
    alignItem: 'flex-start',
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      paddingTop: 0
    }
  },
  locationActionsGrid: {
    paddingTop: theme.spacing(3)
  },
  listItem: {
    fontSize: '1.7143rem',
    minHeight: '2rem',
    padding: 0,
    fontFamily: theme.typography.fontHeading,
    fontWeight: 'normal',
    letterSpacing: 1.4,
    textDecoration: 'none',
    visibility: 'hidden',
    '&:hover': {
      visibility: 'visible',
      color: '#e7e452'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5715rem',
      lineHeight: 1.2
    }
  },
  listItemLink: {
    lineHeight: '1.8rem',
    color: 'white',
    textDecoration: 'none',
    visibility: 'visible',
    span: {
      display: 'block'
    },
    '&:hover': {
      color: '#e7e452'
    }
  },
  selected: {
    '& > *': {
      visibility: 'visible',
      color: '#e7e452'
    }
  },
  locationHr: {
    marginTop: '1rem'
  }
});

function PortalChooser({ classes, children, countries, handleClose }) {
  const {
    state: { selectedCountry }
  } = useContext(AppContext);

  return (
    <Grid
      container
      justify="flex-start"
      direction="row"
      className={classes.grid}
    >
      {children}
      <Grid
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        item
        className={classes.locationGrid}
      >
        <Typography
          component="div"
          variant="body2"
          className={classes.locationText}
        >
          <GetLocation countries={countries} />
          <img
            src={geolocate}
            alt="Use your location"
            className={classes.locateImage}
          />
          <hr className={classes.locationHr} />
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.locationActionsGrid}
        >
          <Typography variant="body2" className={classes.browseText}>
            or browse the list
          </Typography>
          <Button onClick={handleClose} className={classes.closeButton}>
            <span className={classes.closeSpan}>Close</span>
            <img src={cross} alt="Close Modal" className={classes.closeImage} />
          </Button>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        item
        className={classes.countryLocationGrid}
      >
        <MenuList className={classes.countryList}>
          {Object.keys(countries).map((country, index) => (
            <MenuItem
              key={country}
              button
              className={classes.listItem}
              classes={{
                selected: classes.selected
              }}
              selected={selectedCountry.slug === country}
            >
              <span className={classes.listIndex}>
                {`${index + 1}`.padStart(2, '0')}
              </span>
              <a className={classes.listItemLink} href={`/${country}`}>
                {countries[country].name}
              </a>
            </MenuItem>
          ))}
        </MenuList>
      </Grid>
    </Grid>
  );
}

PortalChooser.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  countries: PropTypes.shape({}).isRequired,
  handleClose: PropTypes.func.isRequired
};

PortalChooser.defaultProps = {
  children: null
};

export default withStyles(styles)(PortalChooser);
