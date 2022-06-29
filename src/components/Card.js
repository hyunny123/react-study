import "./Card.css";

function Card(props) {
  //card 뒤에 띄어쓰기를 하는 이유? 하고 나니 css 자체가 변함.
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
export default Card;
