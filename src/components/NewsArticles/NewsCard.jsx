import React from "react";
import cards from "../../screens/NewsArticle/NewsArticle.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsCard = ({ cardImg, cardName, cardWriter, cardCat, cardTo }) => {
  AOS.init();
  return (
    <div className={"col-12 col-sm-6"}>
      <div
        data-aos="fade-right"
        data-aos-delay="5"
        className={`shadow ${"card"} ${cards["my-card"]}`}
      >
        <div className="row g-0 text-center text-md-start">
          <div
            className={`${"col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3"} ${
              cards["my-img-body"]
            }`}
          >
            <img
              src={cardImg}
              className={`${cards["my-img-fluid"]}`}
              alt="..."
            />
            <Link className={`${cards["card-link"]}`} to={cardTo}>
              مشاهده
            </Link>
          </div>
          <div
            className={`${"col-md-8 col-lg-8 col-xl-8 col-xxl-9"} ${
              cards["left-card-holder"]
            }`}
          >
            <div className={`${"card-body"} ${cards["my-card-body"]}`}>
              <p className={`${"card-text mb-3"} ${cards["my-card-text"]}`}>
                عنوان : {cardName}
              </p>
              <div className="row">
                <div className={`${"col-9"} ${cards["my-teacher"]} text-start`}>
                  نویسنده : {cardWriter}
                </div>
                <div className={`${"col-3 text-end"} ${cards["my-price"]}`}>
                  {cardCat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
