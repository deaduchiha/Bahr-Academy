import React, { Fragment } from "react";
import styles from "../StudentPanel/PanelEditProfile/PanelEditProfile.module.css";

const PanelFormikLineContent = ({
  mainName,
  fName,
  fType,
  fChange,
  fBlur,
  fValue,
  fTouch,
  fError,
  disCheck,
}) => {
  return (
    <Fragment>
      <div className={`col-12 col-md-6 ${styles["input-col"]}`}>
        <label className={`${styles["my-label"]}`} htmlFor={mainName}>
          {fName} :
        </label>
        <input
          disabled={disCheck}
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

export default PanelFormikLineContent;
