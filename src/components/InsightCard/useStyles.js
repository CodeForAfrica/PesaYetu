import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  card: {
    maxWidth: typography.pxToRem(350),
    color: "#000",
    boxShadow: "none",
    backgroundColor: "unset",
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
  link: {
    textDecoration: "underline",
  },
  linkText: {
    fontWeight: "bold",
  },
  image: {
    objectFit: "contain",
  },
  cardMedia: {
    position: "relative",
    height: typography.pxToRem(216),
    width: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(296),
      height: typography.pxToRem(183),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(376),
      height: typography.pxToRem(233),
    },
  },
}));

export default useStyles;