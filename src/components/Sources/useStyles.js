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
    padding: `${typography.pxToRem(29)} ${typography.pxToRem(21)}`,
    "&:first-of-type": {
      borderTop: `1px solid ${palette.grey.main}`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
  },
  text: {
    ...typography.body2,
    [breakpoints.up("lg")]: {
      ...typography.body1,
      lineHeight: 30 / 16,
    },
  },
  title: {
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: 0,
    },
  },
  date: {},
  resourceType: {},
  cta: {
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: 0,
    },
  },
}));

export default useStyles;
