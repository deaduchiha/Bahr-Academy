import React from "react";
import style from "../../screens/Courses/Courses.module.css";
import CourseSort from "../Courses/CourseSort";

const PageTitle = ({ sortIt, titleShow, sortShow, sortHandle }) => {
  return (
    <div className="row align-items-center mt-3 mt-md-4 mb-4">
      <div className="col-12 col-md-5 col-lg-5 text-center text-md-start">
        <h3 className={style["top-title"]}>{titleShow}</h3>
      </div>
      <div
        className={`d-flex flex-row-reverse d-md-block col-12 col-md-7 col-lg-7 mt-4 mt-md-0 ${style["sort-holder"]}`}
      >
        {sortShow && <CourseSort items={sortIt} sortHandle={sortHandle} />}
      </div>
    </div>
  );
};

export default PageTitle;
