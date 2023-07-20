import RichTypography from "@commons-ui/core/RichTypography";
import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import CarouselDots from "./CarouselDots";
import useStyles from "./useStyles";

import Content from "@/pesayetu/components/Card/Content";
import Section from "@/pesayetu/components/Section";

function CarouselItem({ activeStep, onClick, steps, story, ...props }) {
  const classes = useStyles(props);

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
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
                {...props}
                {...story}
                classes={{ description: classes.contentDescription }}
                className={classes.content}
              />
            </Grid>
          </Grid>
        </Section>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
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
          <Content
            key={story.slug}
            {...props}
            {...story}
            classes={{ description: classes.contentDescription }}
            className={classes.content}
          />
        </Section>
      </Box>
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
