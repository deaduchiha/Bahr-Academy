import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Perk from "../../assets/images/CourseDetails/perk.png";
import Online from "../../assets/images/CourseDetails/online.png";
import Learn from "../../assets/images/CourseDetails/learn.png";
import Success from "../../assets/images/CourseDetails/success.png";

const CourseDetailsBottomInfo = () => {
  return (
    <div className={`container-fluid ps-0 mt-3 ${style["fluid-color"]}`}>
      <div className="row">
        <div className="col-5 col-md-4 d-none d-md-block">
          <img className={style["img-perk"]} src={Perk} alt="" />
        </div>
        <div className={`col-12 col-md-8 ps-5 ps-md-0 ${style["left-height"]}`}>
          <div className={"col-12 mt-3"}>
            <h4 className={style["perk-main-title"]}>مزایای این دوره :</h4>
          </div>
          <div className={"col-12 mt-3"}>
            <img className={style["inside-perk-img"]} src={Online} alt="" />
            <h6 className={style["inside-perk-title"]}>
              اشنایی با زبان برنامه نویسی جاوا اسکریپت
            </h6>
            <p className={style["inside-perk-p"]}>
              در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق
              و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را
              انجام خواهی داد و به راحتی مشکلات را حل خواهید کرد.
            </p>
          </div>
          <div className={"col-12 mt-3"}>
            <img className={style["inside-perk-img"]} src={Learn} alt="" />
            <h6 className={style["inside-perk-title"]}>
              اشنایی با زبان برنامه نویسی جاوا اسکریپت
            </h6>
            <p className={style["inside-perk-p"]}>
              در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق
              و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را
              انجام خواهی داد و به راحتی مشکلات را حل خواهید کرد.
            </p>
          </div>
          <div className={"col-12 mt-3"}>
            <img className={style["inside-perk-img"]} src={Success} alt="" />
            <h6 className={style["inside-perk-title"]}>
              اشنایی با زبان برنامه نویسی جاوا اسکریپت
            </h6>
            <p className={style["inside-perk-p"]}>
              در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق
              و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را
              انجام خواهی داد و به راحتی مشکلات را حل خواهید کرد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsBottomInfo;
