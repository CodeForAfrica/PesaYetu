import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    marginBottom: typography.pxToRem(80),
  },
  carouselItem: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(10)}`,
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(60)} 0`,
    },
  },
  story: {
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(40),
    },
  },
  shadow: {
    boxShadow: "0px 3px 10px #0000001A",
    margin: typography.pxToRem(3),
    [breakpoints.up("md")]: {
      minWidth: `${typography.pxToRem(260)} !important`,
    },
    [breakpoints.up("lg")]: {
      minWidth: `${typography.pxToRem(370)} !important`,
    },
  },
  mediaImage: {
    objectFit: "cover !important",
  },
  embedImage: {
    height: `${typography.pxToRem(150)} !important`,
    minWidth: `${typography.pxToRem(260)} !important`,
    [breakpoints.up("lg")]: {
      height: `${typography.pxToRem(150)} !important`,
      minWidth: `${typography.pxToRem(290)} !important`,
    },
  },
  progress: {
    display: "block",
    margin: "0 auto",
  },
}));

export default useStyles;
