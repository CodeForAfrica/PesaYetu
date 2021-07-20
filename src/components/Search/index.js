import { IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import searchIcon from '@/pesayetu/assets/icons/search.svg';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    borderRadius: typography.pxToRem(10),
    color: palette.primary.main,
    border: '2px solid #1c2030',
    width: typography.pxToRem(215),
  },
  button: {
    padding: 0,
    marginLeft: typography.pxToRem(15),
  },
  input: {
    backgroundColor: 'inherit',
    height: typography.pxToRem(48),
    padding: 0,
  },
}));

function Search({ href: hrefProp, onClick: onClickProp, ...props }) {
  const classes = useStyles(props);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    if (onClickProp) {
      onClickProp(query);
    } else if (hrefProp?.length) {
      const href = `${hrefProp}/${query}`;
      router.push(href);
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <>
      <InputBase
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
        classes={{
          root: classes.root,
          input: classes.input,
        }}
      />
      <IconButton
        color="primary"
        onClick={handleClick}
        size="small"
        className={classes.button}
      >
        <Image src={searchIcon} />
      </IconButton>
    </>
  );
}

Search.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Search.defaultProps = {
  href: undefined,
  onClick: undefined,
};

export default Search;
