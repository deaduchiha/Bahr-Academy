import React, { useEffect, Fragment, useState } from "react";
import styles from "../Header/Header.module.css";
import HeaderCont from "./HeaderCont";
import Search from "../../common/Search/Search";
import DownSwiper from "../../common/DownSwiper";
import Carousel from "react-bootstrap/Carousel";
import Http from "../../../core/services/interceptor/interceptor";

import one from "../../../assets/images/StudentPanel/1.png";
import two from "../../../assets/images/StudentPanel/4.png";
import three from "../../../assets/images/StudentPanel/12.jpg";

const Header = ({}) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`https://invalid-js.herokuapp.com/api/news`);
      setSlides(
        data.data.result.filter(
          (m) => m.text === "//sliderContent82" && m.category === "news"
        )
      );
    };
    dataGetter();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles["header-bot-cover"]}></div>
        <div className={styles["header-slider"]}>
          <Carousel
            className={styles["my-crs"]}
            fade
            indicators={false}
            controls={false}
          >
            <Carousel.Item>
              {/*<div className={styles["my-crs-img-1"]}></div>*/}
              <img
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
                alt=""
                src={
                  slides.length !== 0 ? slides[slides.length - 1].image : three
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              {/*<div className={styles["my-crs-img-2"]}></div>*/}
              <img
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
                alt=""
                src={
                  slides.length !== 0 ? slides[slides.length - 2].image : two
                }
              />
            </Carousel.Item>
            <Carousel.Item>
              {/*<div className={styles["my-crs-img-3"]}></div>*/}
              <img
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
                alt=""
                src={
                  slides.length !== 0 ? slides[slides.length - 3].image : one
                }
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="container-fluid"
          style={{ background: "rgba(29, 53, 87, 0.6)" }}
        >
          <div className="container" style={{ paddingTop: "59px" }}>
            <HeaderCont />
          </div>
        </div>
        <DownSwiper sTop={76} downSize={window.innerHeight} />
      </div>
      <div style={{ position: "relative" }}>
        <Search bggColor={"#24426B"} />
      </div>
    </Fragment>
  );
};

export default Header;
