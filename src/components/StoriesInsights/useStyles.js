import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ palette, typography, breakpoints, widths }) => ({
    root: {
      backgroundColor: "#F8F8F8",
    },
    section: {},
    header: {
      padding: `${typography.pxToRem(40)} 0`,
      [breakpoints.up("md")]: {
        paddingTop: typography.pxToRem(80),
      },
      [breakpoints.up("lg")]: {
        paddingBottom: typography.pxToRem(85),
      },
    },
    carouselList: {
      order: 2,
      width: "100%",
      [breakpoints.up("lg")]: {
        width: typography.pxToRem(270),
      },
    },
    dots: {
      order: 1,
      padding: `${typography.pxToRem(40)} 0`,
      position: "unset",
      justifyContent: "flex-start",
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
      [breakpoints.up("lg")]: {
        padding: `0 0 ${typography.pxToRem(40)} 0`,
      },
    },
    chartContainer: {
      boxShadow: "0px 3px 6px #00000029",
      backgroundColor: palette.background.default,
      [breakpoints.down("sm")]: {
        // width: "100",
        margin: `0 ${typography.pxToRem(-11)}`,
        width: "112%",
      },
      [breakpoints.only("md")]: {
        margin: `0 calc(-50vh + ${widths.values.md / 2}px)`,
      },
    },
    chart: {
      "& > iframe": {
        height: "100%",
      },
      height: typography.pxToRem(400),
      width: "100%",
      padding: `0 ${typography.pxToRem(20)}`,
      margin: "0 auto",
      [breakpoints.up("md")]: {
        height: typography.pxToRem(476),
        width: typography.pxToRem(608),
      },
      [breakpoints.up("lg")]: {
        height: typography.pxToRem(530),
        width: typography.pxToRem(768),
        padding: `${typography.pxToRem(30)} ${typography.pxToRem(
          33
        )} ${typography.pxToRem(27)}`,
      },
    },
    card: {
      border: 0,
      boxShadow: "unset",
    },
    cardTitle: {
      marginBottom: typography.pxToRem(20),
      color: "#212529",
    },
    cardDescription: {
      marginBottom: typography.pxToRem(20),
      color: palette.text.primary,
    },
    cardFocusHighlight: {
      color: palette.background.paper,
    },
    linkText: {
      fontWeight: "bold",
    },
  })
);

export default useStyles;
