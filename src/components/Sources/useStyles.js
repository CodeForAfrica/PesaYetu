import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {},
  carouselItem: {},
  carouselDotList: {
    margin: `${typography.pxToRem(16)} ${typography.pxToRem(30)}`,
  },
  source: {
    border: `1px solid ${palette.grey.main}`,
    borderTop: "none",
    "&:first-of-type": {
      borderTop: `1px solid ${palette.grey.main}`,
    },
    padding: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      padding: 0,
      display: "flex",
      height: typography.pxToRem(121),
    },
  },
  text: {
    ...typography.body2,
    [breakpoints.up("lg")]: {
      ...typography.body1,
      lineHeight: 30 / 16,
    },
  },
  title: {},
  date: {},
  resourceType: {},
  cta: {
    fontWeight: "bold",
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: 0,
    },
  },
}));

export default useStyles;
