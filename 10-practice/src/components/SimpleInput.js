import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  //   useEffect(() => {
  //     if (enteredNameIsValid) {
  //       setFormIsValid(true);
  //     } else {
  //       setFormIsValid(false);
  //     }
  //   }, [enteredNameIsValid]);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  //입력창에 커서를 둔뒤 입력하지 않고 커서를 옮길 경우, 경고문구
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    //유효하지 않으니 반환
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">이름을 작성해주세요!</label>
        <input
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
      <div className={emailInputClasses}>
        <label htmlFor="email">email을 작성해주세요!</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInValid && (
          <p className="error-text">입력칸에 email을 입력해주세요!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
