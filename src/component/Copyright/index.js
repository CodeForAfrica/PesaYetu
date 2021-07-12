/* eslint-disable @next/next/no-img-element */
import { A } from '@commons-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  copyrightIcon: {
    padding: '0.2rem',
  },
  text: {
    color: 'white',
    margin: '0.2rem',
    letterSpacing: '0.56px',
    textAlign: 'left',
  },
}));

function Copyright({
  copyright,
  icon,
  copyrightVariant,
  year,
  copyrightUrl,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <>
      {(copyright || icon || year) && (
        <div className={clsx(classes.copyright, classes.root)}>
          {icon && (
            <A href={copyrightUrl} className="copyrightLogo">
              <img
                src={icon}
                alt={copyright}
                className={classes.copyrightIcon}
              />
            </A>
          )}
          {year && (
            <Typography
              variant={copyrightVariant}
              className={clsx(classes.text, classes.copyrightYear)}
            >
              {year}
            </Typography>
          )}
          {copyright && (
            <Typography
              variant={copyrightVariant}
              className={clsx(classes.text, classes.copyrightText)}
            >
              {copyright}
            </Typography>
          )}
        </div>
      )}
    </>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.string,
  icon: PropTypes.string,
  copyrightVariant: PropTypes.string,
  copyrightUrl: PropTypes.string,
  year: PropTypes.string,
};

Copyright.defaultProps = {
  copyright: 'Copyright',
  icon: undefined,
  year: undefined,
  copyrightVariant: 'body1',
  copyrightUrl: '',
};
export default Copyright;
