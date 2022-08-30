import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "만나서 반가워요!!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
