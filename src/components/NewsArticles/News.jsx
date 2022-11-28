import React from "react";
import NewLoader1 from "../../assets/images/StudentPanel/loaderBlue.gif";
import NewsCard from "./NewsCard";
import paginate from "../../core/utils/paginate";
import PaginationModule from "../common/PaginationModule";
import NotAvailableCourse from "../common/NotAvailableCourse";
import styless from "../StudentPanel/PanelCoursesList/PanelCoursesList.module.css";

const News = ({
  data,
  searchValue,
  pageCurrent,
  handleSearchNews,
  handleLoad,
  handlePageSizeOnChange,
  newsPageSize,
  loadCheck,
}) => {
  let myFiltred = data.filter((m) => m.text !== "//sliderContent82");

  if (searchValue) {
    myFiltred = data.filter(
      (m) =>
        m.text !== "//sliderContent82" &&
        m.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const paginateCourses = paginate(myFiltred, pageCurrent, newsPageSize);
  return (
    <div style={{ overflow: "hidden" }} className={`row`}>
      {!loadCheck &&
        paginateCourses
          .map((article) => (
            <NewsCard
              key={article._id}
              cardImg={article.image}
              cardTo={`/AllNews/${article._id}/`}
              cardName={article.title}
              cardWriter={"سهیل جعفری"}
              cardCat={"اخبار"}
            />
          ))
          .reverse()}
      {!handleLoad && paginateCourses.length === 0 && (
        <NotAvailableCourse alarmNote={"خبر مورد نظر شما یافت نشد."} />
      )}
      {handleLoad && (
        <img
          style={{
            width: "140px",
            display: "block",
            margin: "120px auto 0",
          }}
          src={NewLoader1}
          alt=""
        />
      )}
      <div className="col-12 mt-3 d-flex justify-content-center"></div>
      {!handleLoad && (
        <div className="col-12 mt-5 mb-5">
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
              pageSize={newsPageSize}
              onPageChanger={handleSearchNews}
              pageCurrent={pageCurrent}
              itemLength={myFiltred.length}
              backColor={"primary"}
            />
            <select
              id="capacity"
              className={styless.capNumber}
              onChange={() =>
                handlePageSizeOnChange(
                  document.getElementById("capacity").value
                )
              }
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={14}>14</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
