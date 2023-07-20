import { Box, CircularProgress } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  box: {
    justifyContent: "center",
    height: typography.pxToRem(50),
  },
}));

function Loading() {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }} className={classes.box}>
      <CircularProgress className={classes.progress} />
    </Box>
  );
}

export default Loading;
