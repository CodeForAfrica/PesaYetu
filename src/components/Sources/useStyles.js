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
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
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
  description: {},
  textContent: {
    display: "flex",
    flexDirection: "column",

    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  linkContent: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    [breakpoints.up("lg")]: {
      justifyContent: "flex-end",
    },
  },
  dataTypes: {
    padding: `${typography.pxToRem(16)} 0`,
    direction: "row",
    alignItems: "center",
    [breakpoints.up("md")]: {
      justifyContent: "center",
      alignItems: "center",
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
  dots: {
    margin: `${typography.pxToRem(16)} ${typography.pxToRem(30)}`,
    position: "unset",
    "& button": {
      borderColor: palette.divider,
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#A0A0A0",
      background: "#000",
    },
  },
}));

export default useStyles;