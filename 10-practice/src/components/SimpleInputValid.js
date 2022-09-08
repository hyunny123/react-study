import { useEffect } from "react";
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("입력창이 유효하다.");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    //유효하지 않은지 확인해서 그때 false로 하기때문.
    //키 입력이 올때마다 유효한지 확인해서 최대한 유효하지 않음에
    //대한 에러 제거해야함.

    //e.target.value: enteredName을 여기서 업데이트 하고 있지만
    //이러한 상태는 비동기적으로 처리되므로 바로 처리되지 않아서
    //다음줄 실행시 enteredName을 사용하면 최신상태 반영못함.
    //이전 상태 참고함.
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  //입력창에 커서를 둔뒤 입력하지 않고 커서를 옮길 경우, 경고문구
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">이름을 작성해주세요!</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
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
