import React from "react";
import RegisterPicContainer from "../../components/Register/RegisterPicContainer";
import RegisterFormContainer from "../../components/Register/RegisterFormContainer";
import styles from "../../components/Register/Registerform.module.css";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles["row-holder"]}`}>
        <RegisterFormContainer />
        <RegisterPicContainer />
      </div>
    </div>
  );
};

export default Register;
