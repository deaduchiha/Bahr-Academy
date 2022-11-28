import React from "react";
import Bar from "./Bar";
import styles from "./Progress.module.css";

const Progress = (props) => {
  return (
    <>
      <h4
        style={{ marginTop: "58px", marginBottom: "40px" }}
        className={`${styles.progressTitle}`}
      >
        مهارت های تیم اکادمی
      </h4>
      <div
        className={`d-flex justify-content-between align-center flex-wrap`}
        style={{ gap: "20px" }}
      >
        <Bar bgColor="#da4167" percent="90%" att="HTML 5: 90%" />
        <Bar bgColor="#1c7c54" percent="90%" att="CSS 3: 90%" />
        <Bar bgColor="#9a6d38" percent="90%" att="javaScript: 90%" />
        <Bar bgColor="#8e5572" percent="95%" att="c#: 95%" />
        <Bar bgColor="#f24c00" percent="85%" att="NODE.JS: 75%" />
        <Bar bgColor="#c6232d" percent="85%" att="ASP.NET: 85%" />
        <Bar bgColor="#fc7a1e" percent="80%" att="SEO: 80%" />
        <Bar bgColor="#004458" percent="95%" att="WEB-DESIGN: 95%" />
        <Bar bgColor="#1e2a2d" percent="90%" att="REACT: 90%" />
      </div>
    </>
  );
};

export default Progress;
