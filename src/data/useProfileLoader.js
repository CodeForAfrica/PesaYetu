import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { buildVisualsQuery, GET_PROFILE } from './queries';

export default (geoId, comparisonGeoId, visuals) => {
  const client = useApolloClient();
  const [chartData, setChartsData] = useState({
    isLoading: true
  });
  const [profiles, setProfiles] = useState({
    isLoading: true
  });

  useEffect(() => {
    (async () => {
      setProfiles({
        isLoading: true
      });

      const {
        data: { geo: profile, populationGroup, populationResidence }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: geoId.split('-')[1],
          geoLevel: geoId.split('-')[0]
        }
      });

      // South Africa population data is in pupolation by group
      profile.totalPopulation = populationGroup.nodes.reduce(
        (a, b) => a + b.total,
        0
      );
      if (profile.totalPopulation === 0) {
        // Kenya population data is in pupolation by residence
        profile.totalPopulation = populationResidence.nodes.reduce(
          (a, b) => a + b.total,
          0
        );
      }
      const {
        data: { geo: parent }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: profile.parentCode,
          geoLevel: profile.parentLevel
        }
      });

      let comparison;
      if (comparisonGeoId) {
        const data = await client.query({
          query: GET_PROFILE,
          variables: {
            geoCode: comparisonGeoId.split('-')[1],
            geoLevel: comparisonGeoId.split('-')[0]
          }
        });
        comparison = data.geo;

        // South Africa population data is in pupolation by group
        comparison.totalPopulation = data.populationGroup.nodes.reduce(
          (a, b) => a + b.total,
          0
        );
        if (comparison.totalPopulation === 0) {
          // Kenya population data is in pupolation by residence
          comparison.totalPopulation = data.populationResidence.nodes.reduce(
            (a, b) => a + b.total,
            0
          );
        }
      }

      setProfiles({
        isLoading: false,
        profile,
        parent,
        comparison
      });
    })();
  }, [client, geoId, comparisonGeoId]);

  useEffect(() => {
    if (!profiles.isLoading && visuals && visuals.length) {
      (async () => {
        setChartsData({
          isLoading: true
        });

        const parent = {
          geoLevel: profiles.parent.parentLevel,
          geoCode: profiles.parent.parentCode
        };
        const { data: profileVisualsData } = await client.query({
          query: buildVisualsQuery(visuals, parent),
          variables: {
            geoCode: profiles.profile.geoCode,
            geoLevel: profiles.profile.geoLevel
          }
        });

        let comparisonVisualsData;
        if (profiles.comparison) {
          const { data } = await client.query({
            query: buildVisualsQuery(visuals, parent),
            variables: {
              geoCode: profiles.comparison.geoCode,
              geoLevel: profiles.comparison.geoLevel
            }
          });
          comparisonVisualsData = data;
        }
        setChartsData({
          isLoading: false,
          profileVisualsData,
          comparisonVisualsData
        });
      })();
    }
  }, [profiles, client, visuals]);

  return { profiles, chartData };
};
