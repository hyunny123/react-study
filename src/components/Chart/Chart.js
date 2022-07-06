import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //dataPoints를 JSX요소에 맵핑하지 않고 대신 객체에서 숫자로 변환
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //max는 인자들의 목록 배열을 원하는 것이 아님.
  //max 메소드는 12개의 인자를 받는다. 12개의 인자는 배열에서 스트레드를 통해 값을 가져온다.
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
