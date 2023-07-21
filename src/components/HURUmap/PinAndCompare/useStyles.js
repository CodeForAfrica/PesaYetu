import { alpha } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    padding: `${typography.pxToRem(20)} 0`,
    borderBottom: `solid 1px ${palette.divider}`,
  },
  pinButton: {
    maxHeight: typography.pxToRem(44),
    maxWidth: typography.pxToRem(44),
    overflow: "hidden",
    padding: 0,
    marginRight: typography.pxToRem(14),
    backgroundColor: palette.grey.light,
    borderRadius: "0px 2px 2px 0px",
    boxShadow: `0px 3px 6px ${alpha(palette.common.black, 0.16)}`, // #00000029
    "&:hover,&:focus,&:focus-within": {
      backgroundColor: palette.grey.light,
    },
  },
  locationSelect: {
    paddingTop: typography.pxToRem(10),
    paddingBottom: typography.pxToRem(10),
  },
  selectPaper: {
    height: typography.pxToRem(310),
  },
}));

export default useStyles;
