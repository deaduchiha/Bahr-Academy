import React, { Fragment, useState, useContext, useEffect } from "react";
import LoginInfoHolder from "../common/loginInfoHolder/LoginInfoHolder";
import PanelExtraFeatures from "./PanelExtraFeatures";
import PanelTopNavItems from "./PanelTopNavItems";

import styles from "../../screens/StudentPanel/StudentPanel.module.css";
import s11 from "../../assets/images/StudentPanel/11.png";
import s44 from "../../assets/images/StudentPanel/44.png";
import s55 from "../../assets/images/StudentPanel/55.png";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import Http from "../../core/services/interceptor/interceptor";

const StudentPanelLeftSide = () => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`https://invalid-js.herokuapp.com/api/news`);
      setSlides(
        data.data.result.filter(
          (m) => m.text === "//sliderContent82" && m.category === "article"
        )
      );
    };
    dataGetter();
  }, []);

  return (
    <Fragment>
      <div
        className={`col-12 rounded text-center text-md-start ${styles["top-side"]}`}
      >
        <PanelTopNavItems />
        <LoginInfoHolder
          userName={CurrentUser.fullName}
          userImg={CurrentUser.profile}
          navTo={"/StudentPanel/editPro"}
          navClassCheck={"left-top-nav"}
          imgClassCheck={"login-person"}
          logShow={false}
          holderClass={"login-holder"}
        />
      </div>
      <PanelExtraFeatures
        senOne={
          slides.length !== 0
            ? slides[slides.length - 1].title
            : "محیطی شاد در کنار مهندسان درجه یک استان مازندران"
        }
        senTwo={
          slides.length !== 0
            ? slides[slides.length - 2].title
            : "محیطی شاد در کنار مهندسان درجه یک استان مازندران"
        }
        senThree={
          slides.length !== 0
            ? slides[slides.length - 3].title
            : "محیطی شاد در کنار مهندسان درجه یک استان مازندران"
        }
        picOne={slides.length !== 0 ? slides[slides.length - 1].image : s11}
        picTwo={slides.length !== 0 ? slides[slides.length - 2].image : s11}
        picThree={slides.length !== 0 ? slides[slides.length - 3].image : s11}
      />
    </Fragment>
  );
};

export default StudentPanelLeftSide;
