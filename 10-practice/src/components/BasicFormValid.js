import { useState } from "react";

const BasicForm = (props) => {
  const [enterFirstName, setEnterFirstName] = useState("");
  const [enterFirstNameTouched, setEnterFirstNameTouched] = useState(false);
  const [enterLastName, setEnterLastName] = useState("");
  const [enterLastNameTouched, setEnterLastNameTouched] = useState(false);
  const [enterEmail, setEnterEmail] = useState("");
  const [enterEmailTouched, setEnterEmailTouched] = useState(false);

  const enterFirstNameIsValid = enterFirstName.trim() !== "";
  const enterLastNameIsValid = enterLastName.trim() !== "";
  const enterEmailIsValid = enterEmail.includes("@");
  const firstNameInputIsInValid =
    !enterFirstNameIsValid && enterFirstNameTouched;
  const lastNameInputIsInValid = !enterLastNameIsValid && enterLastNameTouched;
  const emailInputIsInValid = !enterEmailIsValid && enterEmailTouched;

  const firstNameInputHandler = (e) => {
    setEnterFirstName(e.target.value);
  };
  const lastNameInputHandler = (e) => {
    setEnterLastName(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEnterEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnterFirstNameTouched(true);
    setEnterLastNameTouched(true);
    setEnterEmailTouched(true);

    if (!enterFirstNameIsValid && !enterLastNameIsValid && !enterEmailIsValid) {
      return;
    }
    console.log(enterFirstName);
    console.log(enterLastName);
    console.log(enterEmail);

    setEnterFirstName("");
    setEnterFirstNameTouched(false);
    setEnterLastName("");
    setEnterLastNameTouched(false);
    setEnterEmail("");
    setEnterEmailTouched(false);
  };

  const firstNameInputClasses = firstNameInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  const lastNameInputClasses = lastNameInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            value={enterFirstName}
          />
          {firstNameInputIsInValid && (
            <p className="error-text">입력칸에 이름을 입력해주세요!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            value={enterLastName}
          />
          {lastNameInputIsInValid && (
            <p className="error-text">입력칸에 이름을 입력해주세요!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailInputHandler}
          vlaue={enterEmail}
        />
        {emailInputIsInValid && (
          <p className="error-text">입력칸에 메일을 입력해주세요!</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
