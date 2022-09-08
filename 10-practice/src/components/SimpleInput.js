import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    //input 요소로 입력된 값에 event.target으로 접근하는것.
    setEnteredName(e.target.value);
  };

  //ref보다 상태를 사용하는 것이 좋은 이유는?
  //입력값을 초기화 하고 싶은 경우.
  const formSubmissionHandler = (e) => {
    //브라우저에서 작동하는 바닐라 자바스크립트를 다루고 있기 때문에.
    //이폼안에 있는 버튼을 통해 폼제출 웹사이트를 제공하는 서버로 http 요청을 적용.
    //원하는 서버로 http 요청을 보낸다.
    //우리에게 서버가 없기때문에 요청이 보내지지 않도록 해야한다.
    //기본적으로 http 요청을 보내지 않고 아무것도 하지 말라는 명령.
    e.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //input 창에 value props와 연결되어 업데이트 된뒤, 이부분 반영.
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
