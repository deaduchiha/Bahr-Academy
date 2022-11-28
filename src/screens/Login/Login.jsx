import React from "react";
import LoginFormContainer from "../../components/Login/LoginFormContainer";
import LoginPicContainer from "../../components/Login/LoginPicContainer";
import styles from "../../components/Register/Registerform.module.css";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles["row-holder"]}`}>
        <LoginPicContainer />
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default Login;
