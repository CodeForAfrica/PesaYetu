import { Button, Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";

import visualsImg from "@/pesayetu/assets/images/Component1236.svg";
import howItWorksBg from "@/pesayetu/assets/images/sat-mtKenya-1_alt@2400x.jpg";
import Player from "@/pesayetu/components/HowItWorks/Player";
import useStyles from "@/pesayetu/components/HowItWorks/useStyles";
import Image from "@/pesayetu/components/Image";
import Section from "@/pesayetu/components/Section";

function HowItWorks({ title, ctaText, description, href, ...props }) {
  const classes = useStyles(props);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={howItWorksBg} layout="fill" unoptimized />
      </div>
      <Hidden lgUp smDown implementation="css">
        <div className={classes.tabletWhite} />
      </Hidden>
      <Section classes={{ root: classes.section }}>
        <Grid container direction={isMobile ? "column-reverse" : "row"}>
          <Grid item xs={12} md={7} lg={6} className={classes.content}>
            <div className={classes.video}>
              <Player {...props} />
            </div>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <Typography variant="h6" className={classes.description}>
              {description}
            </Typography>
            <Button href={href} variant="text">
              {ctaText}
            </Button>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={12} md={5} className={classes.visualsGrid}>
            <div className={classes.visuals}>
              <Image src={visualsImg} layout="fill" objectFit="contain" />
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

HowItWorks.propTypes = {
  ctaText: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};

HowItWorks.defaultProps = {
  ctaText: undefined,
  description: undefined,
  href: undefined,
  title: undefined,
};

export default HowItWorks;
