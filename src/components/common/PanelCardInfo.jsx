import React from "react";
import { Button } from "@mui/material";
import cards from "../StudentPanel/PanelDashbord/PanelDashbord.module.css";
import { Link } from "react-router-dom";

const PanelCardInfo = ({
  courseImg,
  courseName,
  courseTeacher,
  coursePrice,
  toLink,
}) => {
  return (
    <div className={`${"card"} ${cards["my-card"]}`}>
      <div className="row g-0">
        <div
          className={`${"col-md-4 col-lg-4 col-xl-4 col-xxl-3"} ${
            cards["my-img-body"]
          }`}
        >
          <img
            src={courseImg}
            className={`${""} ${cards["my-img-fluid"]}`}
            alt="..."
          />
          <Link className={`${""} ${cards["card-link"]}`} to={toLink}>
            مشاهده
          </Link>
        </div>
        <div
          className={`${"col-md-8 col-lg-8 col-xl-8 col-xxl-9"} ${
            cards["left-card-holder"]
          }`}
        >
          <div className={`${"card-body"} ${cards["my-card-body"]}`}>
            <p className={`${"card-text"} ${cards["my-card-text"]}`}>
              دوره : {courseName}
            </p>
            <div className="row">
              <div className={`${"col-12"} ${cards["my-teacher"]}`}>
                مدرس : {courseTeacher}
              </div>
              <div className={`${"col-12 text-end"} ${cards["my-price"]}`}>
                {coursePrice} تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelCardInfo;
