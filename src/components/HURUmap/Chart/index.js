import PropTypes from "prop-types";
import React, { useEffect } from "react";

import renderChart from "./renderChart";

function Chart({ indicator }) {
  // const [ chartView, setChartView] = useState(null);
  useEffect(() => {
    async function plotChart(data) {
      await renderChart("#chart-container", data);
      // setChartView(result);
    }
    if (indicator) {
      plotChart(indicator);
    }
  }, [indicator]);

  return <div id="chart-container" />;
}

Chart.propTypes = {
  indicator: PropTypes.shape({}),
};

Chart.defaultProps = {
  indicator: undefined,
};

export default Chart;
