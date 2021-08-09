import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import AboutHeroBg from "@/pesayetu/assets/images/sat-mtKenya-2@2x.png";
import useStyles from "@/pesayetu/components/AboutHero/useStyles";
import Section from "@/pesayetu/components/Section";

function AboutHero({ title, tagline, intro, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={AboutHeroBg} layout="fill" />
      </div>
      <div className={classes.whiteBackground} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={9} md={9} lg={6} className={classes.textContainer}>
            <Typography className={classes.intro} variant="body2">
              {intro}
            </Typography>
            <RichTypography variant="h1" className={classes.title}>
              {title}
            </RichTypography>
            <Typography className={classes.tagline} variant="body1">
              {tagline}
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

AboutHero.propTypes = {
  tagline: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
};

AboutHero.defaultProps = {
  tagline: undefined,
  title: undefined,
  intro: undefined,
};

export default AboutHero;
