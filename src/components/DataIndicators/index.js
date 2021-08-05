import { Grid, Typography, Grow } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Group4646 from "@/pesayetu/assets/Group 4646.png";
import Group4656 from "@/pesayetu/assets/Group 4656.png";
import Group4657 from "@/pesayetu/assets/Group 4657.png";
import Group4658 from "@/pesayetu/assets/Group 4658.png";
import Group4659 from "@/pesayetu/assets/Group 4659.png";
// import { dataIndicator } from "@/pesayetu/config";

const DataIndicators = ({ title, items, ...props }) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles({ checked, ...props });

  // const indicatorMap = {
  //   Overview:
  //     "This includes general county data. Topics include administrative and political units, population size and composition, land use, tourism and wildlife, industry and trade, finance, and education.",
  //   Revenue:
  //     "This looks at the review of the implementation of the previous County Integrated Development Plan for the period of 2014 to 2017. Datasets include county revenue streams and expenditure analysis.",
  //   Development:
  //     "This highlights the county development priorities and strategies. It looks at the programmes and associated budgets the county has proposed for the period 2018 to 2022.",
  //   Implement:
  //     "This showcases the implementation framework for the county as published in the County Integrated Development Plan. It covers the resource mobilisation framework on the proposed and predicted revenue and expenditure.",
  //   Summary:
  //     "The summary takes a look at the monitoring and evaluation framework as published in the County Integrated Development Plan. This includes the outcome indicators for each of the sector plans proposed.",
  // };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container className={classes.indicatorsContainer}>
          <Typography className={classes.sectionTitle}>
            Data Indicators
          </Typography>
          <div className={classes.iconContainer}>
            <Grid item className={classes.item}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={Group4657}
                  layout="fill"
                  onClick={handleChange}
                />
              </div>
              <Typography className={classes.text}>Overview</Typography>
            </Grid>
            <Grid item className={classes.item}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={Group4656}
                  layout="fill"
                />
              </div>
              <Typography className={classes.text}>Revenue</Typography>
            </Grid>
            <Grid item className={classes.item}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={Group4646}
                  layout="fill"
                />
              </div>
              <Typography className={classes.text}>Development</Typography>
            </Grid>
            <Grid item className={classes.item}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={Group4659}
                  layout="fill"
                />
              </div>
              <Typography className={classes.text}>Implement</Typography>
            </Grid>
            <Grid item className={classes.item}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={Group4658}
                  layout="fill"
                />
              </div>
              <Typography className={classes.text}>Summary</Typography>
            </Grid>
          </div>
        </Grid>
        <Grow
          in={checked}
          onClick={handleChange}
          className={classes.transition}
        >
          <div className={classes.descriptionSection}>
            <Typography className={classes.title}>Overview</Typography>
            <Typography className={classes.description}>
              This includes general county data. Topics include administrative
              and political units, population size and composition, land use,
              tourism and wildlife, industry and trade, finance, and education.
            </Typography>
          </div>
        </Grow>
      </Grid>
    </div>
  );
};

DataIndicators.propTypes = {
  title: PropTypes.string,
  items: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    string: PropTypes.string,
  }),
};

DataIndicators.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataIndicators;
