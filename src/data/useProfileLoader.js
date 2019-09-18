import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_PROFILE, buildVisualsQuery } from './queries';

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
        data: {
          geo: { nodes: profileGeo },
          population
        }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: geoId.split('-')[1],
          geoLevel: geoId.split('-')[0]
        }
      });
      const [profile] = profileGeo;

      // Kenya population data is in pupolation by residence
      profile.totalPopulation = population.nodes.reduce(
        (a, b) => a + b.total,
        0
      );
      const {
        data: {
          geo: { nodes: parentGeo }
        }
      } = await client.query({
        query: GET_PROFILE,
        variables: {
          geoCode: profile.parentCode,
          geoLevel: profile.parentLevel
        }
      });
      const [parent] = parentGeo;

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
