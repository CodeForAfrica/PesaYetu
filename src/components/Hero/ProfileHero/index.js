import React from 'react';

import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '5rem'
    }
  }
}));

function ProfileHero({
  profiles: { isLoading, profile, comparison, parent },
  head2head,
  geoId,
  comparisonGeoId,
  ...props
}) {
  const classes = useStyles(props);
  return !head2head ? (
    <Profile
      classes={{ root: classes.root }}
      geoId={geoId}
      isLoading={isLoading}
      profile={profile}
      parent={parent}
      head2head={head2head}
    />
  ) : (
    <Grid className={classes.root} container direction="row" spacing={4}>
      <Grid item md={6} alignItems="flex-start">
        <Profile
          isLoading={isLoading}
          profile={profile}
          parent={parent}
          head2head={head2head}
          geoId={geoId}
        />
      </Grid>
      <Grid item md={6} alignItems="flex-start">
        <Profile
          isLoading={isLoading}
          profile={comparison}
          parent={parent}
          head2head={head2head}
          geoId={comparisonGeoId}
        />
      </Grid>
    </Grid>
  );
}

ProfileHero.propTypes = {
  profiles: PropTypes.shape({
    profile: PropTypes.shape({}),
    parent: PropTypes.shape({}),
    comparison: PropTypes.shape({}),
    isLoading: PropTypes.bool
  }).isRequired,
  head2head: PropTypes.bool.isRequired,
  geoId: PropTypes.string.isRequired,
  comparisonGeoId: PropTypes.string
};

ProfileHero.defaultProps = {
  comparisonGeoId: undefined
};

export default ProfileHero;
