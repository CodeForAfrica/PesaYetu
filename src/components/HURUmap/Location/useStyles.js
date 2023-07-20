import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    background: alpha("#FFFFFF", 0.9), // #FFFFFFE6
    borderRadius: typography.pxToRem(5),
    bottom: "auto",
    boxShadow: `0px 3px 6px ${alpha("#000000", 0.16)}`, // #00000029
    padding: `${typography.pxToRem(4.12)} ${typography.pxToRem(
      19
    )} ${typography.pxToRem(12)} ${typography.pxToRem(21)}`,
    width: typography.pxToRem(600),
  },
  tag: {
    "&:not(:first-of-type)": {
      marginLeft: typography.pxToRem(10),
    },
  },
  tagLevel: {},
  tagName: {},
  highlights: {
    borderTop: `1px solid ${palette.grey.main}`,
    marginTop: 4.5,
    width: "100%",
  },
  highlight: {
    paddingTop: 4.5,
    "&:not(:first-of-type)": {
      borderLeft: `1px solid ${palette.grey.main}`,
    },
  },
  highlightTitle: {},
  highlightValue: {},
}));

export default useStyles;
