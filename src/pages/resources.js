import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import config from 'config';
import { getOpenAfricaData, getSourceAfricaData } from 'lib/api';

import About from 'components/About';
import ArrowButton from 'components/ArrowButton';
import DataCard from 'components/Card/Data';
import DocumentCard from 'components/Card/Document';
import Page from 'components/Page';
import Section from 'components/Section';
import { TitlePageHeader } from 'components/Header';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '3rem'
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '2rem'
    }
  },
  sectionContent: {
    [theme.breakpoints.up('md')]: {
      marginTop: '5.75rem'
    }
  },
  sectionData: {
    backgroundColor: '#EDEDEE'
  }
}));

function Resources(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [packages, setPackages] = useState([]);
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    function scrollSectionIntoView() {
      if (window.location.hash.slice(1)) {
        document.getElementById(window.location.hash.slice(1)).scrollIntoView();
      }
    }
    getOpenAfricaData().then(({ data: { result } }) => {
      setPackages(result);
      scrollSectionIntoView();
    });

    getSourceAfricaData().then(({ data }) => {
      setDocuments(data.documents);
      scrollSectionIntoView();
    });
  }, []);
  const titleVariant = useMediaQuery(theme.breakpoints.up('md')) ? 'h2' : 'h3';

  return (
    <>
      <Head>
        <title>Resources - PesaYetu</title>
      </Head>
      <Page>
        <TitlePageHeader>
          Datasets
          <br /> and Documents
        </TitlePageHeader>
        <Section
          classes={{
            content: classes.sectionContent,
            subtitle: classes.sectionSubtitle
          }}
          id="documents"
          title="Documents"
          titleVariant={titleVariant}
          subtitle="Powered by sourceAFRICA.net"
        >
          <Typography variant="body2">
            Data for PesaYetu is aggregated from various authoritative sources.
            Below is a list of documents used for the project, which is hosted
            on sourceAFRICA.net
          </Typography>
          <Grid container spacing={2} className={classes.content}>
            {documents.map(document => (
              <Grid item xs={12} md={6} key={document.title}>
                <DocumentCard
                  link={document.canonical_url}
                  title={document.title}
                  description={document.description}
                  preview={
                    <img
                      alt=""
                      src={document.resources.thumbnail}
                      width="100%"
                    />
                  }
                />
              </Grid>
            ))}
          </Grid>
          <ArrowButton
            href="https://dc.sourceafrica.net/public/search/Project:%20PesaYetu"
            rel="noopener noreferrer"
            role="link"
            target="_blank"
          >
            View all
          </ArrowButton>
        </Section>
        <Section
          classes={{
            root: classes.sectionData,
            content: classes.sectionContent,
            subtitle: classes.sectionSubtitle
          }}
          id="data"
          title="Data"
          titleVariant={titleVariant}
          subtitle="Powered by openAFRICA.net"
        >
          <Typography variant="body2">
            Data for PesaYetu is aggregated from various authoritative sources.
            Below is a list of datasets used for the project, which is hosted on
            openAFRICA.net
          </Typography>
          <Grid container justify="space-between" className={classes.content}>
            {packages.map(p => (
              <DataCard
                key={p.title}
                dataLink={`https://openafrica.net/dataset/${p.name}`}
                description={p.notes}
                title={p.title}
                organization={p.organization}
              />
            ))}
          </Grid>
          <ArrowButton
            target="_blank"
            role="link"
            href="https://africaopendata.org/group/pesayetu"
          >
            View all
          </ArrowButton>
        </Section>
        <About about={config.about} />
      </Page>
    </>
  );
}

export default Resources;
