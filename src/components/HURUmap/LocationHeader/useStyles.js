import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
    paddingTop: typography.pxToRem(20),
  },
  titleContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    borderBottom: ({ variant }) =>
      `solid 5px ${
        variant === "secondary" ? palette.secondary.main : palette.primary.main
      }`,
    marginBottom: typography.pxToRem(20),
  },
  description: {
    textTransform: "uppercase",
    borderBottom: `solid 1px ${palette.divider}`,
    paddingBottom: typography.pxToRem(10),
  },
  icon: {
    position: "relative",
    height: typography.pxToRem(20),
    minWidth: typography.pxToRem(20),
  },
  button: {
    borderRadius: "50%",
    backgroundColor: palette.grey.light,
    width: typography.pxToRem(44),
    height: typography.pxToRem(44),
    minWidth: typography.pxToRem(44),
    boxShadow: "none",
  },
  closeButton: {
    marginLeft: typography.pxToRem(20),
    maxHeight: typography.pxToRem(44),
    maxWidth: typography.pxToRem(44),
    overflow: "hidden",
    padding: 0,
  },
  closeButtonIcon: {
    color: palette.grey.light,
    "&:hover": {
      color: "#666",
      "& .Component_108-1_svg__b": {
        stroke: palette.common.white,
      },
    },
  },
}));

export default useStyles;
