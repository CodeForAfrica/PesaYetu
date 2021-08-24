import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {
    marginBottom: typography.pxToRem(80),
    backgroundColor: "white",
  },
  carouselItem: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(10)}`,
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(60)} 0`,
    },
  },
  featuredCardImage: {},
  cardMedia: {},
  story: {
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(40),
    },
  },
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
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
