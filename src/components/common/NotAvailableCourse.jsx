import React from "react";
import cards from "../StudentPanel/PanelDashbord/PanelDashbord.module.css";

const NotAvailableCourse = ({ alarmNote }) => {
  return (
    <div className={`${"col-12 text-center mt-5 mb-4"} ${cards["not-enough"]}`}>
      {alarmNote}
    </div>
  );
};

export default NotAvailableCourse;
