import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Hero, { HeroTitle, HeroTitleGrid } from './Hero';

const styles = {
  root: {
    flexGrow: 1,
    margin: '4rem 0'
  },
  titlegrid: {
    alignItems: 'center'
  }
};

function TitleHero({ classes, children }) {
  return (
    <Hero classes={{ root: classes.root }}>
      <HeroTitleGrid classes={{ titleTextGrid: classes.titlegrid }}>
        <HeroTitle>{children}</HeroTitle>
      </HeroTitleGrid>
    </Hero>
  );
}

TitleHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default withStyles(styles)(TitleHero);
