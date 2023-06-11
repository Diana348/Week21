import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ data, options, visible }) => {
  return (
    <div className="chart-block">
      {" "}
      {visible ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"800px"}
        />
      ) : (
        <h2>INVISIBLE</h2>
      )}
    </div>
  );
};

export default PieChart;
