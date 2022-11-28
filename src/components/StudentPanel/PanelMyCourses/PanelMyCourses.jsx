import React, { Fragment, useState, useEffect, useContext } from "react";
import PanelTitleInfo from "../../common/PanelTitleInfo";
import NotAvailableCourse from "../../common/NotAvailableCourse";
import axios from "axios";
import PaginationModule from "../../common/PaginationModule";
import paginate from "../../../core/utils/paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./PanelMyCourses.module.css";
import styless from "../PanelCoursesList/PanelCoursesList.module.css";
import Del from "../../../assets/images/StudentPanel/delete.png";
import NewLoader from "../../../assets/images/CourseDetails/newLoader.gif";
import TableTheadPanel from "../../common/TableTheadPanel";
import TableTbodyPanel from "../../common/TableTbodyPanel";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import Http from "../../../core/services/interceptor/interceptor";

const apiEndpoint2 = "https://invalid-js.herokuapp.com/api/student/";

const PanelMyCourses = () => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [myCourses, setMyCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inValue, setInValue] = useState("");

  useEffect(() => {
    setTimeout(async function dataGetter2() {
      const data = await Http.get(
        `https://invalid-js.herokuapp.com/api/student/${CurrentUser._id}`
      );
      setMyCourses(data.data.result.courses);
      //console.log(data.data.result.courses[0].startDate.toISOString());
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleDeleteCourse = async (course) => {
    const originalMyCourses = myCourses;
    const newCourses = myCourses.filter((p) => p._id !== course._id);
    setMyCourses(newCourses);
    modalCloser(course);
    try {
      await Http.post(
        `https://invalid-js.herokuapp.com/api/course/removeStudentFromCourse/${CurrentUser._id}`,
        { courseId: `${course._id}` }
      );
      toast.success("دوره مورد نظر با موفقیت از لیست شما حذف شد", {});
      if (
        myFiltred.length > pageSize &&
        myFiltred.length === pageSize * (currentPage - 1) + 1
      ) {
        setCurrentPage((old) => old - 1);
      }
    } catch (ex) {
      toast.warning("حذف دوره با مشکل مواجه شد", {});
      setMyCourses(originalMyCourses);
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

  let myFiltred = myCourses;

  if (inValue)
    myFiltred = myCourses.filter((m) =>
      m.title.toLowerCase().includes(inValue.toLowerCase())
    );

  const paginateCourses = paginate(myFiltred, currentPage, pageSize);

  return (
    <div className="container-fluid m-0 p-0 h-100">
      <PanelTitleInfo
        value={inValue}
        onChange={handleSearch}
        searchShow={true}
        nameTitle={"  دوره های من  :"}
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
        style={{ width: "330px", fontFamily: "est", fontSize: "12px" }}
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
                    cStart={`${new Date(course.startDate)
                      .toISOString()
                      .substr(0, 4)}/${new Date(course.startDate)
                      .toISOString()
                      .substr(5, 2)}/${new Date(course.startDate)
                      .toISOString()
                      .substr(8, 2)}`}
                    cEnd={""}
                    cPrice={course.cost}
                    cCap={"--"}
                    cAuthor={course.teacher.fullName}
                    cCourse={course}
                    cOpImg={Del}
                    cHandleOp={() => handleDeleteCourse(course)}
                    cHandleClose={() => modalCloser(course)}
                    cHandleShow={() => modalShow(course)}
                  />
                ))}
            </tbody>
          </table>
          {!isLoading && paginateCourses.length === 0 && (
            <NotAvailableCourse
              alarmNote={"در حال حاضر دوره ای برای شما وجود ندارد."}
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

export default PanelMyCourses;
