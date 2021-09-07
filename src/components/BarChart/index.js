import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Vega } from "react-vega";

function BarChart({ data, title }) {
  const spec = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 768,
    data: [{ name: "table" }],
    signals: [
      {
        name: "tooltip",
        value: {},
        on: [
          { events: "rect:mouseover", update: "datum" },
          { events: "rect:mouseout", update: "{}" },
        ],
      },
    ],
    scales: [
      {
        name: "xscale",
        type: "band",
        domain: { data: "table", field: "race" },
        range: "width",
      },
      {
        name: "yscale",
        domain: { data: "table", field: "count" },
        nice: true,
        range: "height",
      },
    ],

    axes: [
      { orient: "bottom", scale: "xscale" },
      { orient: "left", scale: "yscale" },
    ],

    marks: [
      {
        type: "rect",
        from: { data: "table" },
        encode: {
          enter: {
            x: { scale: "xscale", field: "race", offset: 1 },
            width: { scale: "xscale", band: 1, offset: -1 },
            y: { scale: "yscale", field: "count" },
            y2: { scale: "yscale", value: 0 },
          },
          update: {
            fill: { value: "steelblue" },
          },
          hover: {
            fill: { value: "red" },
          },
        },
      },
      {
        type: "text",
        encode: {
          enter: {
            align: { value: "center" },
            baseline: { value: "bottom" },
            fill: { value: "#333" },
          },
          update: {
            x: { scale: "xscale", signal: "tooltip.race", band: 0.5 },
            y: { scale: "yscale", signal: "tooltip.count", offset: -2 },
            text: { signal: "tooltip.count" },
            fillOpacity: [
              { test: "datum === tooltip", value: 0 },
              { value: 1 },
            ],
          },
        },
      },
    ],
  };
  useEffect(() => {
    ReactDOM.render(
      <Vega
        spec={spec}
        data={{ table: data }}
        actions={{
          export: true,
          source: false,
          compiled: false,
          editor: false,
        }}
        downloadFileName={title}
      />,
      document.getElementById("bar-container")
    );
  }, [data]);

  return <div id="bar-container" />;
}

BarChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

BarChart.defaultProps = {
  title: undefined,
  data: undefined,
};

export default BarChart;
