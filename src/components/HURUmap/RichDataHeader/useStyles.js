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
    border: "solid 1px #F0F0F0",
    backgroundColor: "#F0F0F0",
    "& img": {
      padding: `${typography.pxToRem(8)} !important `,
    },
  },

  underline: {
    border: "solid 1px #F0F0F0",
  },
}));

export default useStyles;
