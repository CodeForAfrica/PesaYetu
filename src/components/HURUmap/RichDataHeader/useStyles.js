import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  title: {
    borderBottom: "solid 5px #0067A3",
  },
  description: {
    marginTop: typography.pxToRem(20),
    textTransform: "uppercase",
  },
  image: {
    position: "relative",
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
  },
  pin: {
    position: "relative",
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
    // border: "solid 1px #F0F0F0",
    // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    // backgroundColor: "#F0F0F0",
    // "& img": {
    //   padding: `${typography.pxToRem(8)} !important `,
    // },
  },
  button: {
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
    backgroundColor: "#F0F0F0",
    // border: "solid 1px #F0F0F0",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  label: {
    color: "black",
  },

  underline: {
    border: "solid 1px #F0F0F0",
  },
  formControl: {
    marginLeft: typography.pxToRem(14),
  },
}));

export default useStyles;
