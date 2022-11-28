import React, { Fragment, useContext } from "react";
import CourseCapChecker from "../common/CourseCapChecker";
import LikeDisComment from "../common/LikeDisComment";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Team from "../../assets/images/CourseDetails/team.png";
import Cap from "../../assets/images/CourseDetails/cap.png";
import Like from "../../assets/images/CourseDetails/like.png";
import Cal from "../../assets/images/CourseDetails/calendar.png";
import Star from "../../assets/images/CourseDetails/star.png";
import Teacher from "../../assets/images/CourseDetails/teacher.png";
import Stu from "../../assets/images/CourseDetails/stu.png";
import DownSwiper from "../common/DownSwiper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import { LikeCourse } from "../../core/services/api/course-like-dis-api";

const CoursesDetailsTopContent = ({
  courseName,
  courseCap,
  courseCapFill,
  courseLike,
  courseDisLike,
  CourseComment,
  courseAuthor,
  courseStartD,
  courseEndD,
  courseId,
  courseImg,
  isLoad,
  isLoadPic,
}) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const handleLike = async () => {
    if (isLogged.currentLogged === false) {
      toast.info("لطفا ابتدا وارد حساب کاربری شوید", {});
    } else {
      const flag = 10;
      const like = await LikeCourse(
        { courseId: courseId, userId: CurrentUser._id },
        flag
      );
      if (like.success === true) {
        toast.success(like.message[0].message, {});
      } else {
        toast.info(like.message[0].message, {});
      }
    }
  };
  const handleDislike = async () => {
    if (isLogged.currentLogged === false) {
      toast.info("لطفا ابتدا وارد حساب کاربری شوید", {});
    } else {
      const flag = 20;
      const dis = await LikeCourse(
        { courseId: courseId, userId: CurrentUser._id },
        flag
      );
      console.log(dis);
      if (dis.success === true) {
        toast.success(dis.message[0].message, {});
      } else {
        toast.info(dis.message[0].message, {});
      }
    }
  };

  return (
    <Fragment>
      <header className={style["news-header"]}>
        <img className={style["img-news"]} src={Team} alt="" />
        <div className={style["head-mask"]}>
          <div style={{ paddingTop: "59px" }} className={"container"}>
            {isLoad && (
              <div className="row">
                <div
                  className="col-12 text-center"
                  style={{ marginTop: "40vh" }}
                >
                  <span
                    style={{
                      fontFamily: "est",
                      color: "#fff",
                      margin: "25vh auto",
                      fontSize: "23px",
                      fontWeight: "700",
                    }}
                  >
                    لطفا منتظر بمانید ...
                  </span>
                </div>
              </div>
            )}
            {!isLoad && (
              <Fragment>
                <div className={"row justift-content-center"}>
                  <div className={"col-12"}>
                    <img
                      className={style["course-img"]}
                      src={courseImg}
                      alt=""
                    />
                  </div>
                  <div className={"col-12"}>
                    <h3 className={`text-center ${style["news-title-course"]}`}>
                      {courseName}
                    </h3>
                  </div>

                  <div className={"col-12 mt-4 mb-4"}>
                    <div className={style["course-item-holder"]}>
                      <div className={"row"}>
                        <div className="col-6 text-center">
                          <span className={style["lit-span"]}>
                            <img
                              className={style["lit-img"]}
                              src={Cap}
                              alt=""
                            />
                            ظرفیت : {courseCap} نفر
                          </span>
                        </div>
                        <div className="col-6 text-center">
                          <span className={style["lit-span"]}>
                            <img
                              className={style["lit-img"]}
                              src={Stu}
                              alt=""
                            />
                            دانشجو : {courseCapFill} نفر
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"col-12"}>
                    <div className={style["course-item-holder"]}></div>
                  </div>

                  <div className={"col-12 mt-3 "}>
                    <div
                      className={` text-center ${style["course-item-holder"]}`}
                    >
                      <LikeDisComment
                        mDis={courseDisLike}
                        mLike={courseLike}
                        mComment={CourseComment}
                        myClass={"my-like"}
                        likeHandle={handleLike}
                        disLikeHandle={handleDislike}
                      />
                    </div>
                  </div>
                </div>
                <div className={style["head-bottom-grid"]}>
                  <div className={`row m-0 p-0 ${style["row-border"]}`}>
                    <div
                      className={`col-6 col-md-4 text-center ${style["center-all"]} ${style["res-border"]}`}
                    >
                      <img className={style["img-name"]} src={Teacher} alt="" />
                      <div className={style["teacher"]}>مدرس :</div>
                      <div className={style["teacher-name"]}>
                        {courseAuthor}
                      </div>
                    </div>
                    <div
                      className={`col-6 col-md-4 text-center ${style["center-border"]} ${style["center-all"]}`}
                    >
                      <img className={style["img-name"]} src={Cal} alt="" />
                      <div className={style["teacher"]}>
                        تاریخ شروع : {courseStartD}
                      </div>
                      <div className={style["teacher-name"]}>
                        تاریخ پایان : {courseEndD}
                      </div>
                    </div>
                    <div
                      className={`d-none d-md-block col-6 col-md-4 text-center ${style["center-all"]}`}
                    >
                      <img className={style["img-name"]} src={Cap} alt="" />
                      <div className={style["teacher"]}>ظرفیت پر شده :</div>
                      <div className={style["teacher-name"]}>
                        <CourseCapChecker
                          //CapNum={courseCapFill}
                          CapNum={Math.floor(
                            courseCapFill / ((courseCap + courseCapFill) / 100)
                          )}
                          capTitle={false}
                          capWidth={47}
                          capBack={"rgba(255,255,255,0.1)"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>

          {!isLoad && <DownSwiper sTop={170} downSize={window.innerHeight} />}
        </div>
      </header>
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
    </Fragment>
  );
};

export default CoursesDetailsTopContent;
