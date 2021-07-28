import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: typography.pxToRem(30),
    fontWeight: 900,
    [breakpoints.up("md")]: {
      fontSize: typography.pxToRem(48),
      marginTop: typography.pxToRem(20),
    },
  },

  section: {
    // paddingTop: typography.pxToRem(102),
    // paddingBottom: typography.pxToRem(163),
    display: "flex",
  },
  image: {
    width: "max-content",
  },
  imageContainer: {
    height: typography.pxToRem(140),
    width: typography.pxToRem(140),
    position: "relative",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: typography.pxToRem(16),
    [breakpoints.up("lg")]: {
      display: "block",
      marginLeft: typography.pxToRem(2),
    },
  },
  text: {
    marginLeft: typography.pxToRem(30),
    fontSize: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(20),
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: typography.pxToRem(80),
    marginBottom: typography.pxToRem(163),
  },
  container: {
    flexDirection: "column",
    paddingTop: typography.pxToRem(102),

    [breakpoints.up("lg")]: {
      // flexDirection: "row",
      flexDirection: "column",
    },
  },
  block: {
    display: "flex",
  },
  descriptionSection: {
    backgroundColor: "#0067A3",
    color: "#fff",
    paddingLeft: typography.pxToRem(30),
    paddingRight: typography.pxToRem(30),
    marginLeft: typography.pxToRem(21),
    width: typography.pxToRem(480),
  },
  title: {
    marginBottom: typography.pxToRem(20),
    marginTop: typography.pxToRem(50),
    fontSize: typography.pxToRem(30),
  },
  description: {},
  // transition: (props) => ({
  //   display: props.checked ? "block" : "none",
  // }), // NOTE: This styling destructs page layout, investigate
}));

export default useStyles;
