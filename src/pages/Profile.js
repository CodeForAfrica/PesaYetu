import React from 'react';
import PropTypes from 'prop-types';

import { ProfilePageHeader } from '../components/Header';

import Page from '../components/Page';
import useProfileLoader from '../data/useProfileLoader';

function Profile({
  match: {
    params: { geoId, comparisonGeoId }
  }
}) {
  const head2head = Boolean(geoId && comparisonGeoId);
  const { profiles } = useProfileLoader(geoId, comparisonGeoId);

  return (
    <Page>
      <ProfilePageHeader
        profiles={profiles}
        head2head={head2head}
        geoId={geoId}
        comparisonGeoId={comparisonGeoId}
      />
    </Page>
  );
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      geoId: PropTypes.string.isRequired,
      comparisonGeoId: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Profile;
