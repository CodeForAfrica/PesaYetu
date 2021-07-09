/* eslint-disable react/default-props-match-prop-types */

import { StayInTouch, QuickLinks } from '@commons-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    background: '#2A2A2C',
    height: '400px',
  },
  stayInTouch: {
    display: 'flex',
    flexDirection: 'column',
  },
  stayInTouchText: {
    color: 'white',
  },
  section: {},
  stayInTouchTitle: {
    padding: '2rem 0rem',
    border: 'none',
    textAlign: 'left',
  },
  stayInTouchLinks: {
    '& > a': {
      borderRight: 'none',
    },
  },
  quickLinks: {},
  quickLink: {},
}));

function Footer({
  title,
  description,
  quickLinks: quickLinksProp,
  socialMedia,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <Grid className={classes.root}>
      <QuickLinks
        options={{
          link: {
            variant: 'h6',
          },
          title: {
            color: 'black',
            variant: 'h3',
          },
        }}
        {...quickLinksProp}
        classes={{ root: classes.quickLinks, link: classes.quickLink }}
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
  socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({})),
};

Footer.defaultProps = {
  title: undefined,
  socialMedia: undefined,
  description: undefined,
  quickLinks: undefined,
};

export default Footer;
