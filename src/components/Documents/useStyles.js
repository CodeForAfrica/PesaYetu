import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    opacity: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background: palette.background.default,
    border: `1px solid ${palette.grey.main}`,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 40,
    padding: `${typography.pxToRem(31)} ${typography.pxToRem(10)}`,
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  title: {
    fontWeight: "500",
    color: "#212529",
    padding: `${typography.pxToRem(16)} 0`,
  },
  description: {
    fontWeight: "500",
    color: "#212529",
    padding: `${typography.pxToRem(16)} 0`,
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  linkContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  dataTypes: {},
  typeContent: {
    opacity: 1,
    textAlign: "center",
    color: "#666666",
    background: "#F0F0F0",
    padding: `${typography.pxToRem(12)}`,
    fontSize: `${typography.pxToRem(10)}`,
    letterSpacing: `${typography.pxToRem(0.8)}`,
    fontWeight: "600",
  },
  link: {
    fontWeight: "600",
    color: palette.primary.main,
  },
}));

export default useStyles;
