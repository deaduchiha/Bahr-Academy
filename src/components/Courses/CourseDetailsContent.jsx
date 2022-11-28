import React, { Fragment, useState, useEffect, useContext } from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import MainArticleContent from "../NewsArticles/MainArticleContent";
import NewsArticleComment from "../common/NewsArticleComment";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import CourseDetailsBottomInfo from "./CourseDetailsBottomInfo";
import CoursesDetailsTopContent from "./CoursesDetailsTopContent";
import CourseDetailsBotContent from "./CoursesDetailsBotContent";
import { AllCoursesContext } from "../../context/AllCoursesProvider";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import Loaderr from "../../assets/images/Landing/loader.gif";

const apiEndpoint2 = "https://invalid-js.herokuapp.com/api/comments/";

const CourseDetailsContent = ({}) => {
  const AllCourses = useContext(AllCoursesContext);
  const isLogged = useContext(IsLoggedContext);

  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [article, setArticle] = useState([]);
  const [course2, setCourse2] = useState({
    teacher: { fullName: "" },
    lesson: { description: "" },
    image: "",
    startDate: "",
    endDate: "",
    students: { length: 0 },
  });
  const [comments, setComments] = useState([]);
  const [errorFlag, setErrorFlag] = useState(false);
  const [contFlag, setContFlag] = useState(false);
  const [contFlag2, setContFlag2] = useState(false);
  const [like, setLike] = useState({ like: 0, dislike: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function commentGetter() {
      const comment = await axios.get(apiEndpoint2);
      setComments(
        comment.data.filter((m) => m.postId === id && m.verified === true)
      );
    }
    commentGetter();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    setContFlag(false);
    setContFlag2(true);

    async function dataGetter() {
      const data = await axios.get(
        `https://invalid-js.herokuapp.com/api/course/${id}`
      );
      setCourse(data.data.result);
      setErrorFlag(true);
    }
    dataGetter();
    AllCourses.CourseIdSetter(id);
  }, []);

  useEffect(() => {
    async function dataGetter2() {
      const data = await axios.get(
        `https://invalid-js.herokuapp.com/api/course/likeCount/${id}`
      );
      setLike(data.data.result);
    }
    dataGetter2();
  }, []);
  useEffect(() => {
    setTimeout(function loading() {
      setIsLoading(false);
    }, 3000);
  }, []);

  let activeStyle = {
    borderBottom: "3px solid #004458",
    color: "#004458",
    fontSize: "21px",
  };

  return (
    <Fragment>
      <CoursesDetailsTopContent
        isLoad={isLoading}
        isLoadPic={Loaderr}
        courseId={id}
        courseName={course.title}
        courseCap={course.capacity}
        courseCapFill={
          !errorFlag ? course2.students.length : course.students.length
        }
        courseLike={like.like}
        courseDisLike={like.dislike}
        CourseComment={comments.length}
        courseAuthor={
          !errorFlag ? course2.teacher.fullName : course.teacher.fullName
        }
        courseStartD={
          !errorFlag
            ? course2.startDate
            : `${course.startDate.substr(0, 4)}/${course.startDate.substr(
                5,
                2
              )}/${course.startDate.substr(8, 2)}`
        }
        courseEndD={
          !errorFlag
            ? course2.endDate
            : `${course.endDate.substr(0, 4)}/${course.endDate.substr(
                5,
                2
              )}/${course.endDate.substr(8, 2)}`
        }
        courseImg={!errorFlag ? course2.image : course.lesson.image}
      />
      {!isLoading && (
        <main className={style["main-content-course"]}>
          <div className={"container"}>
            <div className="row">
              <div
                className={
                  "col-md-7 col-lg-8 p-5 px-3 px-sm-4 p-sm-3 pt-3 pt-sm-2 pb-0"
                }
              >
                <div className="row">
                  <div className="col-6 p-1">
                    <NavLink
                      to={`/AllCourses/${id}/`}
                      className={style["news-link"]}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      محتوا
                    </NavLink>
                  </div>
                  <div className="col-6 p-1">
                    <NavLink
                      to={`/AllCourses/${id}/comment`}
                      className={style["news-link"]}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      نظرات کاربران
                    </NavLink>
                  </div>
                  <div className={style["routing-holder"]}>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <MainArticleContent
                            data={article}
                            data2={course}
                            flag={errorFlag}
                            dataFake={course2}
                            contentFlag={contFlag}
                            contentFlag2={contFlag2}
                          />
                        }
                      />
                      <Route
                        path="/comment"
                        element={
                          <NewsArticleComment data={comments} postId={id} />
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </div>
              <div className={"col-md-5 col-lg-4 p-2"}>
                <CourseDetailsBotContent
                  courseId={id}
                  courseName={course.title}
                  coursePrice={course.cost}
                  courseAfterPrice={course.cost}
                  courseDisCount={0}
                  courseData={course}
                  courseTimer={""}
                  capp={course.capacity}
                  courseImgg={!errorFlag ? course2.image : course.lesson.image}
                />
              </div>
            </div>
          </div>
          <CourseDetailsBottomInfo />
        </main>
      )}
    </Fragment>
  );
};

export default CourseDetailsContent;
