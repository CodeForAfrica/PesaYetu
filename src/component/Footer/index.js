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
    height: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {},
  stayInTouch: {
    display: 'flex',
    flexDirection: 'column',
  },
  stayInTouchText: {
    color: 'white',
  },
  stayInTouchTitle: {
    padding: '0rem',
    border: 'none',
    textAlign: 'left',
  },
  stayInTouchLinks: {
    order: 2,
    '& > a': {
      borderRight: 'none',
    },
  },
  quickList: {
    listStyle: 'none',
    color: 'white',
    padding: 0,
    paddingTop: '0rem',
    '& > li': {
      marginTop: '0rem',
    },
  },
  quickLinksTitle: {
    color: 'white',
  },
  description: {
    color: 'white',
  },
  copyright: {
    paddingTop: '3rem',
    textAlign: 'left',
    marginTop: '1.618125rem',
  },
  copyrightText: {
    color: 'white',
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
      <Grid item className={classes.about}>
        <Logo image={image} src={logoUrl} className={classes.img} />
        <RichTypography variant={aboutVariant} className={classes.description}>
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
      <QuickLinks
        linkComponent={Typography}
        options={{
          link: {
            variant: 'caption',
          },
          title: {
            color: 'white',
            variant: 'h6',
          },
        }}
        {...quickLinksProp}
        classes={{
          list: classes.quickList,
          title: classes.quickLinksTitle,
        }}
      />
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
