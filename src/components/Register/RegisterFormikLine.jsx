import React from "react";
import styles from "./Registerform.module.css";
import { Field } from "formik";
import { ErrorMessage } from "formik";

const RegisterFormikLine = ({ fName, animClass, mainName, fType }) => {
  return (
    <React.Fragment>
      <Field
        placeholder={`${fName} : `}
        className={`${styles.inputs} ${animClass}`}
        type={fType}
        name={mainName}
        id={mainName}
      />
      <ErrorMessage
        component="div"
        className={styles["yp-error"]}
        name={mainName}
      />
    </React.Fragment>
  );
};

export default RegisterFormikLine;
