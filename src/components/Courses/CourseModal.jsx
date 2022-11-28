import React from "react";
import style from "../../screens/Courses/Courses.module.css";
import { Link } from "react-router-dom";
import CourseCapChecker from "../common/CourseCapChecker";

const CourseModal = ({
  mName,
  mTeacher,
  mCap,
  mStart,
  mEnd,
  mPrice,
  mSit,
  mImg,
  mId,
}) => {
  const modalCloser = () => {
    document.getElementById(`modalMask${mId}`).style.opacity = "0";
    document.getElementById(`modalMask${mId}`).style.visibility = "hidden";
  };
  return (
    <div
      onDoubleClick={modalCloser}
      id={`modalMask${mId}`}
      className={`${style["modal-mask"]}`}
    >
      <span className={style["modal-notif"]}>
        برای خروج دو بار روی صفحه کلیک کنید.
      </span>
      <div className="container">
        <div className={`row justify-content-center ${style["margin-mask"]}`}>
          <div
            className={`col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 ${style["modal-main"]}`}
          >
            <div className={"row"}>
              <div className="col-6 ">
                <ul
                  className={`list-group list-group-flush mt-3 ${style["my-ul"]}`}
                >
                  <li
                    className={`list-group-item ${style["my-course"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder1}>دوره</div> : {mName}
                  </li>
                  <li
                    className={`list-group-item mt-2 ${style["my-name"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder}>مدرس</div> : {mTeacher}
                  </li>
                  <li
                    className={`list-group-item mt-2 ${style["my-cap"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder}>ظرفیت</div> : {mCap} نفر
                  </li>
                  <li
                    className={`list-group-item mt-2 ${style["my-cap"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder}>تاریخ شروع</div> :{" "}
                    {`${mStart.substr(0, 4)}/${mStart.substr(
                      5,
                      2
                    )}/${mStart.substr(8, 2)}`}
                  </li>
                  <li
                    className={`list-group-item mt-2 ${style["my-cap"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder}>تاریخ پایان</div> :{" "}
                    {`${mEnd.substr(0, 4)}/${mEnd.substr(5, 2)}/${mEnd.substr(
                      8,
                      2
                    )}`}
                  </li>
                  <li
                    className={`list-group-item mt-2 ${style["my-cap"]} ${style["my-item"]} ${style["modal-item"]}`}
                  >
                    <div className={style.Boldder}>قیمت</div> :{" "}
                    <span>{mPrice} تومان</span>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-center">
                <img className={style["modal-img"]} src={mImg} alt="" />
                <CourseCapChecker
                  CapNum={Math.floor(mSit / ((mCap + mSit) / 100))}
                  capTitle={true}
                  capWidth={90}
                  capBack={"rgba(0,0,0,0.4)"}
                />
                <div className="col-12 mt-5">
                  <Link className={style["link"]} to={`/AllCourses/${mId}/`}>
                    مشاهده کامل
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
