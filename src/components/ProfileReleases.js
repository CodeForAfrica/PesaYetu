import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Typography } from '@material-ui/core';
import OpenInNew from '@material-ui/icons/OpenInNew';

import A from '@codeforafrica/hurumap-ui/core/A';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#DADBDD',
    padding: '3.125em',
    [theme.breakpoints.up('md')]: {
      padding: '3.125em 0'
    }
  },
  content: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  citations: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1
    }
  },
  citationsTitle: {
    lineHeight: 1.43,
    padding: '8px 0'
  },
  citationSourceTitle: {
    lineHeight: 2.22
  },
  citationSourceLink: {
    lineHeight: 2.22
  },
  releaseSelector: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2
    }
  },
  changeReleaseButton: {
    lineHeight: 2.09,
    letterSpacing: 'normal',
    textAlign: 'left',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    width: '9.375rem',
    paddingLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: '50px'
    }
  },
  releasesMenuItem: {
    width: '9.375rem',
    maxWidth: '9.375rem'
  }
}));

function ProfileRelease({ sectionedCharts, ...props }) {
  const classes = useStyles(props);
  const sectionCitations = sectionedCharts
    .filter(s => s.length > 0)
    .map(charts => {
      return charts

        .map(({ sourceLink: link, sourceTitle: title }) => ({ link, title }))
        .reduce((acc, { link, title }) => {
          acc.link = link;
          acc.title = title;
          return acc;
        }, {});
    });
  const citations = sectionCitations.reduce((acc, { link, title }) => {
    acc[link] = title;
    return acc;
  }, {});

  return (
    <div className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item className={classes.citations}>
          <Typography className={classes.citationsTitle}>Citations</Typography>
          {Object.keys(citations).map(link => (
            <>
              <Typography
                variant="caption"
                className={classes.citationSourceTitle}
              >
                {citations[link]}
              </Typography>{' '}
              <A
                variant="caption"
                href={link}
                className={classes.citationSourceLink}
              >
                {link}{' '}
                <OpenInNew
                  fontSize="inherit"
                  className={classes.citationSourceLink}
                />
              </A>
              <br />
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

ProfileRelease.propTypes = {
  sectionedCharts: PropTypes.arrayOf(PropTypes.shape({}))
};
ProfileRelease.defaultProps = {
  sectionedCharts: []
};
export default ProfileRelease;
