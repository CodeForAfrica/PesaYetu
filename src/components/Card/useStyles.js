import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: ({ squareMedia }) => ({
    backgroundColor: "inherit",
    boxShadow: "none",
    borderRadius: 0,
    padding: squareMedia ? `0 ${typography.pxToRem(36)}` : 0,
    minWidth: typography.pxToRem(350),
    width: "100%",
    [breakpoints.up("md")]: {
      padding: 0,
      minWidth: "unset",
      width: typography.pxToRem(squareMedia ? 278 : 296),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(squareMedia ? 278 : 376),
    },
  }),
  actionArea: {},
  actionAreaFocusHighlight: {},
  actionAreaFocusVisible: {},
  content: {},
  contentDescription: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
  },
  contentLink: {},
  contentTitle: ({ squareMedia }) => ({
    marginTop: typography.pxToRem(squareMedia ? 20 : 40),
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
  }),
  media: {},
  mediaImage: {
    objectFit: "contain !important",
  },
}));

export default useStyles;
