import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import PanelDashbord from "./PanelDashbord/PanelDashbord";
import PanelEditProfile from "./PanelEditProfile/PanelEditProfile";
import PanelChangePass from "./PanelChangePass/PanelChangePass";
import PanelCoursesList from "./PanelCoursesList/PanelCoursesList";
import PanelMyCourses from "./PanelMyCourses/PanelMyCourses";
import PanelPageNotFound from "./PanelPageNotFound";
import StudentPanelRightSide from "./StudentPanelRightSide";
import StudentPanelLeftSide from "./StudentPanelLeftSide";
import styles from "../../screens/StudentPanel/StudentPanel.module.css";

const StudentPanelRoutesContainer = () => {
  return (
    <Fragment>
      <StudentPanelRightSide />
      <div className={`col-12 col-lg-9 col-xl-9 m-0 ${styles["left-side"]}`}>
        <div className={styles["my-container"]}>
          <StudentPanelLeftSide />
          <div className={`col-12 rounded ${styles["bot-side"]}`}>
            <Routes>
              <Route path="/" element={<PanelDashbord />} />
              <Route path="/editPro" element={<PanelEditProfile />} />
              <Route path="/changePass" element={<PanelChangePass />} />
              <Route path="/myCourses" element={<PanelMyCourses />} />
              <Route path="/listCourses" element={<PanelCoursesList />} />
              <Route path="*" element={<PanelPageNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentPanelRoutesContainer;
