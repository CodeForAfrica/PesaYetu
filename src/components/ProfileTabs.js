import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentLoader from '@codeforafrica/hurumap-ui/core/ContentLoader';

import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    scrollBehavior: 'smooth',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem',
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      padding: 0
    },
    [theme.breakpoints.up('lg')]: {
      padding: 0
    }
  },
  /**
   * This class fills the position when the bar is
   * set to position fixed.
   */
  filler: {
    height: '6.25rem' // 100px / 16
  },
  fix: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0
  },
  content: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      maxWidth: '66.5875rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0 auto',
      maxWidth: '81.3571429rem'
    }
  },
  appbar: {
    boxShadow: 'none'
  },
  loader: {
    width: '100%',
    height: '6.25rem' // 100px / 16
  },
  indicator: {
    height: '.25rem' // 4px / 16
  },
  tab: {
    height: '6.25rem', // 100px / 16
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      minWidth: 0
    }
  },
  tabSelected: {
    fontWeight: 700,
    '& .MuiTab-wrapper': {
      maxWidth: '11.8rem'
    }
  },
  labelContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

function LinkTab(props) {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Tab component="a" {...props} />;
}

function ProfileTabs({ tabs, loading, activeTab, switchToTab, ...props }) {
  const classes = useStyles(props);
  const [fixToTop, setFixToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const el = document.getElementById('section-tabs');
      const rect = el.getBoundingClientRect();
      if (rect.y <= 0 && !fixToTop) {
        setFixToTop(true);
      } else if (rect.y > 0 && fixToTop) {
        setFixToTop(false);
      } else {
        //
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixToTop]);

  const handleChange = (_event, value) => {
    if (switchToTab) {
      switchToTab(value);
    }

    setTimeout(() => {
      const sectionTab = document.getElementById('section-tabs');
      if (sectionTab) {
        sectionTab.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <div id="section-tabs" className={classes.filler}>
      <div
        className={classNames(classes.root, {
          [classes.fix]: fixToTop
        })}
      >
        <div className={classes.content}>
          {loading ? (
            <ContentLoader
              className={classes.loader}
              primaryOpacity={0.5}
              secondaryOpacity={1}
              height={88}
              width={1200}
            >
              <rect x="0" y="45%" width="55px" height="21px" />
              <rect x="84px" y="45%" width="55px" height="21px" />
              <rect x="168px" y="45%" width="55px" height="21px" />
              <rect x="252px" y="45%" width="95px" height="21px" />
              <rect x="371px" y="45%" width="95px" height="21px" />
              <rect x="490px" y="45%" width="110px" height="21px" />
              <rect x="624px" y="45%" width="95px" height="21px" />
              <rect x="753px" y="45%" width="221px" height="21px" />
              <rect x="998px" y="45%" width="55px" height="21px" />
            </ContentLoader>
          ) : (
            <AppBar
              color="inherit"
              position="static"
              className={classes.appbar}
            >
              <Tabs
                value={activeTab}
                variant="scrollable"
                scrollButtons="auto"
                classes={{ indicator: classes.indicator }}
                onChange={handleChange}
              >
                {tabs.map(tab => (
                  <LinkTab
                    key={tab.slug}
                    value={tab.slug}
                    href={`#${tab.slug}`} // Always show the tabs on click
                    label={tab.title}
                    className={classes.tab}
                    classes={{
                      selected: classes.tabSelected
                    }}
                  />
                ))}
              </Tabs>
            </AppBar>
          )}
        </div>
      </div>
    </div>
  );
}

ProfileTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  switchToTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool
};

ProfileTabs.defaultProps = {
  loading: false
};

export default ProfileTabs;
