import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    //기존에는 반대값을 나타내지만 이전 스냅샷에 기반해 작업을 하기때문에
    //이후 상태 업데이트에 대한 함수를 사용.
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>여러분 안녕하세요!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>더보기</Button>
    </div>
  );
}

export default App;
