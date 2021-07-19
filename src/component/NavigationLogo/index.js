import { RichTypography } from '@commons-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  section: {},
  title: {},
  firstHalf: {
    color: '#EE4538',
    fontWeight: 'bold',
    letterSpacing: 0,
  },
  secondHalf: {
    color: '#0067A3',
    fontWeight: 'bold',
    letterspacing: 0,
  },
  subtitle: {
    letterSpacing: '1.32px',
    color: '#2A2A2C',
  },
}));

function NavigationLogo({ firstTitle, secondTitle, subtitle, ...props }) {
  const classes = useStyles(props);
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        className={classes.title}
      >
        <RichTypography variant="h1" className={classes.firstHalf}>
          {firstTitle}
        </RichTypography>
        <RichTypography variant="h1" className={classes.secondHalf}>
          {secondTitle}
        </RichTypography>
      </Grid>
      <Grid item>
        <RichTypography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </RichTypography>
      </Grid>
    </>
  );
}

NavigationLogo.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NavigationLogo.defaultProps = {
  firstTitle: undefined,
  secondTitle: undefined,
  subtitle: undefined,
};

export default NavigationLogo;
