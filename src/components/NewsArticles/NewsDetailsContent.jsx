import React, { useState, useEffect, Fragment, useContext } from "react";
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import SuggestCard from "./SuggestCard";
import MainArticleContent from "./MainArticleContent";
import NewsArticleComment from "../common/NewsArticleComment";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import NewsDetailsTopContent from "./NewsDetailsTopContent";
import { AllNewsContext } from "../../context/AllNewsProvider";
import Http from "../../core/services/interceptor/interceptor";

const apiEndpoint2 = "https://invalid-js.herokuapp.com/api/comments/";

const NewsDetailsContent = ({}) => {
  const AllNews = useContext(AllNewsContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [course, setCourse] = useState([]);
  const [course2, setCourse2] = useState({
    teacher: { fullName: "" },
    lesson: { description: "" },
    image: "",
    startDate: "",
    endDate: "",
  });
  const [suggestHolder, setSuggestHolder] = useState([]);
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState([]);
  const [contFlag, setContFlag] = useState(false);
  const [contFlag2, setContFlag2] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let activeStyle = {
    borderBottom: "3px solid #004458",
    color: "#004458",
    fontSize: "21px",
  };

  useEffect(() => {
    async function dataGetter() {
      const data = await Http.get(
        "https://invalid-js.herokuapp.com/api/news/topNews"
      );
      setSuggestHolder(data.data.result);
    }
    dataGetter();
  }, []);

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

    setContFlag(true);
    setContFlag2(false);

    async function dataGetter() {
      const data = await axios.get(
        `https://invalid-js.herokuapp.com/api/news/${id}`
      );
      setArticle(data.data.result);
      if (data.data.result.category === "news") {
        setCategory("اخبار");
      } else if (data.data.result.category === "article") {
        setCategory("مقاله");
      }
    }
    dataGetter();

    AllNews.NewsIdSetter(id);
  }, [id]);
  useEffect(() => {
    setTimeout(function loading() {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleSuggest = (article) => {
    navigate(`/AllNews/${article._id}/`);
    setIsLoading(true);
    setTimeout(function loading() {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Fragment>
      <NewsDetailsTopContent
        isLoad={isLoading}
        newsId={id}
        newsName={article.title}
        newsCat={category}
        newsLike={31}
        newsDisLike={17}
        newsComment={comments.length}
        newsImg={article.image}
      />
      {!isLoading && (
        <main className={style["main-content"]}>
          <div className={"container"}>
            <div className="row">
              <div
                className={
                  "col-12 col-lg-8 p-5 px-3 px-sm-4 p-sm-3 pt-3 pt-sm-2"
                }
              >
                <div className="row">
                  <div className="col-6 p-1">
                    <NavLink
                      to={`/AllNews/${id}/`}
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
                      to={`/AllNews/${id}/comment`}
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
              <div className={"col-0 col-lg-4 p-2 d-none d-lg-block"}>
                <div
                  className={`text center ${style["holder-suggest-article"]}`}
                >
                  <h4 className={style["suggest-title"]}> جدیدترین اخبار</h4>

                  {suggestHolder.slice(0, 3).map((sArticle) => (
                    <SuggestCard
                      key={sArticle._id}
                      cPic={sArticle.image}
                      cName={sArticle.title}
                      cTeacher={"سهیل جعفری"}
                      //cTo={`/AllNews/${sArticle._id}/`}
                      handleSet={() => handleSuggest(sArticle)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};

export default NewsDetailsContent;
