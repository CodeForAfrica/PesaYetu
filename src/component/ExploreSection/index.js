import { Typography, Grid } from '@material-ui/core';
import React from 'react';

import useStyles from './useStyles';

import Group3964 from '@/pesayetu/assets/Group 3964.png';
import Group3973 from '@/pesayetu/assets/Group 3973.png';
import Group4619 from '@/pesayetu/assets/Group 4619.png';
import ExploreCard from '@/pesayetu/component/ExploreCard';

const exploreItems = [
  {
    title: 'Promise Tracker',
    description:
      'The Promise Tracker is a platform citizens can use to track promises made by governors, institutions and political parties in their manifestos during campaigns.',
    image: Group3973,
  },
  {
    title: 'Pesa Check',
    description:
      'PesaCheck is the largest fact-checking organisation in Africa, working in 12 countries and providing up to date fact-checks in four languages.',
    image: Group4619,
  },
  {
    title: 'Tax Clock',
    description:
      'TaxClock shows how public budget data can be used to help citizens better understand how governments spend their tax.',
    image: Group3964,
  },
  {
    title: 'DebunkBot',
    description:
      'DebunkBot was created to fight the spread of misinformation on social media by responding to tweets sharing questionable links.',
    image: Group3964,
  },
];

const ExploreSection = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        EXPLORE OUR OTHER TOOLS
      </Typography>
      <Grid container>
        {exploreItems &&
          exploreItems.map((item) => <ExploreCard item={item} />)}
      </Grid>
    </div>
  );
};

export default ExploreSection;
