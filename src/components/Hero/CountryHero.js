import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { PropTypes } from 'prop-types';
import {
  useMediaQuery,
  useTheme,
  withStyles,
  Link,
  Typography
} from '@material-ui/core';
import MapIt from '@codeforafrica/hurumap-ui/core/MapIt';

import Hero, {
  HeroTitle,
  HeroDescription,
  HeroTitleGrid,
  HeroButton
} from './Hero';
import config from '../../config';
import useToggleModal from '../../useToggleModal';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '80px'
    }
  },
  titleGrid: {
    pointerEvents: 'none',
    [theme.breakpoints.up('md')]: {
      maxWidth: '27.25%'
    },
    marginTop: '2rem'
  },
  countryName: {
    letterSpacing: '2px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'nowrap'
    }
  },
  description: {
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  alink: {
    color: '#EE4538',
    fontWeight: 'bold',
    pointerEvents: 'all'
  },
  map: {
    zIndex: 0,
    position: 'relative !important',
    height: '17.857142857rem !important',
    left: 'unset !important',
    top: 'unset !important',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '72.75% !important',
      height: '32.857142857rem !important',
      maxHeight: '32.857142857rem !important',
      maxWidth: '59.239285714rem !important' // 1rem = 14px
    }
  }
});

function CountryHero({ classes, history }) {
  const theme = useTheme();
  const { toggleModal } = useToggleModal('search');
  const onClickGeoLayer = useCallback(
    area => {
      history.push(`/profiles/${area.codes[config.MAPIT.codeType]}`);
    },
    [history]
  );
  return (
    <Hero classes={{ root: classes.root }}>
      <HeroTitleGrid classes={{ titleTextGrid: classes.titleGrid }}>
        <HeroTitle classes={{ title: classes.countryName }}>Kenya</HeroTitle>
        <HeroDescription classes={{ body2: classes.description }}>
          Helps storytellers and campaigners use data to add context{' '}
          {useMediaQuery(theme.breakpoints.up('md')) && <br />}
          and depth to stories.
        </HeroDescription>

        <HeroButton onClick={toggleModal}>Find a place</HeroButton>

        <Typography variant="subtitle2" style={{ marginTop: '2.5rem' }}>
          or view{' '}
          <Link className={classes.alink} href="/profiles/country-KE">
            Kenya
          </Link>
        </Typography>
      </HeroTitleGrid>
      <div className={classes.map}>
        <MapIt
          center={config.MAPIT.centre}
          codeType={config.MAPIT.codeType}
          drawChildren
          drawProfile
          geoCode="KE"
          geoLayerBlurStyle={{
            color: 'white',
            fillColor: '#0067A3',
            weight: 1.0,
            opacity: 1.0,
            fillOpacity: 0.2
          }}
          geoLayerFocusStyle={{
            color: 'white',
            fillColor: '#0067A3',
            weight: 2.0,
            opacity: 1.0,
            fillOpacity: 0.5
          }}
          geoLayerHoverStyle={{
            fillColor: '#0067A3',
            fillOpacity: 0.4
          }}
          geoLevel="country"
          id="KE"
          onClickGeoLayer={onClickGeoLayer}
          url={config.MAPIT.url}
          zoom={config.MAPIT.zoom}
        />
      </div>
    </Hero>
  );
}

CountryHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(withStyles(styles)(CountryHero));
