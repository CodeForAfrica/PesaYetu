import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    paddingLeft: typography.pxToRem(34),
    paddingTop: typography.pxToRem(25),
    paddingRight: typography.pxToRem(39),
    width: typography.pxToRem(964),
  },
  header: {
    marginBottom: typography.pxToRem(48),
  },
  description: {
    marginLeft: typography.pxToRem(16),
    width: typography.pxToRem(278),
    lineHeight: 30 / 16,
    "& p": {
      marginTop: 0,
      marginBottom: typography.pxToRem(32),
    },
  },
  currentStep: {
    background: palette.primary.main,
    width: typography.pxToRem(48),
    height: typography.pxToRem(48),
  },
  title: {},
}));

export default useStyles;
