import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  card: {
    width: typography.pxToRem(350),
    boxShadow: "none",
    backgroundColor: "unset",
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
  },
}));

export default useStyles;
