import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  //유효한 입력값을 갖는 경우에만 코드 실행.
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    console.log(nameInputRef.current.value);
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      //오류 상태 설정
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }
    //users 객체의 배열 추가
    //상태 끌어올리기 개념
    //props를 통해 얹는 값이 함수
    console.log(enteredName, enteredUserAge);
    //useRef 사용.
    props.onAddUser(enteredName, enteredUserAge);
    //useRef 재설정 로직
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    //props.onAddUser(enteredUserName, enteredAge);
    //reset : input에 현재 상태를 반영하지 않으면 reset되지 않음
    //input요소는 속성으로 value를 갖는데 value에 사용자가 입력한 값을 설정할수 있다.value={enteredAge}
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  //에러 오케이 버튼 클릭시 모달창 닫힘.
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
