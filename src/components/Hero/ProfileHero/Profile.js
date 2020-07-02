import React, { useCallback } from 'react';
import { PropTypes } from 'prop-types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import { makeStyles, Link } from '@material-ui/core';

import TypographyLoader from '@hurumap-ui/core/TypographyLoader';
import Hero, {
  HeroTitle,
  HeroTitleGrid,
  HeroDetail
} from 'components/Hero/Hero';

import config from '../../../config';

const MapIt = dynamic(() => import('@hurumap-ui/core/MapIt'), {
  ssr: false
});

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
    height: '250px !important',
    width: '100%',
    left: 'unset !important',
    top: 'unset !important',
    [theme.breakpoints.up('md')]: {
      width: '65% !important',
      height: '460px !important',
      maxHeight: '460px !important',
      maxWidth: '740px !important'
    }
  },
  h2hMap: {
    position: 'relative',
    height: '190px !important',
    width: '100% !important',
    right: 'unset',
    [theme.breakpoints.up('md')]: {
      height: '270px !important'
    }
  },
  caption: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    textTransform: 'capitalize',
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
    marginTop: '10px'
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
      right: '150px'
    }
  },
  h2hRelease: {
    display: 'inline-block'
  },
  alink: {
    fontWeight: 'bold',
    color: '#EE4538',
    paddingLeft: 4
  }
}));
function Profile({ geoId, head2head, isLoading, profile, parent, ...props }) {
  const router = useRouter();
  const classes = useStyles(props);
  const onClickGeoLayer = useCallback(
    area => {
      router.push(`/profiles/${area.codes[config.MAPIT.codeType]}`);
    },
    [router]
  );

  const {
    geoLevel,
    name: shortName,
    parentCode,
    parentLevel,
    totalPopulation
  } = isLoading ? {} : profile;

  const { name: parentName } = !isLoading && parent ? parent : {};

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
    population = numberFormatter.format(Number(totalPopulation).toFixed(0));
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
        <TypographyLoader
          loading={isLoading}
          variant="subtitle1"
          className={classes.caption}
          loader={{
            width: 150
          }}
        >
          {geoLevel && config.geoLevels[geoLevel].name} in{' '}
          <Link
            component={parentLevel ? 'a' : 'span'}
            variant="subtitle1"
            className={classes.alink}
            href={parentLevel ? `/profiles/${parentLevel}-${parentCode}` : '#'}
            underline={parentLevel ? 'hover' : 'none'}
          >
            {parentName || 'Africa'}
          </Link>
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
            detailLabelWidth: 123
          }}
          label="People per square kilometer"
          hidden={!populationDensity && !isLoading}
        >
          {populationDensity}
        </HeroDetail>
        {/* Start search skeleton loader */}
        {/* {!head2head && isLoading && (
          <ContentLoader style={{ width: '19rem', height: '3.0625rem' }}>
            <rect x="0" y="0" width="100%" height="100%" />
          </ContentLoader>
        )} */}
        {/* End search skeleton loader */}
        {/* {!head2head && !isLoading && (
          <Search
            isComparisonSearch
            placeholder="Compare this with"
            thisGeoId={geoId}
            icon={searchIcon}
          />
        )} */}
      </HeroTitleGrid>
      <div
        className={classNames(classes.map, {
          [classes.h2hMap]: head2head
        })}
      >
        <MapIt
          center={config.MAPIT.centre}
          codeType={config.MAPIT.codeType}
          drawChildren={geoLevel === 'country'}
          drawProfile={geoLevel !== 'country'}
          geoCode={geoId.split('-')[1]}
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
          geoLevel={geoId.split('-')[0]}
          id={geoId}
          onClickGeoLayer={onClickGeoLayer}
          url={config.MAPIT.url}
          zoom={config.MAPIT.zoom}
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
  profile: PropTypes.shape({}),
  parent: PropTypes.shape({}),
  isLoading: PropTypes.bool.isRequired,
  head2head: PropTypes.bool.isRequired,
  geoId: PropTypes.string.isRequired
};

Profile.defaultProps = {
  profile: undefined,
  parent: undefined
};

export default Profile;
