import { format } from "d3-format";

import { hurumap } from "@/pesayetu/config";

function formatNumericalValue({ value, method }) {
  const { formatting } = hurumap;
  let fn = format(formatting.percentage);
  if (method === "absolute_value") {
    fn = format(formatting.integer);
  } else if (method === "decimal") {
    fn = format(formatting.decimal);
  }

  return fn(value);
}

export default formatNumericalValue;
