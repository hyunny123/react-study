import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb ", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //필터링된 비용을 보고 선택한 연도에 대해 모든 비용을 검토한 다음 각 달의 비용을 합산 해야함.
  //그 값이 chartDataPoints에서 할당해야한다.
  //props를 통해 filteredExpenses에 필터링 된 비용을 가져올것임. 비용목록

  //props에서 얻은 모든 비용을 반복 실행
  //오류: for문안에서 in을 썼기때문에
  //props.expenses가 객체가 아닌 배열이기때문에 of가 맞다.
  for (const expense of props.expenses) {
    //해당 비용의 달을 가져와 비용 금액에 따라 적절하게 dataPoints값을 업데이트
    const expenseMonth = expense.date.getMonth(); //starting at 0=>January=>0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
