import React, { useEffect } from "react";
import styles from "./ServicesTitle.module.css";
import PageTitle from "../../NewsArticles/PageTitle";
const ServicesTitle = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <PageTitle titleShow={"خدمات"} />
      </div>
      <h4 className={`${styles.title} mb-4`}>خدمات بامبو در یک نگاه</h4>
      <div className={`mb-3 ${styles.des}`}>
        {" "}
        به تمامی فرآیندهایی که از صفر تا صد برای طراحی یک سایت انجام می شود را
        خدمات طراحی سایت گویند. این خدمات شامل فرآیندهای مختلفی است که هر کدام
        نیازمند برنامه ریزی و استراتژی خاص خود می باشد. به افرادی که این خدمات
        را انجام می دهند، طراح سایت (designer) و برنامه نویس (developer) گفته می
        شود. شرکت سایت کار، تمامی خدمات طراحی سایت از صفر تا صد با استفاده از
        بهترین نیروهای متخصص در این حوزه انجام میدهد.
      </div>
    </>
  );
};

export default ServicesTitle;
