import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";

const DownSwiper = ({ sTop, downSize }) => {
  const handleSwip = () => {
    window.scrollBy({
      top: `${downSize}`,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleSwip}
      style={{ bottom: `${sTop}px` }}
      className={style["swip-down"]}
    >
      <span className={style["swip-name"]}>به پایین بکشید</span>
      <span className={style["swip-trigger"]}></span>
    </div>
  );
};

export default DownSwiper;
