import React from "react";
import classes from "../StudentPanel/PanelDashbord/PanelDashbord.module.css";
import PanelItemsSearchBox from "./PanelItemsSearchBox";

const PanelTitleInfo = ({
  nameTitle,
  csClass,
  value,
  onChange,
  searchShow,
}) => {
  return (
    <div className={`${csClass} ${classes["main-title"]}`}>
      {searchShow && <PanelItemsSearchBox value={value} onChange={onChange} />}
      {nameTitle}
    </div>
  );
};

export default PanelTitleInfo;
