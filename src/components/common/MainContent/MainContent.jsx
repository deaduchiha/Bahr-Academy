import React from "react";
import styles from "./MainContent.module.css";
const MainContent = (props) => {
  return (
    <>
      <main className={`${styles.mainContent}`}>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};

export default MainContent;
