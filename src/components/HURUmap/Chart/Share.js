import { Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ShareBar from "@/pesayetu/components/ShareBar";

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
}));

function Share({ title, specs, ...props }) {
  const classes = useStyles(props);

  const code = `<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <script src="https://cdn.jsdelivr.net/npm/vega@5.10.1"></script>
      <script src="https://cdn.jsdelivr.net/npm/vega-lite@4.10.1"></script>
      <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.5.2"></script>
    </head>
    <body>
      <div id="vis"></div>
  
      <script type="text/javascript">
        var yourVlSpec = ${JSON.stringify(specs)} ;
        vegaEmbed('#vis', yourVlSpec);
      </script>
    </body>
  </html>
  `;
  return (
    <Grid container className={classes.root}>
      <ShareBar
        socialLinks={[
          { name: "facebook", alt: "facebook" },
          { name: "twitter", alt: "twitter" },
          { name: "linkedin", alt: "linkedin" },
          { name: "share", alt: "share" },
          { name: "email", alt: "email" },
          { name: "code", alt: "code" },
        ]}
        title={title}
      />
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Embed on your website:</Typography>
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <TextField value={code} />
      </Grid>
    </Grid>
  );
}

Share.propTypes = {
  title: PropTypes.string,
  specs: PropTypes.shape({}),
};

Share.defaultProps = {
  title: undefined,
  specs: undefined,
};

export default Share;
