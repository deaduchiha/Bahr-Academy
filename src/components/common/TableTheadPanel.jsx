import React from "react";
import styles from "../StudentPanel/PanelCoursesList/PanelCoursesList.module.css";

const TableTheadPanel = ({}) => {
  return (
    <thead className={`${"thead"} ${styles["my-thead"]}`}>
      <tr className={`${styles["my-trr"]}`}>
        <th
          className={`${styles["my-thh"]} ${styles["small-remove"]}`}
          scope="col"
        >
          عکس
        </th>
        <th className={`${styles["my-thh"]}`} scope="col">
          نام دوره
        </th>
        <th
          className={`${styles["my-thh"]} ${styles["mob-remove"]}`}
          scope="col"
        >
          مدرس
        </th>
        <th
          className={`${styles["my-thh"]} ${styles["mob-remove"]}`}
          scope="col"
        >
          ظرفیت
        </th>
        <th className={`${styles["my-thh"]}`} scope="col">
          تاریخ شروع
        </th>
        <th className={`${styles["my-thh"]}`} scope="col">
          قیمت
        </th>
        <th className={`${styles["my-thh"]}`} scope="col">
          عملیات
        </th>
      </tr>
    </thead>
  );
};

export default TableTheadPanel;
