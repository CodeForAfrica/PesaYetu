import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    padding: `${typography.pxToRem(38)} 0`,
    scrollMarginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      scrollMarginTop: typography.pxToRem(80),
    },
  },
  section: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
}));

export default useStyles;
