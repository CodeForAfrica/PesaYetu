import { Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  header: {
    background: palette.background.paper,
    display: "flex",
    alignItems: "center",
    paddingLeft: typography.pxToRem(16),
  },
  layout: {
    display: "flex",
    alignItems: "center",
    paddingLeft: typography.pxToRem(16),
    border: `1px solid ${palette.grey.light}`,
  },
  row: {
    height: typography.pxToRem(36),
  },
  cell: {
    borderRight: `1px solid ${palette.background.paper}`,
    "&:last-of-type": {
      borderRight: 0,
    },
  },
  text: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `1px solid ${palette.background.paper}`,
    "&:last-of-type": {
      borderRight: 0,
    },
    "&:hover": {
      background: palette.background.paper,
      border: `2px solid ${palette.grey.main}`,
    },
  },
  code: {
    background: palette.background.paper,
  },
}));

function Share({ title, spec, ...props }) {
  const classes = useStyles(props);

  const code = `<iframe sandbox="allow-popups allow-scripts allow-forms allow-same-origin"
  style="height:100%; width: 100%" srcdoc="<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
      <script src="https://cdn.jsdelivr.net/npm/vega-lite@4"></script>
      <script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
    </head>
    <body>
      <div id="vis" style="position: fixed;"></div>
  
      <script type="text/javascript">
        const spec = ${JSON.stringify(spec)} ;
        const view = new vega.View(view.parse(spec), {
          renderer: "canvas",
          container: "#vis",
          hover: true,
        });
      </script>
    </body>
  </html>" scrolling="no"></iframe>
  `;
  console.log(code);
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
  spec: PropTypes.shape({}),
};

Share.defaultProps = {
  title: undefined,
  spec: undefined,
};

export default Share;
