/* eslint-disable react/default-props-match-prop-types */

import { StayInTouch, QuickLinks, RichTypography } from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

import Copyright from '@/pesayetu/component/Copyright';
import Logo from '@/pesayetu/component/Logo';
import Section from '@/pesayetu/component/Section';

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
