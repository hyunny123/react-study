import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const [listTitle, setListTitle] = useState("My List");

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    //기존에는 반대값을 나타내지만 이전 스냅샷에 기반해 작업을 하기때문에
    //이후 상태 업데이트에 대한 함수를 사용.
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div>
      <div className="app">
        <h1>여러분 안녕하세요!</h1>
        <DemoOutput show={showParagraph} />
        <Button onClick={allowToggleHandler}>확인 더보기중</Button>
        <Button onClick={toggleParagraphHandler}>더보기</Button>
      </div>
      <div className="app">
        <DemoList title={listTitle} items={listItems} />
        <Button onClick={changeTitleHandler}>제목 바꾸기</Button>
      </div>
    </div>
  );
}

export default App;
