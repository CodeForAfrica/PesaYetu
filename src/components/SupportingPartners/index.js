import { LogoButton } from "@commons-ui/core";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    paddingTop: typography.pxToRem(56.69),
    background: palette.background.default,
  },
  section: {},
  title: {
    marginBottom: typography.pxToRem(49.38),
    textTransform: "uppercase",
  },
  gridContainer: {
    width: "100%",
    textAlign: "center",
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
  logoContainer: {
    marginBottom: typography.pxToRem(40),
    height: typography.pxToRem(116),
    width: typography.pxToRem(150),
    position: "relative",
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(100),
    },
  },
  logo: {
    mixBlendMode: "luminosity",
    opacity: 0.5,
  },
}));
function SupportingPartners({ title, items, ...props }) {
  const classes = useStyles(props);

  if (!items || !items.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {items.map(({ link, logo, name }) => (
            <Grid item key={link} className={classes.gridContainer}>
              <LogoButton
                component={Link}
                href={link}
                className={classes.logoContainer}
              >
                <Image
                  src={logo}
                  alt={name}
                  objectFit="contain"
                  layout="fill"
                  className={classes.logo}
                />
              </LogoButton>
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
}

SupportingPartners.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      logo: PropTypes.string,
      logoProps: PropTypes.shape({}),
      name: PropTypes.string,
    })
  ),
};

SupportingPartners.defaultProps = {
  title: undefined,
  items: undefined,
};
export default SupportingPartners;
