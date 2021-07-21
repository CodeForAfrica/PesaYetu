import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

import useStyles from './useStyles';

import Group4646 from '@/pesayetu/assets/Group 4646.png';
import Group4656 from '@/pesayetu/assets/Group 4656.png';
import Group4657 from '@/pesayetu/assets/Group 4657.png';
import Group4658 from '@/pesayetu/assets/Group 4658.png';
import Group4659 from '@/pesayetu/assets/Group 4659.png';
import Section from '@/pesayetu/component/Section';

const DataIndicators = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Typography className={classes.title}>Data Indicators</Typography>
        <Grid container className={classes.container}>
          <Grid item className={classes.item}>
            <Image className={classes.image} src={Group4657} />
            <Typography className={classes.text}>Overview</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Image className={classes.image} src={Group4656} />
            <Typography className={classes.text}>Revenue</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Image className={classes.image} src={Group4646} />
            <Typography className={classes.text}>Development</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Image className={classes.image} src={Group4659} />
            <Typography className={classes.text}>Implementation</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Image className={classes.image} src={Group4658} />
            <Typography className={classes.text}>Summary</Typography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default DataIndicators;
