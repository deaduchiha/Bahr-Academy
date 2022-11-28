import React from "react";
import styles from "./Help.module.css";
import Cards from "./Cards";
import StarIcon from "@mui/icons-material/Star";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Help = (props) => {
  return (
    <>
      <h4 style={{ marginTop: "70px" }} className={`${styles.helpTitle} mb-5`}>
        بامبو در یک نگاه
      </h4>
      <div className={`d-flex justify-content-evenly align-center flex-wrap`}>
        <Cards
          icon={<StarsRoundedIcon />}
          title="دوره های اختصاصی"
          des="با پشتیبانی و کیفیت بالا ارائه میده !"
        />
        <Cards
          icon={<HailRoundedIcon />}
          title=" اجازه تدریس "
          des=" به هر مدرسی رو نمیده. چون کیفیت براش مهمه ! "
        />
        <Cards
          icon={<MovieFilterRoundedIcon />}
          title=" دوره پولی و رایگان "
          des="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده "
        />
        <Cards
          icon={<AccountCircleRoundedIcon />}
          title="  اهمیت به کاربر  "
          des="اولویت اول و آخر آکادمی اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست  "
        />
      </div>
    </>
  );
};

export default Help;
