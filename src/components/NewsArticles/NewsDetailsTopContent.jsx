import React, { Fragment } from "react";
import DownSwiper from "../common/DownSwiper";
import LikeDisComment from "../common/LikeDisComment";
import News from "../../assets/images/NewsDetails/news.png";
import style from "../../screens/NewsDetails/NewsDetails.module.css";

const NewsDetailsTopContent = ({
  newsId,
  newsName,
  newsCat,
  newsLike,
  newsDisLike,
  newsComment,
  newsImg,
  isLoad,
}) => {
  return (
    <header className={style["news-header"]}>
      <img className={style["img-news"]} src={News} alt="" />
      <div className={style["head-mask"]}>
        <div style={{ paddingTop: "59px" }} className={"container"}>
          {isLoad && (
            <div className="row">
              <div className="col-12 text-center" style={{ marginTop: "40vh" }}>
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
              <div className={"row"}>
                <div className={"col-12"}>
                  <img
                    className={style["course-img-news"]}
                    src={newsImg}
                    alt=""
                  />
                </div>
                <div className="col-12">
                  <h3 className={`text-center ${style["news-title"]}`}>
                    {newsName}
                  </h3>
                </div>
                <div className="col-5">
                  <span className={style["cat-name"]}># {newsCat}</span>
                </div>
                <div className="col-7 d-flex justify-content-end">
                  <LikeDisComment
                    mLike={newsLike}
                    mDis={newsDisLike}
                    mComment={newsComment}
                  />
                </div>
              </div>
            </Fragment>
          )}
        </div>
        {!isLoad && <DownSwiper sTop={39} downSize={window.innerHeight} />}
      </div>
    </header>
  );
};

export default NewsDetailsTopContent;
