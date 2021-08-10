import { Typography, useMediaQuery, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import OurCourseCard from "@/pesayetu/components/OurCourseCard";
import Section from "@/pesayetu/components/Section";

const OurCourses = ({ title, items, ...props }) => {
  let itemsData = [];
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  itemsData = isTablet ? items.slice(0, 2) : items;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}

        <Grid container className={classes.list}>
          {itemsData?.map((item) => {
            return (
              <Grid item lg={4} xs={12} md={6}>
                <OurCourseCard key={item.title} {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Section>
    </div>
  );
};

OurCourses.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

OurCourses.defaultProps = {
  title: undefined,
  items: undefined,
};

export default OurCourses;
