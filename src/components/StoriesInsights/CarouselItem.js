/* eslint-disable no-param-reassign */
import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import CarouselDots from "./CarouselDots";
import useStyles from "./useStyles";

import Content from "@/pesayetu/components/Card/Content";
import Section from "@/pesayetu/components/Section";

function CarouselItem({ activeStep, onClick, steps, story, ...props }) {
  const classes = useStyles(props);

  useEffect(() => {
    const frames = document.querySelectorAll("iframe");
    frames?.forEach((frame) => {
      frame.onload = () => {
        frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
      };
    });
  }, []);

  return (
    <>
      <Hidden mdDown implementation="css">
        <Section className={classes.section}>
          <Grid key={story.slug} container justifyContent="space-between">
            <Grid item xs={12} lg={8} container direction="row" wrap="nowrap">
              <div className={classes.mediaContainer}>
                <RichTypography className={classes.media}>
                  {story.chart}
                </RichTypography>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} container direction="column">
              <CarouselDots
                key={activeStep}
                activeStep={activeStep}
                onClick={onClick}
                steps={steps}
              />
              <Content
                key={story.slug}
                {...story}
                className={classes.content}
              />
            </Grid>
          </Grid>
        </Section>
      </Hidden>
      <Hidden lgUp implementation="css">
        <div className={classes.mediaContainer}>
          <Section className={classes.section}>
            <RichTypography className={classes.media}>
              {story.chart}
            </RichTypography>
          </Section>
        </div>
        <Section className={classes.section}>
          <CarouselDots
            key={activeStep}
            activeStep={activeStep}
            onClick={onClick}
            steps={steps}
          />
          <Content key={story.slug} {...story} className={classes.content} />
        </Section>
      </Hidden>
    </>
  );
}

CarouselItem.propTypes = {
  activeStep: PropTypes.string,
  onClick: PropTypes.func,
  steps: PropTypes.number,
  story: PropTypes.shape({
    slug: PropTypes.string,
    chart: PropTypes.string,
  }),
};

CarouselItem.defaultProps = {
  activeStep: PropTypes.string,
  onClick: undefined,
  steps: undefined,
  story: undefined,
};

export default CarouselItem;
