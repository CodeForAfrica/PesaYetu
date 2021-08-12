import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    padding: `${typography.pxToRem(60)} 0 ${typography.pxToRem(80)}`,
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(40),
    },
  },
  image: {
    position: "relative",
    height: typography.pxToRem(217),
    width: "100%",
    marginBottom: typography.pxToRem(40),
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
  },
}));

export default useStyles;
