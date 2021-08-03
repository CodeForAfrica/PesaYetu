import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  cardMedia: (props) => {
    if (props.imageMargin) {
      return {
        margin: `
      -${typography.pxToRem((254 - 216.89) / 2)}
      -${typography.pxToRem((390 - 350) / 2)}
      0
      -${typography.pxToRem((390 - 350) / 2)}
    `,
        height: typography.pxToRem(215),
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
      };
    }
    return {
      height: typography.pxToRem(215),
      position: "relative",
      [breakpoints.up("md")]: {
        height: typography.pxToRem(183),
        width: typography.pxToRem(296),
      },
      [breakpoints.up("lg")]: {
        height: typography.pxToRem(231),
        width: typography.pxToRem(376),
      },
    };
  },
  cardMedias: {
    // TODO(kilemensi): Confirm if all image will have invisible margins
    //                  around them. If yes, leave this as is. Otherwise
    //                  remove all negative margins calculations
    height: typography.pxToRem(215),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(183),
      width: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(231),
      width: typography.pxToRem(376),
    },
  },
  content: {
    padding: 0,
  },
}));

export default useStyles;
