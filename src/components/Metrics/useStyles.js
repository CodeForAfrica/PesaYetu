import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  metric: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(80),
    },
  },
  card: {
    marginTop: typography.pxToRem(20),
    maxWidth: "100%",
    [breakpoints.up("md")]: {
      width: "100%",
    },
    [breakpoints.up("lg")]: {
      marginTop: 0,
      width: "100%",
    },
  },
  cardMedia: {
    height: typography.pxToRem(215),
    width: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      height: "auto",
      width: typography.pxToRem(608),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  cardMediaImage: {},
  titleContainer: {},
  title: {},
  description: {
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

export default useStyles;
