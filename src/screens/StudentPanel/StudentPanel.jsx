import React from "react";
import StudentPanelRoutesContainer from "../../components/StudentPanel/StudentPanelRoutesContainer";
import styles from "./StudentPanel.module.css";

const StudentPanel = ({}) => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles["panel-container-row"]}`}>
        <StudentPanelRoutesContainer />
      </div>
    </div>
  );
};

export default StudentPanel;
