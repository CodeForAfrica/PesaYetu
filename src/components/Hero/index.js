import { Grid, Hidden, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useState } from "react";

import heroBg from "@/pesayetu/assets/images/bg-map-white.jpg";
import DropdownSearch from "@/pesayetu/components/DropdownSearch";
import Header from "@/pesayetu/components/Header";
import Image from "@/pesayetu/components/Image";
import Section from "@/pesayetu/components/Section";

const Map = dynamic(() => import("./Map"), { ssr: false });

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    position: "relative",
  },
  background: {
    position: "absolute",
    zIndex: -1,
    height: typography.pxToRem(468),
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  comment: {
    fontSize: typography.pxToRem(11),
    color: "#707070",
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(40),
    },
  },
  section: {
    paddingBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(22),
    },
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(64),
    },
  },
  slabel: {
    marginBottom: typography.pxToRem(10),
  },
  subtitle: {
    margin: `${typography.pxToRem(20)} 0`,
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(335),
    },
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(40)} 0`,
      maxWidth: typography.pxToRem(474),
    },
  },
  title: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(46),
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(65),
    },
  },
  dropdownTitle: {
    color: palette.text.hint,
  },
  geoName: {
    lineHeight: 23 / 18,
    lineSpacing: typography.pxToRem(0.9),
    fontWeight: "normal",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Hero({ comment, title, subtitle, searchLabel, boundary, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [hoverGeo, setHoverGeo] = useState(null);

  const zoom = isUpLg ? 6 : 5.25;
  const counties = boundary?.features?.map(({ properties }) => properties);
  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image src={heroBg} layout="fill" unoptimized />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item lg={1} />
          <Grid item xs={12} md={7} lg={6}>
            <Header
              subtitle={subtitle}
              classes={{ title: classes.title, subtitle: classes.subtitle }}
            >
              {title}
            </Header>
            <DropdownSearch
              label={searchLabel}
              counties={counties}
              classes={{
                label: classes.dropdownTitle,
              }}
              {...props}
            />
            {comment && (
              <Typography variant="subtitle1" className={classes.comment}>
                {comment}
              </Typography>
            )}
          </Grid>
          <Hidden smDown implementation="css">
            <Grid item md={5} lg={5}>
              <Map
                center={[0.3051933453207569, 37.908818734483155]}
                zoom={zoom}
                tileLayer={{
                  url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
                }}
                boundary={boundary}
                setHoverGeo={setHoverGeo}
                {...props}
              />
              {hoverGeo && (
                <Typography variant="h6" className={classes.geoName}>
                  {hoverGeo}
                </Typography>
              )}
            </Grid>
          </Hidden>
        </Grid>
      </Section>
    </div>
  );
}

Hero.propTypes = {
  comment: PropTypes.string,
  subtitle: PropTypes.string,
  searchLabel: PropTypes.string,
  title: PropTypes.string,
  boundary: PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Hero.defaultProps = {
  comment: undefined,
  subtitle: undefined,
  searchLabel: undefined,
  title: undefined,
  boundary: undefined,
};

export default Hero;
