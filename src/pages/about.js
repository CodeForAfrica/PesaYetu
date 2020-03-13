import React from 'react';
import Head from 'next/head';

import { makeStyles, Typography } from '@material-ui/core';

import A from '@codeforafrica/hurumap-ui/core/A';

import Page from 'components/Page';
import Section from 'components/Section';
import { TitlePageHeader } from 'components/Header';

const useStyles = makeStyles(() => ({
  section: {
    paddingBottom: 0
  },
  p: {
    paddingBottom: '1rem'
  }
}));

function About({ ...props }) {
  const classes = useStyles(props);

  return (
    <>
      <Head>
        <title>About - PesaYetu</title>
      </Head>
      <Page>
        <TitlePageHeader>
          About
          <br /> PesaYetu
        </TitlePageHeader>
        <Section
          title="What's the data behind the story?"
          subtitle=""
          classes={{ root: classes.section }}
        >
          <Typography className={classes.p}>
            One essential tool that Kenyan citizens need to engage the
            government is information on how money collected from taxpayers is
            allocated. With this information, we can ask what our elected
            officials are doing with it, and from there the discussion can
            proceed towards how money is spent in the future to better our
            lives.
          </Typography>
          <Typography className={classes.p}>
            The 47 county governments of Kenya are in charge of overseeing
            functions such as the provision of healthcare, pre-primary education
            and management of local roads, which were previously the
            responsibility of Kenya’s national government. In order to do this,
            the national government allocates a share of national revenues using
            a set formula. This information is contained in copies of the Kenya
            Gazette, breaking down allocations per year for every financial year
            since 2013/14.
          </Typography>
          <Typography className={classes.p}>
            This concept is already being used to visualize revenues and other
            budget information in South Africa on Municipal Money, a web-based
            tool designed to inform citizens on their local authority’s
            financial performance and allows comparisons between municipalities.
          </Typography>
        </Section>
        <Section title="Re-use manifesto" subtitle="">
          <Typography className={classes.p}>
            Code for Africa and its partners hate seeing civil society or anyone
            else being duped into wasting money unnecessarily on inappropriate
            technology or predatory consultancies.
          </Typography>
          <Typography className={classes.p}>
            There are thousands of civic apps and other technology solutions
            already available for reuse, free-of-charge, on communities such as
            GitHub.
          </Typography>
          <Typography className={classes.p}>
            Code for Africa is committed to help grow these resources and the
            global civic technology community, by making its code and data
            freely available. It is also committed to helping fellow African
            citizen agency organisations re-purpose and customise existing civic
            code as cost-effectively as possible.
          </Typography>
          <Typography className={classes.p}>
            The code for PesaYetu is available{' '}
            <A href="https://github.com/CodeForAfrica/PesaYetu/">here</A>.
          </Typography>
        </Section>
      </Page>
    </>
  );
}

export default About;
