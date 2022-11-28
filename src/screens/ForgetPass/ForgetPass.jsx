import React from "react";
import ForgetPicContainer from "../../components/ForgetPassword/ForgetPicContainer";
import ForgetFormContainer from "../../components/ForgetPassword/ForgetFormContainer";
import styles from "../../components/Register/Registerform.module.css";

const ForgetPass = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles["row-holder"]}`}>
        <ForgetPicContainer />
        <ForgetFormContainer />
      </div>
    </div>
  );
};

export default ForgetPass;
