import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  //props.children card 컴포넌트의 여닫는 태그 사이에 있는 컨텐츠를 보내준다.
  //className의 도움으로 div에 적용하는 css 클래스가 이미 적용하고 있는 card클래스에
  //반영되는 것뿐만 아니라 Card 컴포넌트의 ClassName props에 잠재적으로 들어오는 클래스에 적용
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
