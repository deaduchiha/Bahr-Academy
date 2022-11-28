import React, { Fragment } from "react";
import style from "../../screens/Courses/Courses.module.css";
const CourseSort = ({ items, sortHandle }) => {
  return (
    <Fragment>
      <select
        id="TypeSortCourse"
        className={style["my-span"]}
        onChange={() =>
          sortHandle(document.getElementById("TypeSortCourse").value)
        }
      >
        {items.map((item) => (
          <option
            className={style["options-sort"]}
            key={item.id}
            value={item.id}
          >
            {item.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default CourseSort;
