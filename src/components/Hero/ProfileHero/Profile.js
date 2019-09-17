import React, { useCallback } from 'react';

import { PropTypes } from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames';
import {
  MapIt,
  ContentLoader,
  TypographyLoader
} from '@codeforafrica/hurumap-ui';
import Hero, { HeroTitle, HeroTitleGrid, HeroDetail } from '../Hero';

import Search from '../../Search';
import searchIcon from '../../../assets/images/icons/location.svg';
import config from '../../../config';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  titleGrid: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '35%'
    }
  },
  map: {
    zIndex: 0,
    position: 'relative !important',
    backgroundColor: 'grey',
    height: '15.625rem !important',
    width: '100%',
    left: 'unset !important',
    top: 'unset !important',
    [theme.breakpoints.up('md')]: {
      width: '65% !important',
      height: '28.75rem !important',
      maxHeight: '28.75rem !important',
      maxWidth: '46.25rem !important'
    }
  },
  h2hMap: {
    position: 'relative',
    height: '11.875rem !important',
    width: '100% !important',
    right: 'unset',
    [theme.breakpoints.up('md')]: {
      height: '16.875rem !important'
    }
  },
  caption: {
    display: 'inline-flex',
    width: '100%',
    textTransform: 'capitalize',
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing()
  },
  captionItem: {
    display: 'inline-block',
    paddingLeft: 4
  },
  release: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.688em',
      position: 'absolute',
      bottom: '22%',
      display: 'inline-block',
      right: '4%'
    },
    [theme.breakpoints.up('lg')]: {
      right: '9.375rem'
    }
  },
  h2hRelease: {
    display: 'inline-block'
  },
  alink: {}
}));
function Profile({
  geoId,
  history,
  head2head,
  isLoading,
  profile,
  parent,
  ...props
}) {
  const classes = useStyles(props);
  const onClickGeoLayer = useCallback(
    area => {
      history.push(`/profiles/${area.codes[config.MAPIT.codeType]}`);
    },
    [history]
  );

  const {
    geoLevel,
    name: shortName,
    parentCode,
    parentLevel,
    totalPopulation
  } = isLoading ? {} : profile;

  const { name: parentName } = isLoading ? {} : parent;

  let { squareKms } = isLoading ? {} : profile;
  const squareKmsFloat = parseFloat(squareKms);
  if (!Number.isNaN(squareKms)) {
    if (squareKmsFloat < 1.0) {
      const numberFormatter = new Intl.NumberFormat('en-GB', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      });
      squareKms = numberFormatter.format(squareKmsFloat);
    } else {
      const numberFormatter = new Intl.NumberFormat('en-GB', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      });
      squareKms = numberFormatter.format(squareKmsFloat);
    }
  }

  let population;
  let populationDensity;
  if (!isLoading && totalPopulation) {
    let numberFormatter = new Intl.NumberFormat('en-GB');
    population = numberFormatter.format(totalPopulation.toFixed(0));
    numberFormatter = new Intl.NumberFormat('en-GB', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
    populationDensity = numberFormatter.format(
      totalPopulation / squareKmsFloat
    );
  }

  return (
    <Hero classes={{ root: classes.root }}>
      <HeroTitleGrid
        quater
        head2head={head2head}
        classes={{ titleTextGrid: classes.titleGrid }}
      >
        <HeroTitle small breakWord loading={isLoading} loaderWidth={150}>
          {shortName}
        </HeroTitle>
        <TypographyLoader variant="subtitle1" className={classes.caption}>
          {geoLevel}{' '}
          <Typography variant="subtitle1" className={classes.captionItem}>
            in{' '}
            <span>
              <a
                href={
                  parentLevel !== 'continent'
                    ? `/profile/${parentCode}-${parentCode}`
                    : '#'
                }
                className={classes.alink}
              >
                {parentLevel ? parentName : 'Africa'}
              </a>
            </span>
          </Typography>
        </TypographyLoader>
        <HeroDetail
          loading={isLoading}
          loader={{
            detailWidth: 117,
            detailLabelWidth: 48
          }}
          label="Population"
          hidden={!population && !isLoading}
        >
          {population}
        </HeroDetail>
        <HeroDetail
          small
          loading={isLoading}
          loader={{
            detailWidth: 84,
            detailLabelWidth: 80
          }}
          label="Square kilometers"
          hidden={!squareKms && !isLoading}
        >
          {squareKms}
        </HeroDetail>
        <HeroDetail
          small
          loading={isLoading}
          loader={{
            detailWidth: 51,
            detailLabelWidth: '123px'
          }}
          label="People per square kilometer"
          hidden={!populationDensity && !isLoading}
        >
          {populationDensity}
        </HeroDetail>
        {/* Start search skeleton loader */}
        {!head2head && isLoading && (
          <ContentLoader style={{ width: '304px', height: '49px' }}>
            <rect x="0" y="0" width="100%" height="100%" />
          </ContentLoader>
        )}
        {/* End search skeleton loader */}
        {!head2head && !isLoading && (
          <Search
            isComparisonSearch
            placeholder="Compare this with"
            thisGeoId={geoId}
            icon={searchIcon}
          />
        )}
      </HeroTitleGrid>
      <div
        className={classNames(classes.map, {
          [classes.h2hMap]: head2head
        })}
      >
        <MapIt
          zoom={config.MAPIT.zoom}
          center={config.MAPIT.centre}
          id={geoId}
          drawProfile
          drawChildren
          url={config.MAPIT.url}
          codeType={config.MAPIT.codeType}
          geoLevel={geoId.split('-')[0]}
          geoCode={geoId.split('-')[1]}
          onClickGeoLayer={onClickGeoLayer}
        />
      </div>
      {/* {activeRelease && (
          <Typography
            variant="body2"
            className={classNames(classes.release, {
              [classes.h2hRelease]: head2head
            })}
            component="div"
          >
            {activeRelease.citation}
            <ReleaseDropdown primaryReleases={primaryReleases} fromHero />
          </Typography>
        )} */}
    </Hero>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  profile: PropTypes.shape({}).isRequired,
  parent: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  head2head: PropTypes.bool.isRequired,
  geoId: PropTypes.string.isRequired
};

export default withRouter(Profile);
