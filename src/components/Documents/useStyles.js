import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background: palette.background.default,
    border: `1px solid ${palette.grey.main}`,
    opacity: 1,
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
  link: {
    fontWeight: "600",
    color: palette.primary.main,
  },
}));

export default useStyles;
