/* eslint-disable react/default-props-match-prop-types */

import { StayInTouch, QuickLinks, RichTypography } from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Copyright from '@/pesayetu/component/Copyright';
import Logo from '@/pesayetu/component/Logo';
import Section from '@/pesayetu/component/Section';

const useStyles = makeStyles(
  ({ breakpoints, widths, palette, typography }) => ({
    root: {
      background: palette.background.dark,
      height: 'auto',
      padding: `${typography.pxToRem(40)}`,
      [breakpoints.up('md')]: {
        padding: `${typography.pxToRem(79.81)} ${typography.pxToRem(139)}`,
      },
    },
    section: {
      padding: 0,
      minWidth: 0,
      boxSizing: 'border-box',
      justifyContent: 'center',
      width: typography.pxToRem(widths.values.sm),
      [breakpoints.up('lg')]: {
        padding: 0,
        margin: '0 auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: typography.pxToRem(widths.values.lg),
      },
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    allLinks: {
      margin: '0 auto',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: typography.pxToRem(44.19),
      [breakpoints.up('md')]: {
        marginTop: typography.pxToRem(88.39),
      },
      [breakpoints.up('lg')]: {
        marginTop: typography.pxToRem(176),
      },
    },
    stayInTouch: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      letterspacing: typography.pxToRem(0.7),
      [breakpoints.up('lg')]: {
        alignItems: 'flex-start',
      },
    },
    stayInTouchText: {
      color: palette.background.main,
      fontSize: typography.subtitle1.fontSize,
      fontWeight: 'bold',
      padding: `${typography.pxToRem(10)} ${typography.pxToRem(8)}`,
    },
    stayInTouchLink: {
      padding: `0 ${typography.pxToRem(12)}`,
    },
    stayInTouchLinks: {
      marginTop: `${typography.pxToRem(24)}`,
      justifyContent: 'center',
      '& > a': {
        borderRight: 'none',
      },
    },
    quickLinkRoot: {
      textAlign: 'center',
      padding: `${typography.pxToRem(32)} 0 `,
      [breakpoints.up('lg')]: {
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
      [breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    copyright: {
      textAlign: 'center',
      [breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    copyrightText: {
      color: palette.background.main,
    },
    text: {
      textAlign: 'center',
      [breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
  })
);

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
          <Grid item xs={12} lg={6}>
            <Logo
              {...logoProps}
              classes={{ image: classes.image, text: classes.text }}
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
            lg={6}
            container
            direction="column"
            justify="flex-end"
            classes={{
              root: classes.allLinks,
            }}
          >
            <Grid item xs={12} lg={4}>
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
            <Grid item xs={12} lg={4}>
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
  quickLinks: PropTypes.PropTypes.shape({}),
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
