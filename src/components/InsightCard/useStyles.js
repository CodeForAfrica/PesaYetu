import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  card: {
    color: "#000",
    boxShadow: "none",
    backgroundColor: "unset",
    width: "100%",
    paddingBottom: typography.pxToRem(30),
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(296),
      padding: 0,
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(376),
      padding: 0,
    },
  },
  content: {
    padding: 0,
  },
  cardTitle: {
    margin: `${typography.pxToRem(20)} 0`,
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(40),
    },
  },
  cardDescription: {
    marginBottom: typography.pxToRem(20),
  },
  cardMedia: {
    height: typography.pxToRem(215),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(183),
      width: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(231),
      width: typography.pxToRem(376),
    },
  },
  link: {
    textDecoration: "underline",
  },
  linkText: {
    fontWeight: "bold",
  },
}));

export default useStyles;
