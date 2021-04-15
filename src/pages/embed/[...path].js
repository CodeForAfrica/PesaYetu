import React from 'react';
import { PropTypes } from 'prop-types';

import dynamic from 'next/dynamic';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChartFactory from '@hurumap-ui/charts/ChartFactory';
import useProfileLoader from '@hurumap-ui/core/useProfileLoader';

import useChartDefinitions from 'data/useChartDefinitions';
import withApollo from 'lib/withApollo';
import config from 'config';
import logo from 'assets/images/logos/pesacheck-white.png';

const ChartContainer = dynamic(
  () => import('@hurumap-ui/core/ChartContainer'),
  {
    ssr: false
  }
);

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '0.0537rem'
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily,
    opacity: 0.4,
    fontSize: '0.75rem'
  },
  chartsSection: {},
  sourceLink: {
    fontSize: theme.typography.caption.fontSize
  },
  background: {
    backgroundColor: '#fff'
  }
}));

function Embed({ error: errorProp, chartId, geoId, sectionId, ...props }) {
  const classes = useStyles(props);
  const sections = useChartDefinitions();
  let error = errorProp;
  let chart;
  if (!error) {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      chart = section.charts.find(c => c.id === chartId);
      if (!chart) {
        error = 404;
      }
    }
  }
  const { profiles, chartData } = useProfileLoader({
    geoId,
    visuals: chart?.visuals ?? [],
    populationTables: config.populationTables
  });

  if (error) {
    const message = error === 404 ? 'Not Found' : 'Invalid Request';
    return <Typography variant="h1">{message}</Typography>;
  }
  return (
    <Grid key={chart.id} item xs={12} alignItems="stretch">
      <ChartContainer
        key={chart.id}
        loading={chartData.isLoading}
        title={chart.title}
        subtitle={chart.subtitle}
        sourceLink={chart.sourceLink}
        sourceTitle={chart.sourceTitle}
        onClickEmbed={null}
        onClickShare={null}
        classes={{
          title: classes.title,
          subtitle: classes.subtitle,
          sourceLink: classes.sourceLink
        }}
        logo={logo}
      >
        {!chartData.isLoading &&
          chart.visuals.map(
            visual =>
              !profiles.isLoading && (
                <ChartFactory
                  disableShowMore
                  key={visual.id}
                  definition={visual}
                  profiles={profiles}
                  data={chartData.profileVisualsData[visual.queryAlias].nodes}
                  referenceData={(() => {
                    const temp =
                      chartData.profileVisualsData[
                        `${visual.queryAlias}Reference`
                      ];
                    return temp ? temp.nodes : [];
                  })()}
                  comparisonData={chartData.comparisonVisualsData}
                  toggleSize={false}
                />
              )
          )}
      </ChartContainer>
    </Grid>
  );
}

Embed.propTypes = {
  error: PropTypes.number,
  chartId: PropTypes.string,
  geoId: PropTypes.string,
  sectionId: PropTypes.string
};

Embed.defaultProps = {
  error: undefined,
  chartId: PropTypes.string,
  geoId: PropTypes.string,
  sectionId: PropTypes.string
};

Embed.getInitialProps = async ({ query: { path } }) => {
  const [geoId, sectionId, chartId] = path || [];
  if (!(geoId && sectionId && chartId)) {
    return {
      error: 400
    };
  }

  return {
    chartId,
    geoId,
    sectionId
  };
};

export default withApollo(Embed);
