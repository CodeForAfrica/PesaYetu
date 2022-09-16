import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, zIndex }) => ({
    root: {
      position: "relative",
      height: "calc(100vh - 88px)",
      [breakpoints.up("lg")]: {
        height: "calc(100vh - 110px)",
        position: "fixed",
        left: 0,
        right: 0,
      },
      "& .tooltipPop": {
        background: palette.background.default,
        boxShadow: "0px 3px 6px #00000029",
        height: typography.pxToRem(36),
        width: typography.pxToRem(88),
        "& .level": {
          background: palette.primary.main,
          borderRadius: typography.pxToRem(4),
          color: palette.text.secondary,
          display: "flex",
          fontSize: typography.pxToRem(7),
          fontWeight: "bold",
          height: typography.pxToRem(17),
          justifyContent: "center",
          lineHeight: 10 / 7,
          margin: "0 auto",
          marginTop: typography.pxToRem(-15),
          paddingTop: typography.pxToRem(2),
          textTransform: "uppercase",
          width: typography.pxToRem(62),
        },
        "& .name": {
          textAlign: "center",
          fontSize: typography.pxToRem(9),
          fontWeight: "bold",
          lineHeight: 13 / 9,
          marginTop: typography.pxToRem(5),
          textTransform: "capitalize",
        },
      },
    },
    map: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "block",
      },
    },
    location: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "flex",
        left: 0,
        margin: "0 auto",
        position: "absolute",
        right: 0,
        top: typography.pxToRem(52),
        zIndex: zIndex.appBar,
      },
    },
  })
);

export default useStyles;
