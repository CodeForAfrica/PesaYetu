import { Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Share({ title, geoCode, indicatorId, ...props }) {
  const classes = useStyles(props);

  const code = `<iframe frameBorder="0" style="height:100%; width: 100%"
  src="${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}"></iframe>
  `;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Embed on your website:</Typography>
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <TextField
          value={code}
          InputProps={{ classes: { input: clsx(classes.code, classes.text) } }}
        />
      </Grid>
    </Grid>
  );
}

Share.propTypes = {
  title: PropTypes.string,
  geoCode: PropTypes.string,
  indicatorId: PropTypes.number,
};

Share.defaultProps = {
  title: undefined,
  geoCode: undefined,
  indicatorId: undefined,
};

export default Share;
