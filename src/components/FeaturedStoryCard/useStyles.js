import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem((widths.values.md * 40) / widths.values.lg),
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(40),
    },
  },
  card: {
    [breakpoints.up("md")]: {
      height: typography.pxToRem(376),
      width: typography.pxToRem(608),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(670),
    },
  },
  content: {
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: 0,
      maxHeight: typography.pxToRem(415),
    },
  },
  description: {
    margin: `${typography.pxToRem(20)} 0`,
    overflow: "hidden",
    boxOrient: "vertical",
    display: "-webkit-box",
    lineClamp: 4,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(10.5)} 0`,
    },
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(20)} 0`,
    },
  },
  media: {
    [breakpoints.up("md")]: {
      height: typography.pxToRem(376),
      width: typography.pxToRem(608),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(670),
    },
  },
  mediaImage: {
    objectFit: "cover !important",
  },
  title: {
    overflow: "hidden",
    boxOrient: "vertical",
    display: "-webkit-box",
    lineClamp: 3,
  },
  shadow: {
    boxShadow: "0px 3px 10px #0000001A",
    margin: typography.pxToRem(6),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(364),
      width: typography.pxToRem(596),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(403),
      width: typography.pxToRem(658),
    },
  },
}));

export default useStyles;
