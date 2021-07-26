import { createTheme } from "@material-ui/core/styles";
import { deepmerge } from "@material-ui/utils";

const FONT_FAMILY_TEXT = '"Poppins", "sans-serif"';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile
      md: 768, // tablet
      lg: 1280, // desktop
    },
  },
  palette: {
    primary: {
      main: "#0067A3", // main blue
      light: "#7DB2D3", // hightlight blue
    },
    secondary: {
      main: "#EE4538", // main red
      light: "#F8A199", // highlight red
    },
    background: {
      default: "#FFFFFF", // white
      paper: "#F8F8F8", // light white
    },
    grey: {
      dark: "#2A2A2C ", // dark
      main: "#DFDFDF", // darkgrey
      light: "#F0F0F0", // lightgrey
    },
    text: {
      primary: "#333333",
      secondary: "#fff",
      hint: "#1C2031",
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    h1: {
      fontWeight: 900,
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    hd: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
  },
  widths: {
    values: {
      md: 608, // 0, 80, 0, 80 margin
      lg: 1160, // 0, 140, 0, 140 margin
    },
  },
});

const { palette, typography, breakpoints, overrides } = theme;
const { pxToRem } = typography;
// Typography
deepmerge(
  typography,
  {
    h1: {
      fontSize: pxToRem(30),
      lineHeight: 40 / 30, // font 30 H0m
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(48),
        lineHeight: 58 / 48, // font 48 H0
      },
    },
    h2: {
      fontSize: pxToRem(38),
      lineHeight: 48 / 38,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(48),
        lineHeight: 58 / 48, // font 48 H1
      },
    },
    h3: {
      fontSize: pxToRem(24),
      lineHeight: 40 / 24,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(30),
        lineHeight: 48 / 30, // font 30 H2
      },
    },
    h4: {
      fontSize: pxToRem(20),
      lineHeight: 30 / 20,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(20),
        lineHeight: 30 / 20, // font 20 H4
      },
    },
    h5: {
      fontSize: pxToRem(18),
      lineHeight: 27 / 18,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(18),
        lineHeight: 27 / 18, // font 18 H5
      },
    },
    h6: {
      fontSize: pxToRem(16),
      lineHeight: 30 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(16),
        lineHeight: 30 / 16, // font 18 body1
      },
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 25 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(16),
        lineHeight: 25 / 16, // font 18 body1
      },
    },
    body2: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(16),
        lineHeight: 24 / 16, // font body2
      },
    },
    subtitle1: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(16),
        lineHeight: 24 / 16, // font 16 subtitle1
      },
    },
    subtitle2: {
      fontSize: pxToRem(14),
      lineHeight: 18 / 14,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(14),
        lineHeight: 18 / 14, // font 14 subtitle2
      },
    },
    caption: {
      fontSize: pxToRem(12),
      lineHeight: 18 / 12,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(12),
        lineHeight: 18 / 12, // font 12 caption
      },
    },
  },
  { clone: false }
);

// Overrides
deepmerge(
  overrides,
  {
    MuiButton: {
      root: {},
      contained: {},
      containedPrimary: {
        color: palette.primary.main,
        backgroundColor: palette.background.main,
        boxShadow: "none",
        borderRadius: pxToRem(50),
        letterspacing: "1.6px",
        textAlign: "center",
        border: "2px solid #0067A3",
        textTransform: "uppercase",
        transition: "none !important",
        "&:hover": {
          color: palette.background.main,
          boxShadow: "none",
          backgroundColor: palette.primary.main,
          border: "2px solid transparent",
          borderRadius: pxToRem(50),
        },
      },
    },
  }, // overides settings goes here
  { clone: false }
);
export default theme;
