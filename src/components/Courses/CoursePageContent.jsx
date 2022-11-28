import React, { useState, useContext, useEffect } from "react";
import CourseCard from "./CourseCard";
import PageTitle from "../NewsArticles/PageTitle";
import paginate from "../../core/utils/paginate";
import NotAvailableCourse from "../common/NotAvailableCourse";
import PaginationModule from "../common/PaginationModule";
import style from "../../screens/Courses/Courses.module.css";
import styless from "../StudentPanel/PanelCoursesList/PanelCoursesList.module.css";
import NewLoader1 from "../../assets/images/StudentPanel/loaderBlue.gif";
import InnerSearchBox from "../common/InnerSearchBox/InnerSearchBox";
import { AllCoursesContext } from "../../context/AllCoursesProvider";
import axios from "axios";

const apiEndpoint = "https://invalid-js.herokuapp.com/api/course/getall";

const CoursePageContent = () => {
  const AllCourses = useContext(AllCoursesContext);

  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [inValue, setInValue] = useState("");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortItems, setSortItems] = useState([
    { name: "همه دوره های موجود ", id: 1 },
    { name: "جدیدترین ها", id: 2 },
    { name: "محبوب ترین ها", id: 3 },
    { name: "ارزان ترین ها", id: 4 },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const dataGetter = async () => {
      const { data: CourseList } = await axios.get(apiEndpoint);
      setCourses(CourseList.result);
    };
    dataGetter();
    setTimeout(function dataGetter() {
      setIsLoading(false);
    }, 1500);
  }, []);

  /*setTimeout(function dataGetter() {
    setCourses(AllCourses.AllCourses);
    setIsLoading(false);
  }, 1500);*/

  const handlePageChanger = (event, value) => {
    setCurrentPage(value);
  };

  const handlePageSizeOnChange = () => {
    setCurrentPage(1);
    setPageSize(document.getElementById("capacity").value);
  };

  const handleSearch = (e) => {
    setInValue(e.currentTarget.value);
    setCurrentPage(1);
  };

  let myFiltred = courses;

  if (inValue)
    myFiltred = courses.filter((m) =>
      m.title.toLowerCase().includes(inValue.toLowerCase())
    );

  const paginateCourses = paginate(myFiltred, currentPage, pageSize);

  const sortOnChnageHandle = (value) => {
    if (value === "1") {
      setCourses(AllCourses.AllCourses);
    } else if (value === "2") {
      const filtering = [...courses].sort((b, a) => {
        return (
          new Date(a.startDate.substr(0, 10)) -
          new Date(b.startDate.substr(0, 10))
        );
      });
      setCourses(filtering);
    } else if (value === "4") {
      console.log(courses);

      const filtering2 = [...courses].sort((a, b) => {
        return b.cost - a.cost;
      });
      setCourses(filtering2);
    }
  };

  return (
    <main className={style["main-content"]}>
      <div className="container">
        <PageTitle
          sortIt={sortItems}
          sortShow={true}
          titleShow={"دوره های اموزشی"}
          sortHandle={sortOnChnageHandle}
        />
        <div className="col-12">
          <InnerSearchBox
            value={inValue}
            onChange={handleSearch}
            placeH={"جستجوی دوره مورد نظر"}
          />
        </div>
        <div style={{ overflow: "hidden" }} className={`row mt-5 g-4`}>
          {!isLoading &&
            paginateCourses
              .map((course, index) => (
                <CourseCard
                  key={course._id}
                  cardId={course._id}
                  cardImg={course.lesson.image}
                  cardName={course.title}
                  mName={course.title}
                  cardTeacher={course.teacher.fullName}
                  cardCap={course.capacity}
                  cardPrice={course.cost}
                  cardLike={true}
                  cardLikeNum={12}
                  cardStart={course.startDate}
                  cardEnd={course.endDate}
                  cardSit={course.students.length}
                  cData={courses}
                  cIndex={index}
                />
              ))
              .reverse()}
          {!isLoading && paginateCourses.length === 0 && (
            <NotAvailableCourse alarmNote={"دوره مورد نظر شما  یافت نشد ."} />
          )}
          {isLoading && (
            <img
              style={{
                width: "140px",
                display: "block",
                margin: "90px auto 0",
              }}
              src={NewLoader1}
              alt=""
            />
          )}

          <div className="col-12 mb-5 mt-5 d-flex text-center align-items-center">
            {!isLoading && (
              <div className="col-12 mt-4 mb-0">
                <div
                  className={`d-flex justify-content-center ${styless.paginationOptions}`}
                  style={{ position: "relative" }}
                >
                  <div className={styless.showNumber}>
                    تعداد ایتم ها :{" "}
                    <span className={styless.numm}>{myFiltred.length}</span>
                  </div>
                  <PaginationModule
                    itemCount={myFiltred.length}
                    pageSize={pageSize}
                    onPageChanger={handlePageChanger}
                    pageCurrent={currentPage}
                    itemLength={myFiltred.length}
                    backColor={"primary"}
                  />
                  <select
                    id="capacity"
                    className={styless.capNumber}
                    onChange={handlePageSizeOnChange}
                  >
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePageContent;
