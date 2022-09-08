import { useEffect } from "react";
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //true로 했기때문에 useEffectf로 확인시 시작할때 값이 유효하다.
  //단지 에러를 주기 위한 state인데 잘못됨.
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //사용자가 입력란에 입력해서 enteredName이 있는지를 확인.
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("입력창이 유효하다.");
    }
  }, [enteredNameIsValid]);

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
    //폼이 제출시, 하나이긴 하지만 모든 입력값이 사용자가 확인.
    setEnteredNameTouched(true);

    //빈문자열일경우 submit 안되게 하기
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    //위 조건문 뒤로 실행되면 값이 유효함을 의미하기 때문에 true!
    //
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //input 창에 value props와 연결되어 업데이트 된뒤, 이부분 반영.
    setEnteredName("");
  };
  //입력창을 건들인뒤, 값이 유효하지 않을경우에만 유효하지않게 판단
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  //빈칸 submit 할 경우, input창 css 변경.
  //변경한뒤 className에 변수 넣기.
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  return (
    //form-control이 알맞지 않으면 form-control invalid로 바꿈.

    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">이름을 작성해주세요!</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">입력칸에 이름을 입력해주세요!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
