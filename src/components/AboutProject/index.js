import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import AboutProjectBg from "@/pesayetu/assets/images/sat-mtKenya-2@2x.png";
import useStyles from "@/pesayetu/components/AboutProject/useStyles";
import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

function AboutProject({ subtitle, title, href, ctaText, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={AboutProjectBg} layout="fill" />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={9} lg={6} className={classes.textContainer}>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              {subtitle}
            </Typography>
            <Button
              className={classes.button}
              component={Link}
              href={href}
              variant="text"
            >
              {ctaText}
            </Button>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

AboutProject.propTypes = {
  ctaText: PropTypes.string,
  href: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

AboutProject.defaultProps = {
  ctaText: undefined,
  href: undefined,
  subtitle: undefined,
  title: undefined,
};

export default AboutProject;
