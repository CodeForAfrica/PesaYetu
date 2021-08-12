import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: { backgroundColor: "white" },
  insightsData: {},
  carouselItem: {
    margin: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(100)}`,
    },
  },
  featuredCardImage: {
    border: "0px solid #0000001A",
    background: "#FFFFFF",
    opacity: 1,
    boxShadow: "0px 3px 10px #0000001A",
    "& > div:first-child": {
      display: "block",
      margin: "auto !important",
      height: typography.pxToRem(231),
      width: typography.pxToRem(460),
    },
  },
  cardMedia: {
    border: "0px solid #0000001A",
    background: "#FFFFFF",
    opacity: 1,
    boxShadow: "0px 3px 10px #0000001A",
    "& > div:first-child": {
      display: "block",
      margin: "auto !important",
      height: typography.pxToRem(129.5),
      width: typography.pxToRem(259),
    },
  },
  story: {
    marginTop: `${typography.pxToRem(40)}`,
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
