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

const useStyles = makeStyles(() => ({
  root: {
    background: '#2A2A2C',
    height: 'auto',
    display: 'flex',
    padding: '5rem',
    // margin: '4rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    margin: '0 auto',
  },
  allLinks: {},
  stayInTouch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  stayInTouchText: {
    color: 'white',
  },
  stayInTouchTitle: {
    padding: '0rem',
    border: 'none',
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  stayInTouchLinks: {
    margin: '1.5rem 0rem',
    '& > a': {
      borderRight: 'none',
    },
  },
  quickLink: {},
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
  },
  copyright: {
    textAlign: 'left',
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
    <Grid className={classes.root}>
      <Grid item>
        <Grid item className={classes.about}>
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
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        classes={{
          root: classes.allLinks,
        }}
      >
        <Grid item md={3}>
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
        <Grid item md={3}>
          <StayInTouch
            title={title}
            socialMedia={socialMedia}
            classes={{
              root: classes.stayInTouch,
              links: classes.stayInTouchLinks,
              text: classes.stayInTouchText,
              title: classes.stayInTouchTitle,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
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
