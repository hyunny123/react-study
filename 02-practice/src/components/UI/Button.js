import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    //type값은 props.type으로 접근할 수 있게 설정하고 값이 지정되지않을경우를 위해
    //or 연산자를 사용하여 button이 값으로 css될수 있게 구현.
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
