import data from "./data";
import signals from "./signals";

import { defaultConfig } from "@/pesayetu/components/HURUmap/Chart/properties";
import { createFiltersForGroups } from "@/pesayetu/components/HURUmap/Chart/utils";
import theme from "@/pesayetu/theme";

export default function Scope(
  primaryData,
  metadata,
  config,
  secondaryData,
  primaryParentData,
  secondaryParentData,
  chartType
) {
  const { primary_group: primaryGroup, groups } = metadata;

  const { signals: filterSignals, filters } = createFiltersForGroups(groups);

  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A",
    config: defaultConfig,
    autosize: { type: "fit-x", contains: "padding" },
    padding: 5,
    width: { signal: "width" },
    height: { signal: "totalHeight" },
    data: [
      ...data("primary", primaryData, filters),
      ...data("primary_parent", primaryParentData, filters, [
        {
          type: "lookup",
          from: "primary_formatted",
          key: { signal: "mainGroup" },
          fields: [{ signal: "mainGroup" }],
          as: ["primary"],
        },
      ]),
      ...data("secondary", secondaryData, filters),
      ...data("secondary_parent", secondaryParentData, filters, [
        {
          type: "lookup",
          from: "secondary_formatted",
          key: { signal: "mainGroup" },
          fields: [{ signal: "mainGroup" }],
          as: ["secondary"],
        },
      ]),
    ],
    signals: signals(
      chartType,
      filterSignals,
      primaryGroup,
      [primaryGroup],
      config
    ),
    marks: [
      {
        type: "group",
        name: "titleGroup",
        encode: {
          enter: {
            y2: { signal: "titleGroupY" },
            height: { signal: "titleH" },
          },
        },
        marks: [
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "chartTitle" },
              },
              update: {
                opacity: { value: 1 },
                x2: { signal: "titleX" },
                y2: { signal: "titleY" },
                fontSize: { signal: "titlefontSize" },
                fontWeight: { signal: "titlefontWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: theme.palette.chart.text.primary },
                text: { signal: "chartSubtitle" },
              },
              update: {
                opacity: { value: 1 },
                x: { signal: "subtitleX" },
                y: { signal: "subtitleY" },
                fontSize: { signal: "subtitlefontSize" },
                fontWeight: { signal: "subtitlefontWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "projectName" },
              },
              update: {
                align: { signal: "projectAlign" },
                x: { signal: "projectX" },
                y: { signal: "projectY" },
                fill: { signal: "projectFill" },
                fontSize: { signal: "subtitlefontSize" },
                fontWeight: { signal: "subtitlefontWeight" },
              },
            },
          },
          {
            type: "rule",
            encode: {
              enter: {
                x: { value: 0 },
                x2: { signal: "titleH > 0 ? width: 0" },
                y: { signal: "titleH" },
                y2: { signal: "titleH" },
                stroke: { value: theme.palette.chart.text.primary },
                strokeWidth: { value: 2 },
                strokeOpacity: { signal: "titleY > 50 ? 0.1: 1" },
              },
            },
          },
        ],
      },
      {
        type: "group",
        name: "sourceGroup",
        encode: {
          enter: {
            y2: { signal: "sourceGroupY" },
            height: { signal: "sourceGroupH" },
          },
        },
        marks: [
          {
            type: "rule",
            encode: {
              enter: {
                x: { value: 0 },
                x2: { signal: "sourceY > 0 ? width: 0" },
                y: { signal: "sourceY" },
                y2: { signal: "sourceY" },
                stroke: { value: theme.palette.chart.text.primary },
                strokeWidth: { value: 2 },
                strokeOpacity: { signal: "sourceY > 50 ? 0.1: 1" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "chartSource" },
              },
              update: {
                opacity: { value: 1 },
                x: { signal: "sourceX" },
                y: { signal: "sourceY > 50 ? sourceY + 20: 0" },
                fontSize: { signal: "sourceFontSize" },
                fontWeight: { signal: "sourceFontWeight" },
              },
            },
          },
          {
            type: "image",
            encode: {
              enter: {
                url: { signal: "logoUrl" },
              },
              update: {
                x: { signal: "logoX" },
                y: { signal: "sourceY > 50 ? sourceY + 20: 0" },
                width: { signal: "logoWidth" },
                aspect: { signal: "logoAspect" },
              },
            },
          },
        ],
      },
    ],
  };
}
