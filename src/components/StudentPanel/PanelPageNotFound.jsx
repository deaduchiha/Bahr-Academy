import React from "react";
import styles from "../../screens/StudentPanel/StudentPanel.module.css";

const PanelPageNotFound = () => {
  return (
    <div className={`${"h-100"} ${styles["not"]}`}>
      صفحه داخلی مورد نظر یافت نشد.
    </div>
  );
};

export default PanelPageNotFound;
