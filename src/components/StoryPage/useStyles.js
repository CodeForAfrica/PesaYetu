import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    paddingTop: typography.pxToRem(60),
    paddingBottom: typography.pxToRem(80),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(40),
    },
  },
  image: {
    position: "relative",
    height: typography.pxToRem(217),
    width: "100%",

    margin: `0 0 ${typography.pxToRem(40)}`,
    [breakpoints.up("md")]: {
      height: typography.pxToRem(320),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(768),
      height: typography.pxToRem(476),
    },
  },
  content: {
    marginTop: typography.pxToRem(20),
    "& .wp-block-image > img": {
      height: "auto",
      objectFit: "contain",
      objectPosition: "top",
      width: "100%",
      [breakpoints.up("lg")]: {
        width: typography.pxToRem(768),
      },
    },
  },
  relatedTitle: {
    textAlign: "center",
    marginBottom: `${typography.pxToRem(40)} !important`,
    fontSize: typography.h4.fontSize,
  },
}));

export default useStyles;
