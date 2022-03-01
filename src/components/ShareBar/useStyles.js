import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    display: "flex",
  },
  children: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: typography.pxToRem(20),
    fontSize: typography.pxToRem(16),
  },
  tooltip: {
    marginTop: 0,
    backgroundColor: palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
  icon: {
    marginLeft: typography.pxToRem(1),
  },
  copied: {
    padding: "0rem 1rem",
  },
  copyButton: {
    padding: 0,
    background: "#f8f8f8",
    borderRadius: 0,
    textTransform: "none",
    height: "48px",
    width: "48px",
    "&:hover": {
      background: "#f8f8f8",
      borderRadius: 0,
      border: 0,
      fontWeight: "bold",
    },
    "&::after": {
      content: '""',
      display: "none",
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    "&:hover::after": {
      content: '""',
      display: "none",
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  },
}));

export default useStyles;
