import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { carousel } from "bootstrap";
import scott from "../../../assets/images/News/scott.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Http from "../../../core/services/interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const News = () => {
  AOS.init();

  const [article, setArticle] = useState([
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
  ]);

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`${MainUrl}news/topArticles`);
      setArticle(data.data.result);
    };
    dataGetter();
  }, []);

  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate("/news/article");
  };

  return (
    <>
      <div
        style={{ overflow: "hidden" }}
        className={`${styles.fluidContain} fluid mt-4`}
      >
        <div className={styles.border}></div>
        <div
          className={`container d-flex justify-content-between ${styles.news} `}
        >
          <div
            data-aos="fade-left"
            data-aos-delay="220"
            style={{ position: "relative" }}
            className={`md-12 xs-12 ${styles.newsItem} ${styles.newsHolder}`}
          >
            <h2 className={styles.title}>اخبار و مقالات</h2>
            <p className={styles.par}>
              دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین
              روزنامه ها و رسانه ها ، در دسته بندی های گوناگونی همچون طراحی ،
              هنر برنامه نویسی ، اقتصاد، فلسفه ، فیزیک ، شیمی و...
            </p>
            <div
              onClick={handleGoTo}
              type="button"
              className={`btn-primary ${styles.btn}`}
            >
              مشاهده مقالات
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="220"
            className={`${styles.newsItem} ${styles.slideShow}`}
          >
            <div
              id="carouselExampleCaptions"
              className={`carousel slide`}
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className={`carousel-item active ${styles.slideShowCom}`}>
                  <img
                    src={article[0].image}
                    className={`d-block w-100 ${styles.imgg}`}
                    alt="..."
                  />
                  <div className={styles.caption}>
                    <p>{`${article[0].title.substr(0, 41)} ...`}</p>
                  </div>
                </div>
                <div className={`carousel-item ${styles.slideShowCom}`}>
                  <img
                    src={article[1].image}
                    className={`d-block w-100 ${styles.imgg}`}
                    alt="..."
                  />
                  <div className={styles.caption}>
                    <p>{`${article[1].title.substr(0, 41)} ...`}</p>
                  </div>
                </div>
                <div className={`carousel-item ${styles.slideShowCom}`}>
                  <img
                    src={article[2].image}
                    className={`d-block w-100 ${styles.imgg}`}
                    alt="..."
                  />
                  <div className={styles.caption}>
                    <p>{`${article[2].title.substr(0, 41)} ...`}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
