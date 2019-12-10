import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  MenuList,
  MenuItem,
  ButtonBase
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import cross from '../../assets/images/icons/close.svg';

const styles = theme => ({
  root: {
    color: 'white',
    flexGrow: 1,
    height: '31.25rem',
    [theme.breakpoints.up('md')]: {
      marginRight: '6.5625rem', // align with countries dropdown button
      alignItems: 'flex-end'
    }
  },
  closeButton: {
    display: 'none',
    marginBottom: '6.25rem',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  title: {
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '4.375rem'
    }
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  },
  listIndex: {
    marginRight: '1.875rem',
    width: 'fit-content',
    fontSize: '0.6875rem',
    opacity: 0.5,
    lineHeight: 4.55,
    fontWeight: 500,
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      marginRight: '3.75rem',
      width: '3.3125rem'
    }
  },
  listItemLink: {
    color: 'inherit',
    fontFamily: theme.typography.fontHeading,
    fontWeight: 'normal',
    textDecoration: 'none',
    visibility: 'visible',
    fontSize: '1.25rem',
    lineHeight: 1.25,
    span: {
      display: 'block'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem'
    }
  },
  overview: {
    fontSize: '0.6875rem',
    marginTop: '1rem',
    opacity: 0.5
  }
});

function ContactUs({ classes, handleClose }) {
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      wrap="wrap"
      justify="center"
    >
      <ButtonBase onClick={handleClose} className={classes.closeButton}>
        <img alt="Close" src={cross} />
      </ButtonBase>
      <Grid container direction="row">
        <Grid item xs={12} md={6}>
          <Typography className={classes.title}>Contact us</Typography>
          <Typography className={classes.overview}>
            Got a comment or query? Get in touch:
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuList>
            {[
              { name: 'CodeForAfrica', href: 'mailto:hello@codeforafrica.org' },
              { name: 'Twitter', href: 'https://twitter.com/Code4Africa' },
              {
                name: 'Facebook',
                href: 'https://web.facebook.com/CodeForAfrica'
              }
            ].map((contact, index) => (
              <MenuItem button key={contact.name} className={classes.listItem}>
                <span className={classes.listIndex}>
                  {`${index + 1}`.padStart(2, '0')}
                </span>
                <a className={classes.listItemLink} href={`${contact.href}`}>
                  {contact.name}
                </a>
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
      </Grid>
    </Grid>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(ContactUs);
