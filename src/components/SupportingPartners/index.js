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
  },
  logoContainer: {},
  link: {},
  logo: {
    margin: "0",
  },
}));
function SupportingPartners({ title, items, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          className={classes.logoContainer}
        >
          {items?.map(({ link, logo, name }) => (
            <Grid item key={link}>
              <A className={classes.link} href={link}>
                <Image
                  className={classes.logo}
                  objectFit="contain"
                  width={138}
                  height={64}
                  src={logo}
                  alt={name}
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
      name: PropTypes.string,
    })
  ),
};

SupportingPartners.defaultProps = {
  title: undefined,
  items: undefined,
};
export default SupportingPartners;
