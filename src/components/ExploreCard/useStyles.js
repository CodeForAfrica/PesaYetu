import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    minWidth: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      minWidth: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(356),
      maxHeight: typography.pxToRem(400),
    },
    "& .MuiCardContent-root:last-child": {
      padding: 0,
    },
    boxShadow: "none",
    backgroundColor: "unset",
  },
  cardMedia: {
    // TODO(kilemensi): Confirm if all image will have invisible margins
    //                  around them. If yes, leave this as is. Otherwise
    //                  remove all negative margins calculations
    margin: `
      -${typography.pxToRem((254 - 216.89) / 2)}
      -${typography.pxToRem((390 - 350) / 2)}
      0
      -${typography.pxToRem((390 - 350) / 2)}
    `,
    height: typography.pxToRem(254),
    width: typography.pxToRem(390),
    position: "relative",
    [breakpoints.up("md")]: {
      margin: `
        -${typography.pxToRem((((254 - 216.89) / 2) * 183.43) / 216.89)}
        -${typography.pxToRem((((390 - 350) / 2) * 296) / 350)}
        0
        -${typography.pxToRem((((390 - 350) / 2) * 296) / 350)}
      `,
      height: typography.pxToRem(
        183.43 + (((254 - 216.89) / 2) * 183.43) / 216.89
      ),
      width: typography.pxToRem(296 + (((390 - 350) / 2) * 296) / 350),
    },
    [breakpoints.up("lg")]: {
      margin: `
        -${typography.pxToRem((((254 - 216.89) / 2) * 220.61) / 216.89)}
        -${typography.pxToRem((((390 - 350) / 2) * 296) / 350)}
        0
        -${typography.pxToRem((((390 - 350) / 2) * 296) / 350)}
      `,
      height: typography.pxToRem(
        220.61 + (((254 - 216.89) / 2) * 220.61) / 216.89
      ),
      width: typography.pxToRem(356 + (((390 - 350) / 2) * 296) / 350),
    },
  },
  image: {
    objectFit: "contain",
  },
  title: {
    marginTop: typography.pxToRem(20),
    marginBottom: typography.pxToRem(20),
    color: "#000",
  },
  description: {
    color: "#000",
  },
}));

export default useStyles;
