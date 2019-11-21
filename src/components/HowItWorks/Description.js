import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Steps from './Steps';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    padding: '1.143rem 0'
  },
  steps: {
    paddingTop: '0.6423rem' // 9px / 14
  }
});

function Description({ ...props }) {
  const classes = useStyles(props);
  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        How <br />
        it works
      </Typography>

      <Steps />
    </div>
  );
}

export default Description;
