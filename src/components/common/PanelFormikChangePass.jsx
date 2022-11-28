import React, { Fragment } from "react";
import styles from "../StudentPanel/PanelEditProfile/PanelEditProfile.module.css";

const PanelFormikChangePass = ({
  mainName,
  fName,
  fType,
  fChange,
  fBlur,
  fValue,
  fTouch,
  fError,
}) => {
  return (
    <Fragment>
      <div className={`col-12 ${styles["input-col"]}`}>
        <label className={`${styles["my-label"]}`} htmlFor={mainName}>
          {fName} :
        </label>
        <input
          className={`${styles["my-inp"]}`}
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
      </div>
    </Fragment>
  );
};

export default PanelFormikChangePass;
