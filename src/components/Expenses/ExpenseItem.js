import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //useState로 특별한 종류의 변수를 생성
  useState(props.title);
  //버튼 클릭시 title을 바꾸고 싶다.
  //let으로 변수를 생성
  let title = props.title;

  const clickHandler = () => {
    title = "Updated!";
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
