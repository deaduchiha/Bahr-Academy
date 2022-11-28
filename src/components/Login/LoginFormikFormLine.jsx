import React, { Fragment } from "react";
import styles from "../Register/Registerform.module.css";

const LoginFormikFormLine = ({
  fName,
  animClass,
  mainName,
  fType,
  fChange,
  fBlur,
  fValue,
  fTouch,
  fError,
}) => {
  return (
    <Fragment>
      <input
        placeholder={`${fName} : `}
        className={`${styles.inputs} ${animClass}`}
        id={mainName}
        name={mainName}
        type={fType}
        onChange={fChange}
        onBlur={fBlur}
        value={fValue}
      />
      {{ fTouch } && { fError } ? (
        <div className={styles["yp-error"]}>{fError}</div>
      ) : null}
    </Fragment>
  );
};

export default LoginFormikFormLine;
