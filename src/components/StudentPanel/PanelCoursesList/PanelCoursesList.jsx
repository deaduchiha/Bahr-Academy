import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PanelTitleInfo from "../../common/PanelTitleInfo";
import NotAvailableCourse from "../../common/NotAvailableCourse";
import axios from "axios";
import paginate from "../../../core/utils/paginate";
import PaginationModule from "../../common/PaginationModule";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./PanelCoursesList.module.css";
import styless from "./PanelCoursesList.module.css";
import Add from "../../../assets/images/StudentPanel/add.png";
import NewLoader from "../../../assets/images/CourseDetails/newLoader.gif";
import TableTheadPanel from "../../common/TableTheadPanel";
import TableTbodyPanel from "../../common/TableTbodyPanel";
import { AllCoursesContext } from "../../../context/AllCoursesProvider";

const apiEndpoint2 = "http://localhost:8001/myCourses";
const apiEndpoint = "https://invalid-js.herokuapp.com/api/course/getall";

const PanelCoursesList = () => {
  const pageUrl = useLocation().pathname;
  const AllCourses = useContext(AllCoursesContext);

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inValue, setInValue] = useState("");

  useEffect(() => {
    //window.scrollTo(0, 0);
    const dataGetter = async () => {
      const { data: CourseList } = await axios.get(apiEndpoint);
      setCourses(CourseList.result);
    };
    dataGetter();
    setTimeout(function dataGetter() {
      setIsLoading(false);
    }, 1500);
  }, []);

  /*setTimeout(async function dataGetter() {
    setIsLoading(false);
    setCourses(AllCourses.AllCourses);
  }, 1500);*/

  const handleAddCourse = async (course) => {
    modalCloser(course);
    try {
      const { data: CourseListNew } = await axios.post(apiEndpoint2, course);

      toast.success("دوره مورد نظر با موفقیت به سبد شما اضافه شد", {});
    } catch (ex) {
      toast.warning("دوره مورد نظر در سبد شما موجود است", {});
    }
  };

  const handlePageChanger = (event, value) => {
    setCurrentPage(value);
  };

  const handlePageSizeOnChange = () => {
    setCurrentPage(1);
    setPageSize(document.getElementById("capacity").value);
  };

  const modalShow = (course) => {
    document.getElementById(`modalMask${course._id}`).style.opacity = "1";
    document.getElementById(`modalMask${course._id}`).style.visibility =
      "visible";
  };

  const modalCloser = (course) => {
    document.getElementById(`modalMask${course._id}`).style.opacity = "0";
    document.getElementById(`modalMask${course._id}`).style.visibility =
      "hidden";
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

  return (
    <div className="container-fluid m-0 p-0 h-100">
      <PanelTitleInfo
        nameTitle={" لیست دوره ها  :"}
        value={inValue}
        onChange={handleSearch}
        searchShow={true}
      />
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
      <div className="row d-flex align-items-end flex-column h-100">
        <div className="col-12 mb-5">
          <table className={`${"table"} ${styles["my-tabl"]}`}>
            <TableTheadPanel />
            <tbody className={`${styles["my-tbd"]}`}>
              {!isLoading &&
                paginateCourses.map((course) => (
                  <TableTbodyPanel
                    key={course._id}
                    cId={course._id}
                    cPic={course.lesson.image}
                    cName={course.title}
                    cStart={`${course.startDate.substr(
                      0,
                      4
                    )}/${course.startDate.substr(
                      5,
                      2
                    )}/${course.startDate.substr(8, 2)}`}
                    cEnd={""}
                    cPrice={course.cost}
                    cCap={course.capacity}
                    cAuthor={course.teacher.fullName}
                    cCourse={course}
                    cOpImg={Add}
                    cHandleOp={() => handleAddCourse(course)}
                    cHandleClose={() => modalCloser(course)}
                    cHandleShow={() => modalShow(course)}
                  />
                ))}
            </tbody>
          </table>
          {!isLoading && paginateCourses.length === 0 && (
            <NotAvailableCourse
              alarmNote={"در حال حاضر دوره ای برای اراعه وجود ندارد."}
            />
          )}
          {isLoading && (
            <img
              style={{
                width: "110px",
                display: "block",
                margin: "90px auto 0",
              }}
              src={NewLoader}
              alt=""
            />
          )}
        </div>
        {!isLoading && (
          <div className="col-12 mt-0 mb-4">
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
                backColor={"success"}
              />
              <select
                id="capacity"
                className={styless.capNumber}
                onChange={handlePageSizeOnChange}
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelCoursesList;
