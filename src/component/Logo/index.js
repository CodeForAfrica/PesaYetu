/* eslint-disable @next/next/no-img-element */
import { A } from '@commons-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {},
}));

function LogoButton({ alt, href, src, ...props }) {
  const classes = useStyles(props);
  return (
    <A href={href}>
      <img src={src} alt={alt} className={classes.image} />
    </A>
  );
}

LogoButton.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
};

LogoButton.defaultProps = {
  alt: undefined,
  href: undefined,
  src: undefined,
};

export default LogoButton;
