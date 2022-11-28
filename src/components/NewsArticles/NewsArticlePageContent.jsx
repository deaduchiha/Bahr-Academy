import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import PageTitle from "./PageTitle";
import News from "./News";
import Articles from "./Articles";
import classes from "../../screens/NewsArticle/NewsArticle.module.css";
import InnerSearchBox from "../common/InnerSearchBox/InnerSearchBox";
import { AllNewsContext } from "../../context/AllNewsProvider";
import Http from "../../core/services/interceptor/interceptor";

const NewsArticlePageContent = () => {
  const AllNews = useContext(AllNewsContext);
  const [inValue, setInValue] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const [newsCurrentPage, setNewsCurrentPage] = useState(1);
  const [newsPageSize, setNewsPageSize] = useState(8);
  const [articleCurrentPage, setArticleCurrentPage] = useState(1);
  const [articlePageSize, setArticlePageSize] = useState(8);
  const [isLoading, setIsLoading] = useState(true);
  const [sortItems, setSortItems] = useState([
    { name: "همه عناوین", id: 1 },
    { name: "جدیدترین ها", id: 2 },
    { name: "پر بازدیدترین ها", id: 3 },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  setTimeout(function dataGetter() {
    setIsLoading(false);
    setArticle(AllNews.AllArticle);
    setNews(AllNews.AllNews);
  }, 1500);

  let activeStyle = {
    borderBottom: "3px solid #004458",
    color: "#004458",
    fontSize: "28px",
  };

  const handleSortSelect = (name) => {
    setSelectedSort(name);
  };

  const handleNewsPageChnager = (event, value) => {
    setNewsCurrentPage(value);
  };

  const handleArticlePageChnager = (event, value) => {
    setArticleCurrentPage(value);
  };

  const sortOnChnageHandle = (value) => {
    console.log(value);
  };

  const handlePageChecker = (value) => {
    setNewsPageSize(value);
    setArticleCurrentPage(1);
    setNewsCurrentPage(1);
  };

  const handlePageChecker2 = (value) => {
    setArticlePageSize(value);
    setArticleCurrentPage(1);
    setNewsCurrentPage(1);
  };

  const handleSearch = (e) => {
    setInValue(e.currentTarget.value);
    setNewsCurrentPage(1);
    setArticleCurrentPage(1);
  };

  const onNewsClickHandler = () => {
    setInValue("");
    setNewsCurrentPage(1);
    setArticleCurrentPage(1);
  };

  const onArticleClickHandler = () => {
    setInValue("");
    setArticleCurrentPage(1);
    setNewsCurrentPage(1);
  };

  return (
    <main className={classes["main-content"]}>
      <div className="container">
        <PageTitle
          sortIt={sortItems}
          sortShow={true}
          titleShow={"اخبار و مقالات"}
          sortHandle={sortOnChnageHandle}
        />
        <div className="col-12">
          <InnerSearchBox
            value={inValue}
            onChange={handleSearch}
            placeH={"جستجوی عنوان مورد نظر"}
          />
        </div>

        <div className={`row mt-3 g-4`}>
          <div className={"col-6"}>
            <NavLink
              to="/news/"
              onClick={onNewsClickHandler}
              className={`${classes["news-link"]}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              اخبار
            </NavLink>
          </div>
          <div className={"col-6"}>
            <NavLink
              to="/news/article"
              onClick={onArticleClickHandler}
              className={classes["news-link"]}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              مقالات
            </NavLink>
          </div>
          <div className={`col-12 mt-2`}>
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    data={news}
                    searchValue={inValue}
                    pageCurrent={newsCurrentPage}
                    handleSearchNews={handleNewsPageChnager}
                    handleLoad={isLoading}
                    handlePageSizeOnChange={handlePageChecker}
                    newsPageSize={newsPageSize}
                    loadCheck={isLoading}
                  />
                }
              />
              <Route
                path="/article"
                element={
                  <Articles
                    data={article}
                    searchValue={inValue}
                    pageCurrent={articleCurrentPage}
                    handleSearchNews={handleArticlePageChnager}
                    handleLoad={isLoading}
                    handlePageSizeOnChange={handlePageChecker2}
                    articlePageSize={articlePageSize}
                    loadCheck={isLoading}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsArticlePageContent;
