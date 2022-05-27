import { format } from "d3-format";

import { hurumap } from "@/pesayetu/config";

function formatNumericalValue({ value, method }) {
  const { formatting } = hurumap;
  let fn = format(formatting.percentage);
  // Percentage formatting multiplies by 100 first.
  // see: https://github.com/d3/d3-format#locale_format
  let multipler = 100;
  if (method === "absolute_value") {
    fn = format(formatting.integer);
    multipler = 1;
  } else if (method === "decimal") {
    multipler = 1;
    fn = format(formatting.decimal);
  }

  return fn(value / multipler);
}

export default formatNumericalValue;
