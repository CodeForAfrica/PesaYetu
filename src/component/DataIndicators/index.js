import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

import useStyles from './useStyles';

import Group4646 from '@/pesayetu/assets/Group 4646.png';
import Group4656 from '@/pesayetu/assets/Group 4656.png';
import Group4657 from '@/pesayetu/assets/Group 4657.png';
import Group4658 from '@/pesayetu/assets/Group 4658.png';
import Group4659 from '@/pesayetu/assets/Group 4659.png';

const DataIndicators = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography>Data Indicators</Typography>
      <Grid container>
        <Image src={Group4657} />
        <Image src={Group4656} />
        <Image src={Group4646} />
        <Image src={Group4659} />
        <Image src={Group4658} />
      </Grid>
    </div>
  );
};

export default DataIndicators;
