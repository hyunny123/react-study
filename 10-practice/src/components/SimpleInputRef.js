import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (e) => {
    //브라우저에서 작동하는 바닐라 자바스크립트를 다루고 있기 때문에.
    //이폼안에 있는 버튼을 통해 폼제출 웹사이트를 제공하는 서버로 http 요청을 적용.
    //원하는 서버로 http 요청을 보낸다.
    //우리에게 서버가 없기때문에 요청이 보내지지 않도록 해야한다.
    //기본적으로 http 요청을 보내지 않고 아무것도 하지 말라는 명령.
    e.preventDefault();

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //ref로 초기화를 시키고 싶은 경우.
    nameInputRef.current.value = "";
    //이렇게 하면 되지만 바람직한 방법 아님.
    //왜냐하면 이부분은 DOM을 직접적으로 작동하여 바닐라 코드를 이용해
    //DOM에 접근해 무엇인가 변경하는 것인데...지양하는 방법.리액트만 이용해야 한다.
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
