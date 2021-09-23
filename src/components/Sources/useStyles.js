import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {},
  sources: {
    opacity: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background: palette.background.default,
    border: `1px solid ${palette.grey.main}`,
    padding: `${typography.pxToRem(31)}`,
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
      padding: `${typography.pxToRem(31)} ${typography.pxToRem(100)}`,
    },
  },
  grid: {
    padding: `${typography.pxToRem(48)} 0`,
  },
  text: {
    marginBottom: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginBottom: 0,
    },
  },
  title: {
    color: "#333333",
    [breakpoints.up("lg")]: {
      color: "#212529",
    },
  },
  description: ({ type }) => ({
    marginTop: type === "datasets" ? `-${typography.pxToRem(20)}` : undefined,
    marginBottom: type === "datasets" ? 0 : undefined,
    [breakpoints.up("lg")]: {
      marginBottom: "revert",
      marginLeft: typography.pxToRem(64),
      marginTop: 0,
    },
  }),
  textContent: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  linkContent: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  dataTypes: {
    padding: `${typography.pxToRem(16)} 0`,
    [breakpoints.up("lg")]: {
      justifyContent: "center",
      padding: 0,
    },
  },
  typeContent: {
    opacity: 1,
    textAlign: "center",
    color: "#666666",
    background: "#F0F0F0",
    padding: `${typography.pxToRem(12)}`,
    fontSize: `${typography.pxToRem(10)}`,
    letterSpacing: `${typography.pxToRem(0.8)}`,
    fontWeight: "600",
    marginRight: `${typography.pxToRem(16)}`,
    textTransform: "uppercase",
  },
  link: {
    fontWeight: "600",
    color: palette.primary.main,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(8)} 0`,
    },
    [breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  dotList: {
    margin: `${typography.pxToRem(16)} ${typography.pxToRem(30)}`,
  },
}));

export default useStyles;
