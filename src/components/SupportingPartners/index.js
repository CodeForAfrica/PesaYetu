import { A } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    paddingTop: typography.pxToRem(56.69),
    paddingBottom: typography.pxToRem(80),
    background: palette.grey.light,
  },
  section: {},
  title: {
    marginBottom: typography.pxToRem(49.38),
    textTransform: "uppercase",
  },
  logoContainer: {},
  link: {},
  logo: {
    margin: "0",
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
        <Grid container spacing={2} className={classes.logoContainer}>
          {items.map(({ link, logo, logoProps, name }) => (
            <Grid item key={link}>
              <A className={classes.link} href={link}>
                <Image
                  className={classes.logo}
                  objectFit="contain"
                  src={logo}
                  alt={name}
                  {...logoProps}
                />
              </A>
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
