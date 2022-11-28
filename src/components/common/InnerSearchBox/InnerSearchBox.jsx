import React, { Fragment } from "react";
import style from "./InnerSearchBox.module.css";
import Search from "../../../assets/images/Courses/search.png";

const InnerSearchBox = ({ value, onChange, placeH }) => {
  return (
    <Fragment>
      <div className={style["searchBar"]}>
        <img className={style.searchh} src={Search} alt="search" />
        <input
          value={value}
          onChange={onChange}
          className={`search ${style.mySearch}`}
          placeholder={placeH}
        />
      </div>
    </Fragment>
  );
};

export default InnerSearchBox;
