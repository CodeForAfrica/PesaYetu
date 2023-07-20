import { Grid, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import aboutProjectBg from "@/pesayetu/assets/images/sat-mtKenya-2@2x.jpg";
import useStyles from "@/pesayetu/components/AboutProject/useStyles";
import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";
import useProgressiveImage from "@/pesayetu/utils/useProgressiveImage";

function AboutProject({ subtitle, title, href, ctaText, ...props }) {
  const image = useProgressiveImage(aboutProjectBg.src);
  const classes = useStyles({ image, ...props });

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={9} lg={6} className={classes.content}>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              {subtitle}
            </Typography>
            <Button component={Link} href={href} variant="text">
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
