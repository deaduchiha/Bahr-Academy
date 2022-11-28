import React, { Fragment } from "react";
import style from "../../screens/Courses/Courses.module.css";
const CourseCapChecker = ({ CapNum, capTitle, capWidth, capBack }) => {
  return (
    <Fragment>
      {capTitle && <div className="col-12 mt-3"> ظرفیت پر شده : </div>}
      <div
        style={{
          margin: "0 auto",
          width: `${capWidth}%`,
          backgroundColor: `${capBack}`,
          position: "relative",
        }}
        className={`col-12 mt-2 ${style["progress"]}`}
      >
        <span
          style={{ width: `${CapNum}%` }}
          className={style["progress-flow"]}
        ></span>
        <span
          style={{
            position: "absolute",
            top: "1px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
          }}
        >
          {CapNum}%
        </span>
      </div>
    </Fragment>
  );
};

export default CourseCapChecker;
