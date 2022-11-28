import React from "react";

// Components
import CourseHeader from "../../../../components/Courses/CourseHeader";
import MainContent from "../../MainContent/MainContent";
import PageTitle from "../../../NewsArticles/PageTitle";

// Styles
import styles from "./CartHolder.module.css";

const CartHolder = ({ children }) => {
  return (
    <>
      <CourseHeader />
      <MainContent>
        <PageTitle titleShow={"سبد خرید"} />
        <div className={`container ${styles.container}`}>{children}</div>
      </MainContent>
    </>
  );
};

export default CartHolder;
