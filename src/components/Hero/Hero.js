import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import ContentLoader from '@hurumap-ui/core/ContentLoader';
import ArrowButton from 'components/ArrowButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    pointerEvents: 'all',
    height: 'auto',
    overflow: 'hidden'
  },
  titleTextGrid: {
    pointerEvents: 'all',
    zIndex: '100',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem',
      marginTop: 0
    }
  },
  h2hTitleGrid: {
    pointerEvents: 'all',
    order: 2,
    paddingTop: theme.spacing(),
    margin: 0,
    marginTop: '2rem !important'
  },
  title: {
    pointerEvents: 'all',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      width: '60%'
    }
  },
  titleFontSmall: {
    pointerEvents: 'all'
  },
  titleWordBreak: {
    pointerEvents: 'all',
    width: 'min-content'
  },
  detail: {
    pointerEvents: 'all'
  },
  detailFontSmall: {},
  detailLabel: {
    pointerEvents: 'all'
  },
  body2: {
    pointerEvents: 'all',
    textAlign: 'left',
    width: '80%',
    paddingTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  detailComponent: {
    pointerEvents: 'all',
    width: '100%',
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing()
  }
});

function HeroTitleGridComponent({ classes, children, quater, head2head }) {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={quater ? 4 : 8}
      lg={quater ? 4 : 8}
      wrap="nowrap"
      direction="column"
      alignContent="center"
      className={classNames(classes.titleTextGrid, {
        [classes.h2hTitleGrid]: head2head
      })}
    >
      {children}
    </Grid>
  );
}

HeroTitleGridComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  quater: PropTypes.bool,
  head2head: PropTypes.bool
};

HeroTitleGridComponent.defaultProps = {
  quater: false,
  head2head: false
};

const HeroTitleGrid = withStyles(styles)(HeroTitleGridComponent);

function HeroTitleComponent({
  classes,
  loaderWidth,
  loading,
  children,
  breakWord,
  small
}) {
  if (loading) {
    return (
      <ContentLoader style={{ width: loaderWidth, height: 100 }}>
        <rect x="0" y="0" rx="2px" ry="2px" width="100%" height="45%" />
        <rect x="0" y="50%" rx="2px" ry="2px" width="50%" height="45%" />
      </ContentLoader>
    );
  }
  return (
    <Typography
      variant="h1"
      className={classNames(
        classes.title,
        { [classes.titleWordBreak]: breakWord },
        { [classes.titleFontSmall]: small }
      )}
    >
      {children}
    </Typography>
  );
}

HeroTitleComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  breakWord: PropTypes.bool,
  small: PropTypes.bool,
  loading: PropTypes.bool,
  loaderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

HeroTitleComponent.defaultProps = {
  children: undefined,
  breakWord: false,
  small: false,
  loading: false,
  loaderWidth: '100%'
};

const HeroTitle = withStyles(styles)(HeroTitleComponent);

function HeroDescriptionComponent({ classes, children }) {
  return (
    <Typography variant="body1" className={classes.body2}>
      {children}
    </Typography>
  );
}

HeroDescriptionComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const HeroDescription = withStyles(styles)(HeroDescriptionComponent);

function HeroDetailComponent({
  classes,
  hidden,
  loading,
  children,
  label,
  small,
  loader
}) {
  if (hidden) {
    return null;
  }

  if (loading) {
    return (
      <ContentLoader
        className={classes.detailComponent}
        style={{ height: small ? 61 : 74 }}
      >
        <rect
          x="0"
          y="0"
          rx="2px"
          ry="2px"
          width={loader.detailWidth}
          height="50%"
        />
        <rect
          x="0"
          y="60%"
          rx="2px"
          ry="2px"
          width={loader.detailLabelWidth}
          height="30%"
        />
      </ContentLoader>
    );
  }
  return (
    <Grid className={classes.detailComponent}>
      <Typography
        variant="h4"
        className={classNames(classes.detail, {
          [classes.detailFontSmall]: small
        })}
      >
        {children}
      </Typography>
      {label && (
        <Typography variant="subtitle1" className={classes.detailLabel}>
          {label}
        </Typography>
      )}
    </Grid>
  );
}

HeroDetailComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.string,
  label: PropTypes.string.isRequired,
  small: PropTypes.bool,
  loading: PropTypes.bool,
  hidden: PropTypes.bool,
  loader: PropTypes.shape({
    detailWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    detailLabelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired
  })
};

HeroDetailComponent.defaultProps = {
  children: undefined,
  small: false,
  loading: false,
  hidden: false,
  loader: {
    detailWdith: 100,
    detailLabelWidth: 50
  }
};

const HeroDetail = withStyles(styles)(HeroDetailComponent);

function HeroButtonComponent({ children, classes, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ArrowButton secondary {...props}>
      {children}
    </ArrowButton>
  );
}

HeroButtonComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const HeroButton = withStyles(styles)(HeroButtonComponent);

function HeroComponent({ classes, children, ...props }) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Grid container className={classes.root} {...props}>
      {children}
    </Grid>
  );
}

HeroComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const Hero = withStyles(styles)(HeroComponent);

export default Hero;

export { HeroTitle, HeroDescription, HeroButton, HeroTitleGrid, HeroDetail };
