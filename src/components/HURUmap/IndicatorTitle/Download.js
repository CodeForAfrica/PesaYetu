import { ButtonBase, IconButton, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";
import Papa from "papaparse";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import * as vega from "vega";
import XLSX from "xlsx";

import useStyles from "./useStyles";

import cfalogo from "@/pesayetu/assets/logos/Group4462.svg";
import projectlogo from "@/pesayetu/assets/logos/Group5002.svg";
import { idify } from "@/pesayetu/components/HURUmap/Chart/utils";
import config, { hurumapArgs } from "@/pesayetu/config";

function Download({
  title,
  chartValue,
  handleChartValueChange,
  disableToggle,
  spec,
  source,
  height,
  currentFilters,
  profileNames,
  isCompare,
  ...props
}) {
  const classes = useStyles(props);
  const [view, setView] = useState(null);
  const { palette } = useTheme();

  const {
    indicatorTitle: {
      download: { values, layouts, imageTypes, fileTypes },
    },
  } = hurumapArgs;
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const viewProp = new vega.View(vega.parse(spec), { renderer: "none" });
    setView(viewProp);
  }, [spec]);

  const setImageLayout = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setLayout(type);
  };

  const splitString = (str) => {
    const regex = new RegExp(/\S.{1,42}\S(?= |$)/, "g");
    const chunks = str.match(regex);
    return chunks;
  };

  currentFilters?.forEach(({ name, value }) => {
    const filterName = idify(name);
    view?.signal(`${filterName}Filter`, true);
    view?.signal(`${filterName}FilterValue`, value);
  });

  const chartTitle = splitString(title)?.slice(0, 3);
  const subtitle = currentFilters?.reduce((acc, cur) => {
    return `${acc}${cur.name}: ${cur.value},`;
  }, "");
  const secondaryName = isCompare
    ? ` vs ${profileNames?.secondary?.split("-")[0]}`
    : "";
  const chartSubtitle = `${subtitle} Location: ${profileNames?.primary}${secondaryName}`;

  const handleImageDownload = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    const totalHeight = height + 300; // chartHeight + extra space for legends, logo + title;
    view?.signal("totalHeight", totalHeight);
    view?.signal("chartTitle", chartTitle);
    view?.signal("chartSubtitle", chartSubtitle.toUpperCase());
    view?.signal("chartSource", source ? `Source: ${source}` : "");
    view?.signal("projectLogoUrl", projectlogo);
    view?.signal("logoWidth", 60);
    view?.signal("logoUrl", cfalogo);
    view?.signal("background", palette.common.white);

    if (layout === 0) {
      view?.signal("titleY", 20);
      view?.signal("titleH", 60 + (chartTitle.length - 1) * 15);
      view?.signal("chartY", 50);
      view?.signal("titleGroupY", 0);
      view?.signal("sourceGroupY", totalHeight - 80);
      view?.signal("sourceGroupH", 60);
      view?.signal("sourceY", 30);
    } else {
      view?.signal("titleY", 25);
      view?.signal("titleH", 60 + (chartTitle.length - 1) * 15);
      view?.signal("chartY", 60);
      view?.signal(
        "titleGroupY",
        totalHeight - 80 + (chartTitle.length - 1) * 15
      );
      view?.signal("sourceGroupY", 1);
      view?.signal("sourceGroupH", 60);
      view?.signal("sourceY", 30);
    }
    await view?.runAsync();

    const imgType = type.toLowerCase();
    const url = await view.toImageURL(imgType, config.images.scaleFactor);
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
            {values.map((v) => (
              <Grid
                item
                xs={6}
                key={v}
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
        {imageTypes.map((p) => (
          <Grid item xs={6} key={p} className={classes.button}>
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
        {layouts.map((p, index) => (
          <Grid
            item
            xs={6}
            key={p}
            className={clsx(classes.button, {
              [classes.activeButton]: layout === index,
            })}
          >
            <IconButton
              className={classes.layoutButton}
              onClick={(e) => {
                setImageLayout(e, index);
              }}
            >
              <Image src={p} width={24} height={24} alt="layout" />
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.header)}>
        <Typography className={classes.text}>Download data as:</Typography>
      </Grid>
      <Grid item container className={classes.row}>
        {fileTypes.map((f) => (
          <Grid item xs={4} key={f} className={classes.button}>
            <ButtonBase
              className={classes.text}
              onClick={(e) => handleDataDownload(e, f)}
            >
              {f}
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
  currentFilters: PropTypes.arrayOf(PropTypes.shape({})),
  disableToggle: PropTypes.bool,
  chartValue: PropTypes.oneOf(["Value", "Percentage"]),
  handleChartValueChange: PropTypes.func,
  height: PropTypes.number,
  source: PropTypes.string,
  profileNames: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }),
  isCompare: PropTypes.bool,
};

Download.defaultProps = {
  title: undefined,
  spec: undefined,
  currentFilters: undefined,
  disableToggle: false,
  chartValue: undefined,
  handleChartValueChange: undefined,
  height: 450,
  source: undefined,
  profileNames: undefined,
  isCompare: undefined,
};

export default Download;
