import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../screens/StudentPanel/StudentPanel.module.css";
import Out from "../../../assets/images/Landing/out.png";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";

const LoginInfoHolder = ({
  userName,
  navTo,
  userImg,
  logShow,
  logHandle,
  navClassCheck,
  imgClassCheck,
  holderClass,
  AdminTo,
}) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  let activeStyle2 = {
    background: "#08856833",
  };
  return (
    <div className={`text-center ${styles[`${holderClass}`]}`}>
      <img className={styles[`${imgClassCheck}`]} src={userImg} alt="" />
      {CurrentUser.role !== "admin" && (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle2 : undefined)}
          className={styles[`${navClassCheck}`]}
          to={navTo}
        >
          {userName}
        </NavLink>
      )}
      {CurrentUser.role === "admin" && (
        <div
          onClick={AdminTo}
          style={{ display: "inline", cursor: "pointer" }}
          className={styles[`${navClassCheck}`]}
          to={navTo}
        >
          {userName}
        </div>
      )}
      {logShow && (
        <div onClick={logHandle} className={styles["out-btn"]}>
          <img className={styles["img-out"]} src={Out} alt="" />
        </div>
      )}
    </div>
  );
};

export default LoginInfoHolder;
