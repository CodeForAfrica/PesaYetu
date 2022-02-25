import { RichTypography } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/pesayetu/components/Image";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: ({ square, variant }) => {
    let embedStyles;
    if (variant === "embed") {
      embedStyles = {
        // will most likely be an iframe
        "& > :first-child": {
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        },
      };
    }
    return {
      minWidth: typography.pxToRem(square ? 278 : 350),
      position: "relative",
      width: "100%",
      [breakpoints.up("md")]: {
        height: typography.pxToRem(square ? 278 : 183),
        minWidth: typography.pxToRem(square ? 278 : 296),
        width: "auto",
      },
      [breakpoints.up("lg")]: {
        height: typography.pxToRem(square ? 278 : 233),
        minWidth: typography.pxToRem(square ? 278 : 376),
      },
      "&:after": {
        content: '""',
        display: "block",
        // square ? 278/278 ratio : 350/216 ratio
        paddingTop: square ? "100%" : "61.714%",
        [breakpoints.up("md")]: {
          content: "",
          display: "none",
        },
      },
      ...embedStyles,
    };
  },
  image: {
    objectFit: "contain !important",
  },
}));

function Media({
  chart,
  embed,
  image,
  imageProps,
  media: mediaProp,
  ...props
}) {
  const classes = useStyles(props);
  const { variant } = props;
  const media = (variant === "embed" ? chart || embed : image) || mediaProp;

  if (!media) {
    return null;
  }
  if (variant === "embed") {
    return <RichTypography className={classes.root}>{media}</RichTypography>;
  }
  return (
    <div className={classes.root}>
      <Image
        layout="fill"
        src={media}
        {...imageProps}
        className={classes.image}
      />
    </div>
  );
}

Media.propTypes = {
  chart: PropTypes.node,
  embed: PropTypes.node,
  image: PropTypes.node,
  imageProps: PropTypes.shape({}),
  media: PropTypes.node,
  variant: PropTypes.string,
};

Media.defaultProps = {
  chart: undefined,
  embed: undefined,
  image: undefined,
  imageProps: undefined,
  media: undefined,
  variant: undefined,
};

export default Media;
