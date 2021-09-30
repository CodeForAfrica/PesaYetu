import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    textAlign: "right",
    background: palette.background.paper,
    "& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label":
      {
        backgroundColor: "unset",
      },
    "& .MuiTreeItem-iconContainer": {
      width: 0,
    },
  },
  label: {
    marginRight: typography.pxToRem(20),
    height: typography.pxToRem(38),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontWeight: 500,
  },
  childLabel: {
    fontWeight: 300,
  },
  icon: {
    marginLeft: typography.pxToRem(20),
    fill: palette.grey.main,
    width: typography.pxToRem(19),
  },
  tree: {},
  expanded: {
    "& .MuiCollapse-root": {
      marginLeft: 0,
      borderTop: `1px solid ${palette.grey.main}`,
      borderBottom: `1px solid ${palette.grey.main}`,
    },
    "&> .MuiTreeItem-content": {
      borderRightColor: palette.primary.main,
      borderRightWidth: typography.pxToRem(2),
      borderRightStyle: "Solid",
      backgroundColor: palette.background.default,
    },
    "& $icon": {
      fill: "#666666",
    },
  },
}));

export default useStyles;
