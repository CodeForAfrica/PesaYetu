import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { ChartContainer } from '@codeforafrica/hurumap-ui';
import { Grid } from '@material-ui/core';
import { ProfilePageHeader } from '../components/Header';

import Page from '../components/Page';
import ProfileRelease from '../components/ProfileReleases';
import useProfileLoader from '../data/useProfileLoader';
import useChartDefinitions from '../data/useChartDefinitions';
import slugify from '../utils/slugify';
import ChartFactory from '../components/ChartFactory';
import ChartsContainer from '../components/ChartsContainer';
import config from '../config';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.86px'
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily,
    opacity: 0.4,
    fontSize: '12px'
  },
  chartsSection: {
    display: 'none'
  },
  shareDropDownExploreButton: {
    color: 'black'
  },
  embedDropDownModal: {
    [theme.breakpoints.up('sm')]: {
      width: '30rem'
    }
  },
  sourceLink: {
    fontSize: theme.typography.caption.fontSize
  }
}));

function Profile({
  match: {
    params: { geoId, comparisonGeoId }
  }
}) {
  const head2head = Boolean(geoId && comparisonGeoId);
  const classes = useStyles();
  const [activeTab] = useState(
    window.location.hash.slice(1) ? window.location.hash.slice(1) : 'all'
  )[0];
  const sectionedCharts = useChartDefinitions();
  // Flatten all charts
  const charts = sectionedCharts
    .map(x => x.charts)
    .reduce((a, b) => a.concat(b));
  const [visuals] = useState(
    charts.map(x => x.visuals).reduce((a, b) => a.concat(b))
  );

  const { profiles, chartData } = useProfileLoader(
    geoId,
    comparisonGeoId,
    visuals
  );

  // get profiletabs
  const profileTabs = useMemo(
    () => [
      {
        title: 'All',
        slug: 'all'
      },
      ...sectionedCharts
        .map((section, i) => ({
          ...section,
          index: i
        }))
        // Filter empty sections
        .filter(
          section =>
            section.charts.filter(
              chart =>
                chartData.isLoading ||
                !chart.visuals.find(
                  ({ queryAlias }) =>
                    !chartData.profileVisualsData ||
                    chartData.profileVisualsData[queryAlias].nodes.length === 0
                )
            ).length !== 0
        )
        .map(section => ({
          title: section.sectionTitle,
          description: section.sectionDescription,
          slug: slugify(section.sectionTitle),
          sectionIndex: section.index,
          sectionId: section.id
        }))
    ],
    [chartData.isLoading, chartData.profileVisualsData, sectionedCharts]
  );
  /**
   * Victory renders take alot of time
   * causing a few seconds UI block which is bad UX.
   * This caches the components so they do not have to render again.
   */
  const chartComponents = useMemo(
    () =>
      profileTabs.slice(1).map(tab => (
        <Grid
          container
          spacing={2}
          id={tab.slug}
          key={tab.slug}
          className={classes.chartsSection}
        >
          {/* <ProfileSectionTitle loading={chartData.isLoading} tab={tab} /> */}
          {sectionedCharts[tab.sectionIndex].charts
            .filter(
              ({ visuals: v }) =>
                chartData.isLoading ||
                (chartData.profileVisualsData &&
                  /* data is not missing */
                  !v.find(
                    ({ queryAlias }) =>
                      chartData.profileVisualsData[queryAlias].nodes.length ===
                      0
                  ))
            )
            .map(chart => (
              <Grid
                key={chart.id}
                item
                xs={12}
                md={
                  parseFloat(chart.layout.split('/').reduce((a, b) => a / b)) *
                  12
                }
              >
                <ChartContainer
                  key={chart.id}
                  loading={chartData.isLoading}
                  title={chart.title}
                  subtitle={chart.subtitle}
                  sourceLink={chart.sourceLink}
                  sourceTitle={chart.sourceTitle}
                  classes={{
                    title: classes.title,
                    subtitle: classes.subtitle,
                    shareDropDown: {
                      explore: classes.shareDropDownExploreButton
                    },
                    embedDropDown: {
                      modal: {
                        root: classes.embedDropDownModal
                      }
                    },
                    sourceLink: classes.sourceLink
                  }}
                  embed={{
                    title: 'Embed code for this chart',
                    subtitle:
                      'Copy the code below, then paste into your own CMS or HTML. Embedded charts are responsive to your page width, and have been tested in Firefox, Safari, Chrome, and Edge.',
                    code: `<iframe src="${config.url}/embed/${geoId}/${tab.sectionId}/${chart.id}" />`
                  }}
                >
                  {!chartData.isLoading &&
                    chart.visuals.map(
                      visual =>
                        !profiles.isLoading &&
                        ChartFactory.build(
                          visual,
                          chartData.profileVisualsData,
                          chartData.comparisonVisualsData,
                          profiles
                        )
                    )}
                </ChartContainer>
              </Grid>
            ))}
        </Grid>
      )),
    [
      chartData.comparisonVisualsData,
      chartData.isLoading,
      chartData.profileVisualsData,
      classes.chartsSection,
      classes.embedDropDownModal,
      classes.shareDropDownExploreButton,
      classes.sourceLink,
      classes.subtitle,
      classes.title,
      geoId,
      profileTabs,
      profiles,
      sectionedCharts
    ]
  );

  // Show and hide sections
  useEffect(() => {
    if (activeTab === 'all') {
      profileTabs.slice(1).forEach(tab => {
        document.getElementById(tab.slug).style.display = 'flex';
      });
    } else {
      profileTabs.slice(1).forEach(tab => {
        if (tab.slug === activeTab) {
          document.getElementById(tab.slug).style.display = 'flex';
        } else {
          document.getElementById(tab.slug).style.display = 'none';
        }
      });
    }
  }, [activeTab, profileTabs]);

  return (
    <Page>
      <ProfilePageHeader
        profiles={profiles}
        head2head={head2head}
        geoId={geoId}
        comparisonGeoId={comparisonGeoId}
      />
      <ChartsContainer>{chartComponents}</ChartsContainer>
      <ProfileRelease />
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
