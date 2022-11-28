import React from "react";
import styles from "./Progress.module.css";
const Bar = (props) => {
  return (
    <>
      <div className={`progress ${styles.progres}`}>
        <div
          className={`progress-bar ${styles.progresBar}`}
          role="progressbar"
          aria-valuenow={props.percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            background: `${props.bgColor}`,
            width: `var(--w, ${props.percent})`,
          }}
        >
          {props.att}
        </div>
      </div>
    </>
  );
};

export default Bar;
