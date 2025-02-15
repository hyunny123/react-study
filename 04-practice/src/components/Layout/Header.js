import React from "react";
import { Fragment } from "react";

import mealsImage from "../../assets/food.png";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>맛집의 고수</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="yammy food!" />
      </div>
    </Fragment>
  );
};

export default Header;
