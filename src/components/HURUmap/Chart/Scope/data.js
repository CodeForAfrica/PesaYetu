export default function Data(name, data, filters, transformArr = []) {
  return [
    {
      name,
      values: data,
      transform: [...filters],
    },
    {
      name: `${name}_formatted`,
      source: name,
      transform: [
        {
          type: "aggregate",
          ops: ["sum"],
          as: ["count"],
          fields: ["count"],
          groupby: { signal: "groups" },
        },
        {
          type: "joinaggregate",
          as: ["TotalCount"],
          ops: ["sum"],
          fields: ["count"],
        },
        {
          type: "formula",
          expr: "datum.count/datum.TotalCount",
          as: "percentage",
        },
        {
          type: "extent",
          field: "percentage",
          signal: `${name}_percentage_extent`,
        },
        {
          type: "extent",
          field: "count",
          signal: `${name}_value_extent`,
        },
        ...transformArr,
      ],
    },
  ];
}
