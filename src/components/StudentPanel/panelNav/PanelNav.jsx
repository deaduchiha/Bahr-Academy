import React, { useContext } from "react";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import { clearStorage } from "../../../core/services/storage/storage";
import { Link, useNavigate } from "react-router-dom";
import PanelNavItem from "../../common/panelNavItem/PanelNavItem";
import styles from "../../../screens/StudentPanel/StudentPanel.module.css";
import Clock from "react-digital-clock";
import Bambo from "../../../assets/images/StudentPanel/Bambo.png";
import Dash1 from "../../../assets/images/StudentPanel/dash1.png";
import Dash2 from "../../../assets/images/StudentPanel/dash2.png";
import Edit1 from "../../../assets/images/StudentPanel/edit1.png";
import Edit2 from "../../../assets/images/StudentPanel/edit2.png";
import My1 from "../../../assets/images/StudentPanel/my1.png";
import Pass1 from "../../../assets/images/StudentPanel/ps1.png";
import Pass2 from "../../../assets/images/StudentPanel/ps2.png";
import My2 from "../../../assets/images/StudentPanel/my2.png";
import Close from "../../../assets/images/StudentPanel/close.png";
import List1 from "../../../assets/images/StudentPanel/list1.png";
import List2 from "../../../assets/images/StudentPanel/list2.png";

const PanelNav = () => {
  const isLogged = useContext(IsLoggedContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    isLogged.changeIsLogged(false);
    clearStorage();
    navigate("/");
    isLogged.studentLoad([]);
  };
  return (
    <div className="row">
      <div className={`col-md-12 text-center mt-5 ${styles["mobile-remove"]}`}>
        <h3 className={styles["panel-title"]}>
          اکادمی اموزشی بامبو
          <img
            className={`ms-2 ${styles["title-top-img"]}`}
            alt=""
            src={Bambo}
          />
        </h3>
      </div>
      <span className={styles["linerr"]}></span>
      <div className="col-2 col-lg-12 text-center mt-2 mt-md-2">
        <h3 className={styles["panel-name"]}>
          <Link className={styles["link-inside"]} to="/StudentPanel">
            پنل <span className={styles["mobile-student-remov"]}>دانشجو</span>
          </Link>
        </h3>
      </div>
      <div className={styles["clock-remover"]}>
        <Clock />
      </div>
      <PanelNavItem
        mainClass={"col-2 col-lg-12 mt-2 mt-md-2 mt-lg-5"}
        navTo={"/StudentPanel/"}
        navName={"داشبورد"}
        offImg={Dash1}
        onImg={Dash2}
      />
      <PanelNavItem
        mainClass={"col-2 col-lg-12 mt-2 mt-md-2"}
        navTo={"/StudentPanel/editPro"}
        navName={"ویرایش پروفایل"}
        offImg={Edit1}
        onImg={Edit2}
      />
      <PanelNavItem
        mainClass={"col-2 col-lg-12 mt-2 mt-md-2"}
        navTo={"/StudentPanel/changePass"}
        navName={"تغییر پسورد "}
        offImg={Pass1}
        onImg={Pass2}
      />

      <PanelNavItem
        mainClass={"col-2 col-lg-12 mt-2 mt-md-2"}
        navTo={"/StudentPanel/myCourses"}
        navName={"دوره های من"}
        offImg={My1}
        onImg={My2}
      />
      <PanelNavItem
        mainClass={"col-2 col-lg-12 mt-2 mt-md-2"}
        navTo={"/StudentPanel/listCourses"}
        navName={"لیست دوره ها"}
        offImg={List1}
        onImg={List2}
      />

      <div className="col-2 col-lg-12 mt-2 mt-md-2 d-none d-lg-block">
        <div
          style={{ cursor: "pointer" }}
          onClick={handleLogOut}
          className={styles["link-nav"]}
        >
          <img className={styles["img-ico"]} alt="" src={Close} />
          <span className={styles["mobile-remove2"]}>خروج</span>
        </div>
      </div>
    </div>
  );
};

export default PanelNav;
