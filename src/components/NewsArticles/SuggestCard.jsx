import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import { Link } from "react-router-dom";

const SuggestCard = ({ cPic, cName, cTeacher, cTo, handleSet }) => {
  return (
    <div className={"col-12"}>
      <div className={`shadow ${"card"} ${style["my-card"]}`}>
        <div className="row g-0 text-center text-md-start">
          <div className={`${"col-5"} ${style["my-img-body"]}`}>
            <img
              src={cPic}
              className={`${""} ${style["my-img-fluid"]}`}
              alt="..."
            />
            <div
              style={{ display: "inline", cursor: "pointer" }}
              className={`${""} ${style["card-link"]}`}
              to={cTo}
              onClick={handleSet}
            >
              مشاهده
            </div>
          </div>
          <div className={`${"col-7"} ${style["left-card-holder"]}`}>
            <div className={`${"card-body"} ${style["my-card-body"]}`}>
              <p
                style={{ textAlign: "justify", textJustify: "inter-word" }}
                className={`${"card-text mb-3"} ${style["my-card-text"]}`}
              >
                عنوان : {cName}
              </p>
              <div className="row">
                <div className={`${"col-12"} ${style["my-teacher"]}`}>
                  نویسنده : {cTeacher}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestCard;
