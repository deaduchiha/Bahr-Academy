import { Button } from "@mui/material";
import React from "react";
import styles from "../Header/HeaderCont.module.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const HeaderCont = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>
          باید راه بهتری برای آموزش ساخته میشد، پس ما ساختیمش...
        </h3>
        <p className={styles.par}>
          سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
          جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم
          با راهکار های نوین ، فرصتی برای افراد خواهان پیشرفت فراهم کنیم.
        </p>
        <Link to="/courses">
          <div className={styles.moshahede}>
            <Button
              sx={{
                fontSize: { lg: 16, md: 14, xs: 12 },
              }}
              style={{
                fontFamily: "lale",
                background: "#fff",
                color: "rgb(29, 53, 87)",
                borderRadius: "50px",
              }}
              variant="contained"
            >
              مشاهده دوره ها
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderCont;
