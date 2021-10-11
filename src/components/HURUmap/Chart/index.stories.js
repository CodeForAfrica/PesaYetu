/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Chart from "@/pesayetu/components/HURUmap/Chart";

export default {
  title: "Components/HURUmap/Chart",
};

const Template = ({ ...args }) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Population by Age Group",
  geoCode: "KE",
  indicator: {
    id: 203,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit habitasse iaculis litora, placerat scelerisque class penatibus purus eget quis sapien id vitae, proin odio velit facilisis volutpat cum luctus curae integer. Ornare dignissim montes donec nostra dui.",
    choropleth_method: "subindicator",
    last_updated_at: "2021-08-04T10:41:20.292118Z",
    metadata: {
      source: "StatsSA Census 2011",
      description: "",
      url: "https://pesayetu.dev.codeforafrica.org",
      licence: {
        name: null,
        url: null,
      },
      primary_group: "gender",
      groups: [
        {
          subindicators: [
            "20-24",
            "15-24 (Intl)",
            "15-35 (ZA)",
            "15-19",
            "25-29",
            "30-35",
          ],
          dataset: 241,
          name: "age",
          can_aggregate: false,
          can_filter: true,
        },
        {
          subindicators: ["Female", "Male"],
          dataset: 241,
          name: "gender",
          can_aggregate: true,
          can_filter: true,
        },
        {
          subindicators: [
            "Xitsonga",
            "Sign language",
            "isiNdebele",
            "Setswana",
            "Sesotho",
            "English",
            "Other",
            "Siswati",
            "Afrikaans",
            "Sepedi",
            "Tshivenda",
            "isiXhosa",
            "isiZulu",
          ],
          dataset: 241,
          name: "language",
          can_aggregate: true,
          can_filter: true,
        },
        {
          subindicators: [
            "Black African",
            "Indian or Asian",
            "Other",
            "Coloured",
            "White",
          ],
          dataset: 241,
          name: "race",
          can_aggregate: true,
          can_filter: true,
        },
      ],
    },
    content_type: "indicator",
    dataset_content_type: "quantitative",
    chart_configuration: {
      chart_type: "treemap",
      types: {
        Value: {
          formatting: ",.0f",
        },
        Percentage: {
          maxX: 1,
          minX: 0,
        },
      },
      defaultType: "Value",
      disableToggle: false,
    },
    data: [
      {
        id: 8,
        name: "Total Land",
      },
      {
        id: 9,
        name: "rural",
        parent: 8,
      },
      {
        id: 1,
        name: "urban",
        parent: 8,
      },
      {
        id: 2,
        name: "Agriculture",
        parent: 1,
        size: 67,
      },
      {
        id: 3,
        name: "Forestry",
        parent: 1,
      },
      {
        id: 4,
        name: "Commercial",
        parent: 1,
        size: 39,
      },
      {
        id: 5,
        name: "Residential",
        parent: 1,
        size: 38,
      },
      {
        id: 6,
        name: "Transport",
        parent: 1,
        size: 67,
      },
      {
        id: 7,
        name: "Recreational",
        parent: 1,
        size: 43,
      },
    ],
  },
};
