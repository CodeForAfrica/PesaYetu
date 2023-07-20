import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
  },
  section: {},
  title: {},
  card: {
    marginTop: typography.pxToRem(40),
  },
  cardContentDescription: {
    "& .bold": {
      fontWeight: "bold",
    },
  },
  container: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

export default useStyles;
