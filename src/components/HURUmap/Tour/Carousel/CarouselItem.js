import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Tooltipicon from "@/pesayetu/assets/icons/ToolTipIcon";
import Section from "@/pesayetu/components/Section";

function CarouselItem({ activeStep, description, image, ...props }) {
  const classes = useStyles(props);

  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={6} container>
          <Grid item>
            <Tooltipicon number={activeStep} />
          </Grid>
          <Grid item>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={image} />
        </Grid>
      </Grid>
    </Section>
  );
}

CarouselItem.propTypes = {
  activeStep: PropTypes.string,
  description: PropTypes.func,
  image: PropTypes.number,
};

CarouselItem.defaultProps = {
  activeStep: PropTypes.string,
  description: undefined,
  image: undefined,
};

export default CarouselItem;
