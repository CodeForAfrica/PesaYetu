/* eslint-disable react/default-props-match-prop-types */

import {
  Logo,
  StayInTouch,
  QuickLinks,
  RichTypography,
} from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Copyright from '@/pesayetu/component/Copyright';
import Section from '@/pesayetu/component/Section';

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    background: palette.background.dark,
    height: 'auto',
    padding: typography.pxToRem(80),
  },
  footer: {
    justifyContent: 'center',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  section: {},
  allLinks: {
    margin: '0 auto',
    [breakpoints.up('md')]: {
      marginTop: typography.pxToRem(176),
    },
  },
  stayInTouch: {
    display: 'flex',
    letterspacing: typography.pxToRem(0.7),
    [breakpoints.up('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  stayInTouchText: {
    color: palette.background.main,
    fontSize: typography.subtitle1.fontSize,
    fontWeight: 'bold',
    padding: `0 ${typography.pxToRem(8)}`,
  },
  stayInTouchLinks: {
    margin: `${typography.pxToRem(24)} 0 `,
    justifyContent: 'center',
    '& > a': {
      borderRight: 'none',
    },
  },
  quickLinkRoot: {
    textAlign: 'center',
    padding: `${typography.pxToRem(32)} 0 `,
    [breakpoints.up('md')]: {
      textAlign: 'inherit',
      padding: 0,
    },
  },
  quickList: {
    listStyle: 'none',
    color: palette.background.main,
    padding: 0,
    letterspacing: typography.pxToRem(0.7),
    '& > li': {
      marginTop: typography.pxToRem(16),
    },
  },
  quickLink: {
    fontSize: typography.subtitle1.fontSize,
    color: palette.background.main,
    fontWeight: 'normal',
    '&:hover': {
      color: palette.primary.light,
    },
  },
  quickLinksTitle: {
    color: palette.background.main,
    fontSize: typography.subtitle1.fontSize,
    fontWeight: 'bold',
  },
  description: {
    color: palette.background.main,
    padding: `${typography.pxToRem(32)} 0 `,
    fontSize: typography.subtitle1.fontSize,
    textAlign: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  copyright: {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  copyrightText: {
    color: palette.background.main,
  },
  img: {
    padding: typography.pxToRem(32),
  },
  logoText: {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
}));

function Footer({
  title,
  image,
  logoUrl,
  aboutVariant,
  description,
  copyrightProps,
  quickLinks: quickLinksProp,
  socialMedia,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classes.section,
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.footer}
        >
          <Grid item xs={12} md={6}>
            <Logo
              image={image}
              src={logoUrl}
              classes={{
                img: classes.img,
                text: classes.logoText,
              }}
            />
            <RichTypography
              variant={aboutVariant}
              className={classes.description}
            >
              {description}
            </RichTypography>
            <Copyright
              {...copyrightProps}
              classes={{
                root: classes.copyright,
                text: classes.copyrightText,
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
                {...quickLinksProp}
                classes={{
                  root: classes.quickLinkRoot,
                  list: classes.quickList,
                  link: classes.quickLink,
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
  copyrightProps: PropTypes.shape({}),
};

Footer.defaultProps = {
  title: undefined,
  description: undefined,
  socialMedia: undefined,
  quickLinks: undefined,
  copyrightProps: undefined,
  aboutVariant: 'subtitle1',
};

export default Footer;
