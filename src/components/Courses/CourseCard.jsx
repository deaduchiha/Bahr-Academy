import React, { useContext } from "react";
import style from "../../screens/Courses/Courses.module.css";
import Like from "../../assets/images/Courses/like2.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CourseLike from "../common/CourseLike";
import CourseModal from "./CourseModal";
import AOS from "aos";
import { LikeCourse } from "../../core/services/api/course-like-dis-api";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "aos/dist/aos.css";
const CourseCard = ({
  cardImg,
  cardName,
  cardTeacher,
  cardCap,
  cardPrice,
  cardLike,
  cardLikeNum,
  cardStart,
  cardEnd,
  cardSit,
  cardId,
  cData,
  cIndex,
}) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  AOS.init();
  const modalHandler = () => {
    document.getElementById(`modalMask${cardId}`).style.opacity = "1";
    document.getElementById(`modalMask${cardId}`).style.visibility = "visible";
  };

  const handleCourseLike = async () => {
    if (isLogged.currentLogged === false) {
      toast.info("لطفا ابتدا وارد حساب کاربری شوید", {});
    } else {
      const flag = 10;
      const like = await LikeCourse(
        { courseId: cardId, userId: CurrentUser._id },
        flag
      );
      if (like.success === true) {
        toast.success(like.message[0].message, {});
      } else {
        toast.info(like.message[0].message, {});
      }
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
      <div
        data-aos="fade-right"
        data-aos-delay="5"
        className={`card shadow ${style["my-cards"]}`}
      >
        <div className={style["link-mask"]}>
          <Link to={`/AllCourses/${cardId}/`} className={style["img-hover"]}>
            مشاهده
          </Link>
          <img
            src={cardImg}
            className={`card-img-top ${style["img-cards"]}`}
            alt="..."
          />
        </div>

        <ul className={`list-group list-group-flush mt-3 ${style["my-ul"]}`}>
          <li
            className={`list-group-item ${style["my-course"]} ${style["my-item"]} ${style["low-item"]}`}
          >
            دوره : {cardName}
          </li>
          <li
            className={`list-group-item ${style["my-name"]} ${style["my-item"]} ${style["low-item"]}`}
          >
            مدرس : {cardTeacher}
          </li>
          <li
            className={`list-group-item ${style["my-cap"]} ${style["my-item"]} ${style["low-item"]}`}
          >
            <CourseLike
              likeImg={Like}
              LikeNum={cardLikeNum}
              handleLike={handleCourseLike}
              id={cardId}
            />
            ظرفیت : {cardCap} نفر
          </li>
        </ul>
        <div className={`card-body ${style["body-sec"]}`}>
          <span
            className={`card-link ${style["my-price"]} ${style["low-item"]}`}
            style={{ float: "left" }}
          >
            {cardPrice} تومان
          </span>
          <span
            className={`${style["detail"]}`}
            style={{ float: "right" }}
            onClick={modalHandler}
          >
            جزییات
          </span>
        </div>
        <CourseModal
          mName={cardName}
          mTeacher={cardTeacher}
          mCap={cardCap}
          mStart={cardStart}
          mEnd={cardEnd}
          mPrice={cardPrice}
          mSit={cardSit}
          mImg={cardImg}
          mId={cardId}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          width: "330px",
          fontFamily: "est",
          fontSize: "12px",
        }}
      />
    </div>
  );
};

export default CourseCard;
