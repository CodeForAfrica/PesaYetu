import React from 'react';
import PropTypes from 'prop-types';

import { ProfilePageHeader } from '../components/Header';

import Page from '../components/Page';


function Profile({
  match: {
    params: { geoId, comparisonGeoId }
  }
}) {
  const head2head = Boolean(geoId && comparisonGeoId);

  return (
    <Page>
      <ProfilePageHeader
        profile={comparisonGeoId ? [geoId, comparisonGeoId] : [geoId]}
        head2head={head2head}
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
