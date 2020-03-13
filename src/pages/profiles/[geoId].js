import React, { useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Grid } from '@material-ui/core';
import { ProfilePageHeader } from 'components/Header';

import Page from 'components/Page';
import ProfileRelease from 'components/ProfileReleases';
import useProfileLoader from '@codeforafrica/hurumap-ui/factory/useProfileLoader';
import ChartFactory from '@codeforafrica/hurumap-ui/factory/ChartFactory';

import useChartDefinitions from 'data/useChartDefinitions';
import slugify from 'utils/slugify';
import ChartsContainer from 'components/ChartsContainer';
import ProfileSectionTitle from 'components/ProfileSectionTitle';
import ProfileTabs from 'components/ProfileTabs';

import withApollo from 'lib/withApollo';
import config from 'config';
import logo from 'assets/images/logos/pesacheck-white.png';

const ChartContainer = dynamic(
  () => import('@codeforafrica/hurumap-ui/core/ChartContainer'),
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
  }
}));

function Profile(props) {
  const router = useRouter();
  const { geoId, comparisonGeoId } = router.query;
  const head2head = Boolean(geoId && comparisonGeoId);
  const classes = useStyles(props);

  const [activeTab, setActiveTab] = useState('all');
  useEffect(() => {
    const tab = window.location.hash.slice(1)
      ? window.location.hash.slice(1)
      : 'all';
    setActiveTab(tab);
  }, []);

  const sectionedCharts = useChartDefinitions();
  // Flatten all charts
  const charts = useMemo(
    () => sectionedCharts.map(x => x.charts).reduce((a, b) => a.concat(b)),
    [sectionedCharts]
  );

  const [visuals] = useMemo(
    () => charts.map(x => x.visuals).reduce((a, b) => a.concat(b)),
    [charts]
  );

  console.log(visuals);

  const { profiles, chartData } = useProfileLoader({
    geoId,
    comparisonGeoId,
    visuals,
    populationTables: ['allPopulationSex2019S']
  });

  console.log(profiles);

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
  const {
    existing: existingSectionedCharts,
    components: chartComponents
  } = useMemo(() => {
    const existing = sectionedCharts.map(section =>
      section.charts.filter(
        ({ visuals: v }) =>
          chartData.isLoading ||
          (chartData.profileVisualsData &&
            /* data is not missing */
            !v.find(
              ({ queryAlias }) =>
                chartData.profileVisualsData[queryAlias].nodes.length === 0
            ))
      )
    );
    const components = profileTabs.slice(1).map(tab => (
      <Grid
        container
        spacing={2}
        id={tab.slug}
        key={tab.slug}
        className={classes.chartsSection}
      >
        <ProfileSectionTitle loading={chartData.isLoading} tab={tab} />
        {existing[tab.sectionIndex].map(chart => (
          <Grid
            key={chart.id}
            item
            xs={12}
            md={
              parseFloat(chart.layout.split('/').reduce((a, b) => a / b)) * 12
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
                sourceLink: classes.sourceLink
              }}
              embed={{
                title: 'Embed code for this chart',
                subtitle:
                  'Copy the code below, then paste into your own CMS or HTML. Embedded charts are responsive to your page width, and have been tested in Firefox, Safari, Chrome, and Edge.',
                code: `<iframe src="${config.url}/embed/${geoId}/${tab.sectionId}/${chart.id}" />`
              }}
              logo={logo}
            >
              {!chartData.isLoading &&
                chart.visuals.map(
                  visual =>
                    !profiles.isLoading && (
                      <ChartFactory
                        key={visual.id}
                        definition={visual}
                        profiles={profiles}
                        data={
                          chartData.profileVisualsData[visual.queryAlias].nodes
                        }
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
        ))}
      </Grid>
    ));
    return { existing, components };
  }, [
    chartData.comparisonVisualsData,
    chartData.isLoading,
    chartData.profileVisualsData,
    classes.chartsSection,
    classes.sourceLink,
    classes.subtitle,
    classes.title,
    geoId,
    profileTabs,
    profiles,
    sectionedCharts
  ]);

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

  const pageTitle = () => {
    const profileName = profiles && profiles.profile && profiles.profile.name;
    const profileTitle = profileName ? ` - ${profileName} - ` : ' - ';
    return `Data${profileTitle}Pesayetu`;
  };

  return (
    <>
      <Head>
        <title>{pageTitle()}</title>
        <link
          rel="preconnect"
          href="https://mapit.hurumap.org/graphql"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://graphql.hurumap.org/graphql"
          crossOrigin="anonymous"
        />
      </Head>
      <Page>
        <ProfilePageHeader
          profiles={profiles}
          head2head={head2head}
          geoId={geoId}
          comparisonGeoId={comparisonGeoId}
        />
        <ProfileTabs
          loading={chartData.isLoading}
          activeTab={activeTab}
          switchToTab={setActiveTab}
          tabs={profileTabs}
        />
        <ChartsContainer>{chartComponents}</ChartsContainer>
        <ProfileRelease sectionedCharts={existingSectionedCharts} />
      </Page>
    </>
  );
}

export default withApollo(Profile);
