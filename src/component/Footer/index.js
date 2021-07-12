/* eslint-disable react/default-props-match-prop-types */

import {
  Logo,
  StayInTouch,
  QuickLinks,
  RichTypography,
  Copyright,
} from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Section from '@/pesayetu/component/Section';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: '#2A2A2C',
    height: 'auto',
    padding: '5rem',
  },
  footer: {
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  section: {
    margin: '0 auto',
    [breakpoints.up('md')]: {
      width: '85%',
    },
  },
  allLinks: {
    margin: '0 auto',
    [breakpoints.up('md')]: {
      marginTop: '10rem',
    },
  },
  stayInTouch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    letterspacing: '0.7px',
  },
  stayInTouchText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: '0rem 0.5rem',
  },
  stayInTouchLinks: {
    margin: '1.5rem 0rem',
    '& > a': {
      borderRight: 'none',
    },
  },
  quickLink: {
    textAlign: 'center',
    padding: '2rem 0rem',
    [breakpoints.up('md')]: {
      textAlign: 'inherit',
      padding: '0rem',
    },
  },
  quickList: {
    listStyle: 'none',
    color: 'white',
    padding: 0,
    letterSpacing: '0.7px',
    paddingTop: '0rem',
    '& > li': {
      marginTop: '1rem',
    },
  },
  quickLinksTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    padding: '2rem 0rem',
    fontSize: 14,
    textAlign: 'left',
  },
  copyright: {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  copyrightText: {
    color: 'white',
  },
  img: {
    padding: '2rem ',
  },
}));

function Footer({
  title,
  image,
  logoUrl,
  aboutVariant,
  description,
  quickLinks: quickLinksProp,
  socialMedia,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section
        classes={{
          section: classes.section,
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.footer}
        >
          <Grid item xs={12} md={6}>
            <Logo image={image} src={logoUrl} className={classes.img} />
            <RichTypography
              variant={aboutVariant}
              className={classes.description}
            >
              {description}
            </RichTypography>
            <Copyright
              {...props}
              classes={{
                root: classes.copyright,
                copyrightText: classes.copyrightText,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="row"
            justify="flex-end"
            classes={{
              root: classes.allLinks,
            }}
          >
            <Grid item xs={12} md={4}>
              <QuickLinks
                linkComponent={Typography}
                options={{
                  link: {
                    variant: 'body2',
                  },
                  title: {
                    color: 'white',
                    variant: 'body2',
                  },
                }}
                {...quickLinksProp}
                classes={{
                  root: classes.quickLink,
                  list: classes.quickList,
                  title: classes.quickLinksTitle,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StayInTouch
                title={title}
                socialMedia={socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  links: classes.stayInTouchLinks,
                  text: classes.stayInTouchText,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({})),
  logoUrl: PropTypes.string.isRequired,
  aboutVariant: PropTypes.string,
};

Footer.defaultProps = {
  title: undefined,
  description: undefined,
  socialMedia: undefined,
  quickLinks: undefined,
  aboutVariant: 'body2',
};

export default Footer;
