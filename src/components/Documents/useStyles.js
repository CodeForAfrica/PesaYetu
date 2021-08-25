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
    padding: `${typography.pxToRem(31)} ${typography.pxToRem(10)}`,
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  text: {
    fontWeight: "500",
    color: "#212529",
    padding: `${typography.pxToRem(16)} 0`,
  },
  title: {},
  description: {},
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
      justifyContent: "center",
    },
  },
  link: {
    fontWeight: "600",
    color: palette.primary.main,
  },
}));

export default useStyles;
