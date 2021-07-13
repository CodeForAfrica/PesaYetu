/* eslint-disable react/default-props-match-prop-types */

import { StayInTouch, QuickLinks, RichTypography } from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Copyright from '@/pesayetu/component/Copyright';
import Logo from '@/pesayetu/component/Logo';
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
  stayInTouchLink: {
    [breakpoints.up('md')]: {
      padding: `0 ${typography.pxToRem(5.52)}`,
    },
    [breakpoints.up('lg')]: {
      padding: `0 ${typography.pxToRem(10)}`,
    },
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
  logoProps,
  aboutVariant,
  description,
  copyrightProps,
  quickLinks: quickLinksProp,
  socialMedia,
  ...props
}) {
  const classes = useStyles(props);
  // eslint-disable-next-line no-console
  console.log(quickLinksProp);
  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classes.footer,
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.footer}
        >
          <Grid item xs={12} md={6}>
            <Logo {...logoProps} classes={{ image: classes.image }} />
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
            <Grid item xs={12} md={6} lg={4}>
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
            <Grid item xs={12} md={5} lg={4}>
              <StayInTouch
                title={title}
                socialMedia={socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  links: classes.stayInTouchLinks,
                  text: classes.stayInTouchText,
                  link: classes.stayInTouchLink,
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
  }),
  socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({})),
  logoProps: PropTypes.shape({}),
  aboutVariant: PropTypes.string,
  copyrightProps: PropTypes.shape({}),
};

Footer.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  socialMedia: undefined,
  quickLinks: undefined,
  copyrightProps: undefined,
  logoProps: undefined,
  aboutVariant: 'subtitle1',
};

export default Footer;
