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
        <Grid container direction="column">
          <Grid item>
            <Image className={classes.image} src={Group4657} />
            <Typography>Overview</Typography>
          </Grid>
          <Grid item>
            <Image className={classes.image} src={Group4656} />
            <Typography>Revenue</Typography>
          </Grid>
          <Grid item>
            <Image className={classes.image} src={Group4646} />
            <Typography>Development</Typography>
          </Grid>
          <Grid item>
            <Image className={classes.image} src={Group4659} />
            <Typography>Implementation</Typography>
          </Grid>
          <Grid item>
            <Image className={classes.image} src={Group4658} />
            <Typography>Summary</Typography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default DataIndicators;
