import { useMemo } from 'react';
import sectionedCharts from './charts.json';

export default () =>
  useMemo(() => {
    // Provide the visuals with unique ids for fetching
    // The unique ids will be used to set alias in graphql
    let index = 0;
    let chartIndex = 0;
    sectionedCharts.forEach(x =>
      x.charts.forEach(chart => {
        // eslint-disable-next-line no-param-reassign
        chart.queryAlias = `chart${chartIndex}`;
        chartIndex += 1;
        chart.visuals.forEach(visual => {
          // eslint-disable-next-line no-param-reassign
          visual.queryAlias = `viz${index}`;
          index += 1;
        });
      })
    );
    return sectionedCharts;
  }, []);
