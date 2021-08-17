import { makeStyles } from "@material-ui/core/styles";

import bg from "@/pesayetu/assets/images/Mask Group 8.png";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: "#F0F0F0",
    backgroundImage: `url('${bg}')`,
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: typography.pxToRem(30),
    fontWeight: 900,
    [breakpoints.up("md")]: {
      fontSize: typography.pxToRem(30),
      marginTop: typography.pxToRem(20),
    },
    [breakpoints.up("lg")]: {
      fontSize: typography.pxToRem(48),
    },
    "& .highlight": {
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 30%, #0067A31A 50% )",
      display: "inline-block",
    },
  },

  desktopTitle: {
    marginTop: typography.pxToRem(76),
    marginBottom: typography.pxToRem(20),
    fontSize: typography.pxToRem(30),
    fontWeight: "bold",
  },

  container: {
    flexWrap: "nowrap",
    // backgroundImage: `url('${bg})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  },
  section: {},
  image: {
    width: "max-content",
  },
  imageContainer: {
    height: typography.pxToRem(88),
    width: typography.pxToRem(88),
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(140),
      width: typography.pxToRem(140),
    },
    position: "relative",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: typography.pxToRem(16),
    [breakpoints.up("lg")]: {
      display: "block",
      marginLeft: typography.pxToRem(2),
      width: typography.pxToRem(140),
    },
  },
  text: {
    marginLeft: typography.pxToRem(30),
    fontSize: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(20),
      marginLeft: 0,
      textAlign: "center",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: typography.pxToRem(80),
    marginBottom: typography.pxToRem(163),
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(900),
    },
  },
  // refine these styles
  mdImageContainer: {
    marginTop: typography.pxToRem(16),
  },
  mdIndicatorContainer: {},
  mdText: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    marginLeft: typography.pxToRem(30),
  },

  mdItems: {
    padding: `${typography.pxToRem(43)} 0 ${typography.pxToRem(
      40
    )} ${typography.pxToRem(55)}`,
  },
  mdDescription: {
    backgroundColor: "#0067A3",
    marginTop: typography.pxToRem(70),
    marginBottom: typography.pxToRem(70),
    color: "#fff",
    paddingRight: typography.pxToRem(30),
    paddingLeft: typography.pxToRem(30),
  },

  smTitle: {
    paddingBottom: typography.pxToRem(40),
  },

  smContainer: {
    padding: `${typography.pxToRem(40)} 0`,
  },
  smItem: {
    display: "flex",
    minWidth: typography.pxToRem(260),
  },
  indicatorsContainer: {
    flexDirection: "column",
    paddingTop: typography.pxToRem(102),

    [breakpoints.up("lg")]: {
      width: ({ checked }) => (checked ? "90%" : "100%"), //
      alignItems: "center",
      transition: "width 4s linear",
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
  slide: {
    backgroundColor: "#0067A3",
    color: "#fff",
    minWidth: typography.pxToRem(480),
    width: typography.pxToRem(480),
    padding: `0 ${typography.pxToRem(84)}`,
    // display: props.checked ? "block" : "none",
  }, // NOTE: This styling destructs page layout, investigate
}));

export default useStyles;
