import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../screens/StudentPanel/StudentPanel.module.css";

const PanelnavItem = ({ mainClass, navTo, navName, offImg, onImg }) => {
  let activeStyle = {
    background: "#fff",
    color: "#088568",
  };
  return (
    <div className={mainClass}>
      <NavLink
        to={navTo}
        className={styles["link-nav"]}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        children={({ isActive }) => {
          const file = isActive ? `${onImg}` : `${offImg}`;
          return (
            <>
              <img className={styles["img-ico"]} alt="" src={file} />
              <span className={styles["mobile-remove2"]}>{navName}</span>
            </>
          );
        }}
      ></NavLink>
    </div>
  );
};

export default PanelnavItem;
