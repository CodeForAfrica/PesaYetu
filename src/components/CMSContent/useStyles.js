import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.light,
  },
  section: {
    marginBottom: typography.pxToRem(80),
  },
  container: {
    [breakpoints.up("md")]: {
      margin: typography.pxToRem(0),
    },
    "& .has-medium-font-size": {
      fontSize: typography.pxToRem(18),
      lineHeight: 30 / 18,
      [breakpoints.up("lg")]: {
        fontSize: typography.pxToRem(24),
        lineHeight: 40 / 24,
      },
      marginBottom: typography.pxToRem(40),
      paddingTop: 0,
    },
    "& p strong:only-child": {
      marginTop: typography.pxToRem(80),
      display: "block",
    },
    "& p": {
      paddingTop: typography.pxToRem(24),
    },
    "& img": {
      width: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      height: "auto",
    },
    "& .wp-block-media-text__media": {
      position: "relative",
      marginBottom: typography.pxToRem(40),
      paddingBottom: typography.pxToRem(75),
      marginLeft: 0,
      marginRight: 0,
      [breakpoints.up("lg")]: {
        marginBottom: typography.pxToRem(54),
        paddingBottom: typography.pxToRem(115),
        flexBasis: "41.67%",
        marginRight: "8.33%",
      },
    },
    "& .wp-block-media-text__content": {
      fontSize: typography.pxToRem(18),
      lineHeight: 30 / 18,
      [breakpoints.up("lg")]: {
        flexBasis: "50%",
        fontSize: typography.pxToRem(24),
        lineHeight: 40 / 24,
      },
      "& .title.has-large-font-size": {
        fontSize: typography.pxToRem(18),
        fontWeight: "bold",
        [breakpoints.up("lg")]: { fontSize: typography.pxToRem(24) },
      },
    },
    "& .wp-block-columns, .wp-block-media-text": {
      display: "flex",
      flexDirection: "column",
      [breakpoints.up("lg")]: {
        flexDirection: "row",
      },
    },
    "&  .wp-block-column:nth-of-type(1)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .wp-block-image": {
      width: "100%",
      maxWidth: "100%",
      margin: 0,
      marginTop: typography.pxToRem(20),
      marginBottom: typography.pxToRem(20),
    },
  },
}));

export default useStyles;
