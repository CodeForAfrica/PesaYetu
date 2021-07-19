/* eslint-disable jsx-a11y/anchor-has-content */
import { A } from '@commons-ui/core';
import { Link as MuiLink } from '@material-ui/core';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    href,
    locale,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    ...other
  } = props;

  return (
    <NextLink
      href={href}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  passHref: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: undefined,
  href: undefined,
  locale: undefined,
  passHref: undefined,
  prefetch: undefined,
  replace: undefined,
  scroll: undefined,
  shallow: undefined,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link/
const Link = React.forwardRef((props, ref) => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href?.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isRelative =
    typeof href === 'string' &&
    href.indexOf('/') === 0 &&
    href.indexOf('//') !== 0;

  if (!isRelative) {
    const noProtocol = href?.indexOf('www.') === 0;
    return (
      <A
        href={noProtocol ? `https://${href}` : href}
        className={className}
        ref={ref}
        {...other}
      />
    );
  }

  if (naked) {
    return (
      <NextComposed className={className} ref={ref} href={href} {...other} />
    );
  }
  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={ref}
      href={href}
      {...other}
    />
  );
});

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

Link.defaultProps = {
  activeClassName: undefined,
  as: undefined,
  className: undefined,
  href: undefined,
  naked: undefined,
  onClick: undefined,
  prefetch: undefined,
};

export default Link;
