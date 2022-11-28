import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import style from "../../../screens/NewsDetails/NewsDetails.module.css";

const NavBarAll = ({}) => {
  const pageUrl = useLocation().pathname;

  useEffect(() => {
    if (
      pageUrl === "/StudentPanel/" ||
      pageUrl === "/StudentPanel/editPro" ||
      pageUrl === "/StudentPanel/changePass" ||
      pageUrl === "/StudentPanel/myCourses" ||
      pageUrl === "/StudentPanel/listCourses" ||
      pageUrl === "/login" ||
      pageUrl === "/register" ||
      pageUrl === "/adminAuth" ||
      pageUrl === "/forgetPass"
    ) {
      document.getElementById("allHeader").style.display = "none";
    } else {
      document.getElementById("allHeader").style.display = "block";
    }
  });

  return (
    <div
      id="allHeader"
      style={{
        position: "absolute",
        top: "0px",
        left: "0",
        width: "100%",
        zIndex: "800",
        background: "transparent",
        paddingTop: "0px",
      }}
    >
      <div className="container">
        <Navbar />
        <span className={style["nav-liner"]}></span>
      </div>
    </div>
  );
};

export default NavBarAll;
