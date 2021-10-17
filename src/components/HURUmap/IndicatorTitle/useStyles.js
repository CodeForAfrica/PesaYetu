import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  header: {
    background: palette.background.paper,
    display: "flex",
    alignItems: "center",
    paddingLeft: typography.pxToRem(16),
    justifyContent: "space-between",
  },
  layout: {
    display: "flex",
    alignItems: "center",
    paddingLeft: typography.pxToRem(16),
    border: `1px solid ${palette.grey.light}`,
  },
  row: {
    height: typography.pxToRem(36),
  },
  cell: {
    borderRight: `1px solid ${palette.background.paper}`,
    "&:last-of-type": {
      borderRight: 0,
    },
  },
  text: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `1px solid ${palette.background.paper}`,
    "&:last-of-type": {
      borderRight: 0,
    },
    "&:hover": {
      background: palette.background.paper,
      border: `2px solid ${palette.grey.main}`,
    },
  },
  activeButton: {
    background: palette.background.paper,
    border: `2px solid ${palette.grey.main}`,
  },
  description: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
    padding: `${typography.pxToRem(18)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(31)} ${typography.pxToRem(16)}`,
  },
  code: {
    background: palette.background.paper,
  },
  shareButton: {
    backgroundColor: `${palette.background.default} !important`,
    filter: "opacity(0.6)",
    width: "100%",
    border: `solid 1px ${palette.background.paper} !important`,
    paddingTop: `${typography.pxToRem(5)} !important`,
    "&:hover": {
      border: "solid 1px #666666 !important",
      backgroundColor: `${palette.background.paper} !important`,
      "& path": {
        "&:first-child": {
          // fill: palette.background.paper,
        },
      },
    },
  },
  icon: {
    "& path": {
      "&:first-child": {
        // fill: palette.background.default,
      },
    },
  },
}));

export default useStyles;
