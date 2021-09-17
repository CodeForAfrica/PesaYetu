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
  inputLabel: {
    position: "inherit",
    "&.MuiInputLabel-formControl": {
      transform: "inherit",
    },
  },
  label: {
    fontSize: typography.pxToRem(10),
    fontWeight: "700",
    color: "#666666",
    marginBottom: typography.pxToRem(3),
  },

  underline: {
    border: "solid 1px #F0F0F0",
  },
  select: {
    backgroundColor: "#F8F8F8",
    marginTop: "0 !important",
    minWidth: typography.pxToRem(200),
  },
  placeholder: {
    marginLeft: typography.pxToRem(15),
    color: "#959696",
  },
  formControl: {
    marginLeft: typography.pxToRem(14),

    // "&.MuiInput-formControl": {
    //   marginTop: "0 !important",
    // },
  },
}));

export default useStyles;
