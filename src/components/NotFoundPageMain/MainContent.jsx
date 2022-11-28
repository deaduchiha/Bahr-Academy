import React from "react";
import { Link } from "react-router-dom";
import style from "../../screens/MainFourOFourNotFound/MainFourOFourNotFound.module.css";

const MainContainer = () => {
  return (
    <main className={style["main-holder"]}>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={`col-6 text-center ${style["not-text"]}`}>
            صفحه مورد نظر شما یافت نشد.
            <Link className={style["not-link"]} to="/">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
