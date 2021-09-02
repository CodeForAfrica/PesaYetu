import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Vega } from "react-vega";
import { Handler } from "vega-tooltip";

function BarChart({ data, title }) {
  const spec = {
    // $schema: 'https://vega.github.io/schema/vega/v5.json',
    width: 400,
    height: 600,
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
        name: "yscale",
        type: "band",
        domain: { data: "table", field: "race" },
        range: "height",
        padding: 0.2,
      },
      {
        name: "xscale",
        type: "linear",
        domain: { data: "table", field: "count" },
        range: "width",
        round: true,
        zero: true,
        nice: true,
      },
      {
        name: "color",
        type: "ordinal",
        domain: { data: "table", field: "gender" },
        range: { scheme: "race20" },
      },
    ],

    axes: [
      {
        orient: "left",
        scale: "yscale",
        tickSize: 0,
        labelPadding: 4,
        zindex: 1,
      },
      { orient: "bottom", scale: "xscale" },
    ],

    marks: [
      {
        type: "group",

        from: {
          facet: {
            data: "table",
            name: "facet",
            groupby: "race",
          },
        },

        encode: {
          enter: {
            y: { scale: "yscale", field: "race" },
          },
        },

        signals: [{ name: "height", update: "bandwidth('yscale')" }],

        scales: [
          {
            name: "pos",
            type: "band",
            range: "height",
            domain: { data: "facet", field: "gender" },
          },
        ],

        marks: [
          {
            name: "bars",
            from: { data: "facet" },
            type: "rect",
            encode: {
              enter: {
                y: { scale: "pos", field: "gender" },
                height: { scale: "pos", band: 1 },
                x: { scale: "xscale", field: "count" },
                x2: { scale: "xscale", value: 0 },
                fill: { scale: "color", field: "gender" },
              },
            },
          },
          {
            type: "text",
            from: { data: "bars" },
            encode: {
              enter: {
                x: { field: "x2", offset: -5 },
                y: { field: "y", offset: { field: "height", mult: 0.5 } },
                fill: [
                  {
                    test: "contrast('white', datum.fill) > contrast('black', datum.fill)",
                    value: "white",
                  },
                  { value: "black" },
                ],
                align: { value: "right" },
                baseline: { value: "middle" },
                text: { field: "datum.count" },
              },
            },
          },
        ],
      },
    ],
  };
  useEffect(() => {
    ReactDOM.render(
      <Vega
        spec={spec}
        data={{ table: data }}
        tooltip={new Handler().call}
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
  }, []);

  return <div id="bar-container" />;
}
BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

BarChart.defaultProps = {
  data: undefined,
  title: undefined,
};
export default BarChart;
