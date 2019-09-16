import React, { useCallback } from 'react';

import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MapIt } from '@codeforafrica/hurumap-ui';
import { Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';

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
      maxWidth: '28%',
      marginTop: '2rem'
    }
  },
  countryName: {
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'nowrap'
    }
  },
  description: {
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'nowrap',
      width: '100%'
    }
  },
  alink: {
    pointerEvents: 'all'
  },
  map: {
    zIndex: 0,
    position: 'relative !important',
    height: '15.625rem !important',
    left: 'unset !important',
    top: 'unset !important',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '72% !important',
      height: '28.75rem !important',
      maxHeight: '28.75rem !important',
      maxWidth: '51.8125rem !important'
    }
  }
});

function CountryHero({ classes, width, history }) {
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
        <HeroTitle classes={{ title: classes.countryName }}>
          PesaYetu
        </HeroTitle>
        <HeroDescription classes={{ body2: classes.description }}>
          Helps storytellers and campaigners use data to add context{' '}
          {isWidthUp('md', width) && <br />}
          and depth to stories.
        </HeroDescription>

        <HeroButton onClick={toggleModal}>Find a place</HeroButton>

        <Typography variant="subtitle2" style={{ marginTop: '2.5rem' }}>
          or view{' '}
          <a
            className={classes.alink}
            href={`/profile/country-KE`}
          >
            Kenya
          </a>
        </Typography>
      </HeroTitleGrid>
      <div className={classes.map}>
        <MapIt
          url={config.MAPIT.url}
          zoom={config.MAPIT.zoom}
          center={config.MAPIT.centre}
          codeType={config.MAPIT.codeType}
          geoLevel="country"
          geoCode="KE"
          onClickGeoLayer={onClickGeoLayer}
        />
      </div>
    </Hero>
  );
}

CountryHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withRouter(withWidth()(withStyles(styles)(CountryHero)));
