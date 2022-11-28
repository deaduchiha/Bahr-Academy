import React, { Fragment, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import { clearStorage } from "../../core/services/storage/storage";

import Home from "../../assets/images/StudentPanel/home.png";
import Out2 from "../../assets/images/StudentPanel/logOut2.png";
import styles from "../../screens/StudentPanel/StudentPanel.module.css";

import { CartContext } from "../../context/CartContextProvider";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const PanelTopNavItems = () => {
  let activeStyle2 = {
    background: "#08856833",
  };

  const isLogged = useContext(IsLoggedContext);
  const { state } = useContext(CartContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    isLogged.changeIsLogged(false);
    clearStorage();
    navigate("/");
    isLogged.studentLoad([]);
  };

  return (
    <Fragment>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle2 : undefined)}
        className={`me-5 ${styles["left-top-nav"]} ${styles["left-top-nav-img"]}`}
        to="/"
      >
        <img className={styles["left-nav-home"]} src={Home} alt="" />
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle2 : undefined)}
        className={styles["left-top-nav"]}
        to="/courses"
      >
        دوره ها
      </NavLink>
      <Link className={styles["left-top-nav"]} to="/news/">
        اخبار
      </Link>

      <Link className={styles.cart} to="/cart">
        <ShoppingCartRoundedIcon className={styles.icon} />
        <span className={styles.counter}>{state.itemsCounter}</span>
      </Link>

      <div
        onClick={handleLogOut}
        style={{ display: "inline", cursor: "pointer" }}
        className={`me-1 d-lg-none ${styles["left-top-nav"]} ${styles["left-top-nav-img"]} ${styles["left-top-nav-img-2"]}`}
      >
        <img
          className={`${styles["left-nav-home"]} ${styles["left-nav-home-2"]}`}
          src={Out2}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default PanelTopNavItems;
