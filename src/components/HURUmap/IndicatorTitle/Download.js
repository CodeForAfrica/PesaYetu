import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Papa from "papaparse";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import XLSX from "xlsx";

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

function Download({ title, view: viewProp, setChartValue, ...props }) {
  const classes = useStyles(props);

  const [view, setView] = useState(null);
  useEffect(() => {
    setView(viewProp);
  }, [viewProp]);

  const handleImageDownload = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    const imgType = type.toLowerCase();

    const url = await view.toImageURL(imgType);
    const link = document.createElement("a");
    link.download = `${title}.${imgType}`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDataDownload = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    const fileType = type.toLowerCase();

    const data = view.data("table");
    const fileName = `${title}.${fileType}`;
    let href;

    if (fileType === "json") {
      href = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
      )}`;
    } else if (fileType === "csv") {
      href = `data:text/csv;charset=utf-8,${Papa.unparse(data)}`;
    } else {
      const table = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new(); // make Workbook of Excel
      // add Worksheet to Workbook
      XLSX.utils.book_append_sheet(wb, table, title);
      // export Excel file
      XLSX.writeFile(wb, fileName);
      return;
    }

    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Grid container className={classes.root}>
      <Grid item container xs={12} className={classes.row}>
        {["Percentage", "Value"].map((v) => (
          <Grid item xs={6} index={v} className={classes.button}>
            <ButtonBase
              className={clsx(classes.text)}
              onClick={() => setChartValue(v)}
            >
              {v}
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.header)}>
        <Typography className={classes.text}>Download chart as:</Typography>
      </Grid>
      <Grid item container className={classes.row}>
        {["PNG", "SVG"].map((p) => (
          <Grid item xs={6} index={p} className={classes.button}>
            <ButtonBase
              className={classes.text}
              onClick={(e) => handleImageDownload(e, p)}
            >
              {p}
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Layout option:</Typography>
      </Grid>
      <Grid item container className={classes.row}>
        {["Layout1", "Layout2"].map((p) => (
          <Grid item xs={6} index={p} className={classes.button}>
            <ButtonBase
              className={classes.text}
              onClick={() => setChartValue(p)}
            >
              {p}
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.header)}>
        <Typography className={classes.text}>Download data as:</Typography>
      </Grid>
      <Grid item container className={classes.row}>
        {["CSV", "XLSX", "JSON"].map((d) => (
          <Grid item xs={4} index={d} className={classes.button}>
            <ButtonBase
              className={classes.text}
              onClick={(e) => handleDataDownload(e, d)}
            >
              {d}
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

Download.propTypes = {
  title: PropTypes.string,
  view: PropTypes.shape({
    toImageURL: PropTypes.func,
    data: PropTypes.func,
  }),
  setChartValue: PropTypes.func,
};

Download.defaultProps = {
  title: undefined,
  view: undefined,
  setChartValue: undefined,
};

export default Download;
