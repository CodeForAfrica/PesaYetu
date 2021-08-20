import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    height: typography.pxToRem(600),
    backgroundImage: ({ image }) => `url("${image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(400),
    },
  },
  section: {},
  content: {
    marginTop: typography.pxToRem(169),
    marginBottom: typography.pxToRem(149),
    background: palette.background.default,
    padding: `${typography.pxToRem(58)} ${typography.pxToRem(
      26
    )} ${typography.pxToRem(28)}`,

    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(55),
      marginBottom: typography.pxToRem(55),
      padding: `${typography.pxToRem(58)} ${typography.pxToRem(98)}`,
    },
  },
  title: {
    marginBottom: typography.pxToRem(20),
  },
  subtitle: {
    marginBottom: typography.pxToRem(20),
  },
}));

export default useStyles;
