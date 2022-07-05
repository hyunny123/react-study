import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //useState로 특별한 종류의 변수를 생성
  //1: 관리되고 있는 값
  //2: 나중에 새로운 title을 설정하기 위해 호출할 수 있는 함수.
  // const [title, setTitle] = useState(props.title);
  //버튼 클릭시 title을 바꾸고 싶다.
  //let으로 변수를 생성
  //let title = props.title;

  // const clickHandler = () => {
  //   setTitle("updated!!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
