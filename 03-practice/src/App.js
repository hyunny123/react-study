import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // state가 실행되면 아래의 함수도 실행된다.
  //그것을 막기위해 필요한 경우 렌더링 되도록 하기 위해서는 useEffect 사용.

  useEffect(() => {
    const storageUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storageUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
