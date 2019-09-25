import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ContentLoader } from '@codeforafrica/hurumap-ui';

const styles = () => ({
  root: {
    marginTop: '48px',
    marginBottom: '8px',
    width: '100%'
  },
  title: {
    textTransform: 'capitalize',
    fontFamily: 'Lora, serif',
    marginTop: '16px'
  },
  description: {
    marginTop: '8px'
  }
});

function ProfileSectionTitle({
  classes,
  loading,
  tab: { title, description }
}) {
  return (
    <Grid item className={classes.root}>
      {loading ? (
        <ContentLoader primaryOpacity={1} secondaryOpacity={0.5} height={72}>
          <rect x="0" y="0" height="48px" width="320px" />
          <rect x="0" y="56px" height="16px" width="400px" />
        </ContentLoader>
      ) : (
        <>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <></>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </>
      )}
    </Grid>
  );
}

ProfileSectionTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  loading: PropTypes.bool
};

ProfileSectionTitle.defaultProps = {
  loading: false
};

export default withStyles(styles)(ProfileSectionTitle);
