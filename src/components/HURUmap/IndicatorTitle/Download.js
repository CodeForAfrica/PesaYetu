import { ButtonBase, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Papa from "papaparse";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import * as vega from "vega";
import XLSX from "xlsx";

import useStyles from "./useStyles";

import logo from "@/pesayetu/assets/logos/Group4462.svg";

function Download({
  title,
  chartValue,
  handleChartValueChange,
  disableToggle,
  spec,
  source,
  height,
  ...props
}) {
  const classes = useStyles(props);
  const [view, setView] = useState(null);
  const [layout, setLayout] = useState("Layout1");

  useEffect(() => {
    const viewProp = new vega.View(vega.parse(spec), { renderer: "none" });
    setView(viewProp);
  }, [spec]);

  const setImageLayout = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setLayout(type);
  };

  const handleImageDownload = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    const totalHeight = height + 240; // chartHeight + extra space for legends, logo + title;
    view?.signal("totalHeight", totalHeight);
    view?.signal("chartTitle", title);
    view?.signal("chartSubtitle", "");
    view?.signal("chartSource", source ? `Source: ${source}` : "");
    view?.signal("projectName", ["County Development", "Index Statistics"]);
    view?.signal("logoWidth", 60);
    view?.signal("logoUrl", logo);

    if (layout.toLowerCase() === "layout1") {
      view?.signal("titleY", 0);
      view?.signal("titleH", 40);
      view?.signal("titleGroupY", 0);
      view?.signal("sourceGroupY", totalHeight - 100);
      view?.signal("sourceGroupH", 40);
      view?.signal("sourceY", 0);
    } else {
      view?.signal("titleY", 40);
      view?.signal("titleH", 50);
      view?.signal("titleGroupY", totalHeight - 100);
      view?.signal("sourceGroupY", 1);
      view?.signal("sourceGroupH", 60);
      view?.signal("sourceY", 30);
    }
    await view?.runAsync();

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
      {!disableToggle && (
        <>
          <Grid item container xs={12} className={classes.row}>
            {["Percentage", "Value"].map((v) => (
              <Grid
                item
                xs={6}
                index={v}
                className={clsx(classes.button, {
                  [classes.activeButton]: chartValue === v,
                })}
              >
                <ButtonBase
                  className={classes.text}
                  onClick={() => handleChartValueChange(v)}
                >
                  {v}
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} className={clsx(classes.row, classes.header)}>
            <Typography className={classes.text}>Download chart as:</Typography>
          </Grid>
        </>
      )}
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
          <Grid
            item
            xs={6}
            index={p}
            className={clsx(classes.button, {
              [classes.activeButton]: layout === p,
            })}
          >
            <ButtonBase
              className={classes.text}
              onClick={(e) => {
                setImageLayout(e, p);
              }}
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
  spec: PropTypes.shape({}),
  disableToggle: PropTypes.bool,
  chartValue: PropTypes.oneOf(["Value", "Percentage"]),
  handleChartValueChange: PropTypes.func,
  height: PropTypes.number,
  source: PropTypes.string,
};

Download.defaultProps = {
  title: undefined,
  spec: undefined,
  disableToggle: false,
  chartValue: undefined,
  handleChartValueChange: undefined,
  height: 450,
  source: undefined,
};

export default Download;
