/* eslint-disable react/default-props-match-prop-types */

import {
  StayInTouch,
  QuickLinks,
  RichTypography,
  LogoButton,
  Copyright,
} from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

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
  /*  const { url: logoHref, image: logoImg } = logoProps;
  // eslint-disable-next-line no-console */
  /*  console.log(logoHref); */
  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classes.section,
        }}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12} container>
            <LogoButton
              component={Link}
              {...logoProps}
              classes={{
                root: classes.logoButton,
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={4}>
            <Grid
              container
              classes={{
                root: classes.allLinks,
              }}
            >
              <Grid item xs={12} lg={6}>
                <QuickLinks
                  linkComponent={Link}
                  {...quickLinksProp}
                  classes={{
                    root: classes.quickLinkRoot,
                    list: classes.quickList,
                    link: classes.quickLink,
                    title: classes.quickLinksTitle,
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <StayInTouch
                  title={title}
                  socialMedia={socialMedia}
                  classes={{
                    root: classes.stayInTouch,
                    icon: classes.stayInTouchIcon,
                    links: classes.stayInTouchLinks,
                    text: classes.stayInTouchText,
                    link: classes.stayInTouchLink,
                  }}
                />
              </Grid>
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
  socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
  quickLinks: PropTypes.PropTypes.shape({}),
  logoProps: PropTypes.shape({
    url: PropTypes.string,
    image: PropTypes.shape({}),
  }),
  aboutVariant: PropTypes.string,
  copyrightProps: PropTypes.shape({}),
};

Footer.defaultProps = {
  title: undefined,
  description: undefined,
  socialMedia: undefined,
  quickLinks: undefined,
  copyrightProps: undefined,
  logoProps: undefined,
  aboutVariant: "subtitle1",
};

export default Footer;
