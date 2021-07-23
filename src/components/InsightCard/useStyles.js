import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  card: {
    maxWidth: typography.pxToRem(350),
    boxShadow: "none",
    backgroundColor: "unset",
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(376),
    },
  },
  content: {
    padding: 0,
  },
  cardTitle: {
    margin: `${typography.pxToRem(20)} 0`,
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
