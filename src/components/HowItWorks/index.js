import { Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import visualsImg from "@/pesayetu/assets/images/Component1236.svg";
import howItWorksBg from "@/pesayetu/assets/images/sat-mtKenya@2x.png";
import Player from "@/pesayetu/components/HowItWorks/Player";
import useStyles from "@/pesayetu/components/HowItWorks/useStyles";
import Section from "@/pesayetu/components/Section";

function HowItWorks({ title, ctaText, description, href, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Image src={howItWorksBg} layout="fill" className={classes.background} />
      <div className={classes.tabletWhite}>
        <Section classes={{ root: classes.section }}>
          <Grid container>
            <Grid item xs={12} md={7} lg={6}>
              <div className={classes.content}>
                <div className={classes.video}>
                  <Player {...props} />
                </div>
                <Typography className={classes.title} variant="h4">
                  {title}
                </Typography>
                <Typography variant="body2" className={classes.description}>
                  {description}
                </Typography>
                <Button href={href} variant="text">
                  {ctaText}
                </Button>
              </div>
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
