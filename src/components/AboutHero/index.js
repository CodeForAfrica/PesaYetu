import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import aboutHeroBg from "@/pesayetu/assets/images/sat-mtKenya-2@2x.jpg";
import useStyles from "@/pesayetu/components/AboutHero/useStyles";
import Header from "@/pesayetu/components/Header";
import Image from "@/pesayetu/components/Image";
import Section from "@/pesayetu/components/Section";

function AboutHero({ overline, subtitle, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={aboutHeroBg} layout="fill" />
      </div>
      <div className={classes.whiteBackground} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={9} md={9} lg={6} className={classes.textContainer}>
            <Header
              overline={overline}
              subtitle={subtitle}
              classes={{
                overline: classes.overline,
                subtitle: classes.subtitle,
                title: classes.title,
              }}
            >
              {title}
            </Header>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

AboutHero.propTypes = {
  overline: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

AboutHero.defaultProps = {
  overline: undefined,
  subtitle: undefined,
  title: undefined,
};

export default AboutHero;
