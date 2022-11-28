import React from "react";
import style from "../../screens/Courses/Courses.module.css";

const CourseHeader = () => {
  return (
    <header className={style["header-nav"]}>
      <div style={{ height: "59px" }} className={style["nav-mask"]}></div>
    </header>
  );
};

export default CourseHeader;
