import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_PROFILE } from './queries';

export default (geoId, comparisonGeoId) => {
  const client = useApolloClient();

  const [profiles, setProfiles] = useState({
    isLoading: true
  });

  useEffect(() => {
    (async () => {
      setProfiles({
        isLoading: true
      });

      const {
        data: { geo, population }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: geoId.split('-')[1],
          geoLevel: geoId.split('-')[0]
        }
      });
      const profile = geo.nodes[0];

      // Kenya population data is in pupolation by residence
      profile.totalPopulation = population.nodes.reduce(
        (a, b) => a + b.total,
        0
      );
      const {
        data: { geo: parentGeo }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: profile.parentCode,
          geoLevel: profile.parentLevel
        }
      });
      const parent = parentGeo.nodes[0];

      let comparison;
      if (comparisonGeoId) {
        const {
          data: {
            geo: { nodes: comparisonGeo },
            population: comparePopulation
          }
        } = await client.query({
          query: GET_PROFILE,
          variables: {
            geoCode: comparisonGeoId.split('-')[1],
            geoLevel: comparisonGeoId.split('-')[0]
          }
        });
        [comparison] = comparisonGeo;

        // Kenya population data is in pupolation by residence
        comparison.totalPopulation = comparePopulation.nodes.reduce(
          (a, b) => a + b.total,
          0
        );
      }

      setProfiles({
        isLoading: false,
        profile,
        parent,
        comparison
      });
    })();
  }, [client, geoId, comparisonGeoId]);

  return { profiles };
};
