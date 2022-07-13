import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//리액트 라이브러리 자체는 여러분이 리액트를 DOM이 있는 환경에서 실행하는지 또는 네이티브 앱을 빌드하는데
//사용하는지에 대해 전혀 신경쓰지 않는다.
//리액트 DOM은 브라우저에 대한 리액트용 어댑터의 일종이라 할 수 있다.
//
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
//createPortal 메소드는 두개의 인수를 취한다.
//1. 렌더링되어야 하는 리액트 노드.
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
