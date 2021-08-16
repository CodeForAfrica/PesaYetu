import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      [breakpoints.up("md")]: {
        marginTop: typography.pxToRem(
          (widths.values.md * 40) / widths.values.lg
        ),
      },
      [breakpoints.up("lg")]: {
        marginTop: typography.pxToRem(40),
      },
    },
    card: {
      boxShadow: "0px 3px 6px #0000001A",
      backgroundColor: palette.background.default,
    },
    content: {
      marginTop: typography.pxToRem(20),
      [breakpoints.up("md")]: {
        marginTop: 0,
        paddingLeft: typography.pxToRem(58),
        maxHeight: typography.pxToRem(315),
      },
      [breakpoints.up("lg")]: {
        paddingLeft: typography.pxToRem(112),
        maxHeight: typography.pxToRem(415),
      },
    },
    description: {
      margin: `${typography.pxToRem(20)} 0`,
      overflow: "hidden",
      boxOrient: "vertical",
      display: "-webkit-box",
      lineClamp: 4,
      [breakpoints.up("md")]: {
        margin: `${typography.pxToRem(10.5)} 0`,
      },
      [breakpoints.up("lg")]: {
        margin: `${typography.pxToRem(20)} 0`,
      },
    },
    media: {
      height: typography.pxToRem(217),
      position: "relative",
      width: "100%",
      [breakpoints.up("md")]: {
        height: typography.pxToRem(415),
      },
    },
    title: {
      overflow: "hidden",
      boxOrient: "vertical",
      display: "-webkit-box",
      lineClamp: 3,
    },
  })
);

export default useStyles;
