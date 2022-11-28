import React, { Fragment, useState, useContext } from "react";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import CourseResultCard from "./CourseResultCard";
import NewsResultCard from "./NewsResultCard";
import { AllCoursesContext } from "../../../context/AllCoursesProvider";
import { AllNewsContext } from "../../../context/AllNewsProvider";
import Loader from "../../../assets/images/StudentPanel/loaderBlue.gif";

const Search = ({ bggColor }) => {
  const bgColor = bggColor;

  const AllCourse = useContext(AllCoursesContext).AllCourses;
  const AllNews = useContext(AllNewsContext).Alll;

  const [myClass, setMyClass] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleValue = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleFocus = () => {
    window.scrollTo(0, 0);
    setMyClass(styles.dataShow);
    setTimeout(function () {
      setIsLoading(false);
    }, 2300);
  };

  const handleBlur = () => {
    setTimeout(function () {
      setIsLoading(true);
      setMyClass(styles.dataHide);
      setSearchValue("");
    }, 400);
  };

  const filterCourse = () => {
    if (!searchValue) {
      return courses;
    } else {
      return AllCourse.filter(
        (course) =>
          course.title.includes(searchValue) ||
          course.teacher.fullName.includes(searchValue)
      );
    }
  };

  const courseFiltered = AllCourse ? filterCourse() : "";

  const filterNews = () => {
    if (!searchValue) {
      return news;
    } else {
      return AllNews.filter((news) => news.title.includes(searchValue));
    }
  };

  const newsFiltered = AllNews ? filterNews() : "";

  return (
    <Fragment>
      <div
        id="searchDataHolder"
        className={`constainer ${styles.searchHolder} ${myClass}`}
      >
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 text-center">
            <h4 className={styles.title}>دوره ها</h4>
            {!isLoading &&
              courseFiltered.map((course) => (
                <CourseResultCard
                  key={course._id}
                  name={course.title}
                  teacher={course.teacher.fullName}
                  img={course.lesson.image}
                  navTo={`/AllCourses/${course._id}/`}
                />
              ))}
            {isLoading && (
              <img
                className={styles.loaderImg}
                style={{
                  width: "90px",
                  display: "block",
                  margin: "165px auto 0",
                }}
                src={Loader}
                alt=""
              />
            )}
            {!isLoading && courseFiltered.length === 0 && (
              <div className={styles.notFound}>موردی یافت نشد.</div>
            )}
          </div>
          <div className={`col-12 col-md-6 text-center ${styles.secondBox}`}>
            <h4 className={styles.title}>خبر ها</h4>
            {!isLoading &&
              newsFiltered.map((news) => (
                <NewsResultCard
                  key={news._id}
                  name={news.title}
                  author={"سهیل جعفری"}
                  img={news.image}
                  navTo={`/AllNews/${news._id}/`}
                />
              ))}
            {isLoading && (
              <img
                className={styles.loaderImg}
                style={{
                  width: "90px",
                  display: "block",
                  margin: "165px auto 0",
                }}
                src={Loader}
                alt=""
              />
            )}
            {!isLoading && newsFiltered.length === 0 && (
              <div className={styles.notFound}>موردی یافت نشد.</div>
            )}
          </div>
        </div>
        <span className={styles.liner}></span>
      </div>

      <div style={{ position: "relative" }} className={styles.searchBar}>
        <Link to="/">
          <SearchIcon
            style={{ position: "absolute", bottom: "10px", zIndex: "1" }}
          />
        </Link>

        <Input
          value={searchValue}
          onChange={handleValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            fontSize: { lg: 16, md: 14, xs: 12 },
          }}
          className="search"
          placeholder="جستجو"
          style={{
            paddingTop: "5px",
            width: "100%",
            position: "absolute",
            bottom: "0",
            background: `${bgColor}`,
            color: "#fff",
            height: "50px",
            fontFamily: "est",
            paddingRight: "50px",
          }}
        />
      </div>
    </Fragment>
  );
};

export default Search;
