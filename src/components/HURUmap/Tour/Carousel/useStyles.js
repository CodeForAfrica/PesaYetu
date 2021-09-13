import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    paddingLeft: typography.pxToRem(34),
    paddingTop: typography.pxToRem(49),
    paddingRight: typography.pxToRem(39),
    width: typography.pxToRem(964),
  },
  header: {
    marginBottom: typography.pxToRem(48),
  },
  itemClass: {},
  carousel: {},
  section: {},
  description: {
    marginLeft: typography.pxToRem(16),
    width: typography.pxToRem(278),
    lineHeight: 30 / 16,
    "& p": {
      marginTop: 0,
      marginBottom: typography.pxToRem(32),
    },
  },
  title: {},
}));

export default useStyles;
