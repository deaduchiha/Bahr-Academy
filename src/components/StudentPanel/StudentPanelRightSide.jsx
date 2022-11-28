import React, { Fragment } from "react";
import PanelNav from "./panelNav/PanelNav";

import styles from "../../screens/StudentPanel/StudentPanel.module.css";

const StudentPanelRightSide = () => {
  return (
    <Fragment>
      <div
        className={`col-12 col-lg-3 col-xl-3 p-0 m-0 ${styles["right-side"]}`}
      >
        <div className={styles["my-right-holder"]}>
          <PanelNav></PanelNav>
        </div>
      </div>
      <div
        className={`col-12 col-lg-3 col-xl-3 ${styles["left-extra-remove"]}`}
      ></div>
    </Fragment>
  );
};

export default StudentPanelRightSide;
