import { RichTypography } from '@commons-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    borderTop: `${typography.pxToRem(1)} solid #E2E2E3`,
    paddingTop: typography.pxToRem(32),
    height: '100%',
    '& img': {
      maxWidth: '100%',
    },
  },
  dots: {
    borderTop: `${typography.pxToRem(1)} solid ${palette.divider}`,
    justifyContent: 'flex-start',
    margin: `0 ${typography.pxToRem(30)}`,
    padding: `${typography.pxToRem(22)} 0`,
    '& button': {
      background: palette.divider,
      borderColor: palette.divider,
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
    },
    '& .react-multi-carousel-dot--active button': {
      borderColor: '#A0A0A0',
      background: palette.background.default,
    },
  },
}));

function RichContent({ items, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1280, min: 720 },
      items: 1,
    },
  };

  return (
    <div container className={classes.root}>
      <Carousel
        responsive={responsive}
        arrows={false}
        renderDotsOutside
        showDots
        dotListClass={classes.dots}
      >
        {items.map((content) => (
          <RichTypography key={content} variant="body2">
            {content}
          </RichTypography>
        ))}
      </Carousel>
    </div>
  );
}

RichContent.propTypes = {
  items: undefined,
};

RichContent.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default RichContent;
