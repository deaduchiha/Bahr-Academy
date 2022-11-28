import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import Etehadie from "../../../assets/images/Footer/etehadie.png";
import Etemad from "../../../assets/images/Footer/etemad.png";
import NeshanMeli from "../../../assets/images/Footer/neshanMeli.png";
import { Button, Input } from "@mui/material";

const Footer = () => {
  const pageUrl = useLocation().pathname;

  useEffect(() => {
    if (
      pageUrl === "/StudentPanel/" ||
      pageUrl === "/StudentPanel/editPro" ||
      pageUrl === "/StudentPanel/changePass" ||
      pageUrl === "/StudentPanel/myCourses" ||
      pageUrl === "/StudentPanel/listCourses" ||
      pageUrl === "/login" ||
      pageUrl === "/adminAuth" ||
      pageUrl === "/register" ||
      pageUrl === "/forgetPass"
    ) {
      document.getElementById("allFooter").style.display = "none";
    } else {
      document.getElementById("allFooter").style.display = "block";
    }
  });

  return (
    <div id="allFooter" className={`fluid ${styles.contain}`}>
      <div className={`container `}>
        <div className={`row  ${styles.footerItem}`}>
          <div
            className={`col-lg-7 ${styles.footerItems} ${styles.footerAboutUs}`}
          >
            <div className={`${styles.title}`}>درباره بامبو</div>
            <div className={`${styles.desc}`}>
              <p>
                بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
                مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار
                دهد.
              </p>
            </div>
          </div>
          <div
            className={` col-lg-5 col-md-12  ${styles.footerItems} ${styles.footerNews}`}
          >
            <div className={`${styles.title}`}>خبرنامه</div>
            <div className={`${styles.desc}`}>
              <div
                style={{
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                {" "}
                <Input
                  sx={{
                    fontSize: { lg: 15, md: 14, xs: 12 },
                  }}
                  className={styles.search}
                  placeholder="ایمیل خود را وارد کنید..."
                  style={{}}
                />
                <Button
                  sx={{
                    fontSize: { lg: 15, md: 13, xs: 11 },
                  }}
                  className={styles.button}
                  style={{}}
                  variant="contained"
                >
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className={` col-lg-4 col-sm-6 ${styles.footerItems}`}>
            <div className={`${styles.title}`}>ارتباط با ما</div>
            <div className={`${styles.desc}`}>
              {" "}
              nikzdalireza@gmail.com
              <br />
              soheil.jafary@gmail.com <br />
              shole@gmail.com
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 ${styles.footerItems}`}>
            <div className={`${styles.title}`}>همراه باشید</div>
            <div className={`${styles.desc}`}>
              {" "}
              سوالات رایج
              <br />
              قوانین <br />
              خدمات
            </div>
          </div>
          <div
            className={` col-lg-5 col-md-12 col-sm-12 col-xs-12 ${styles.footerItems} ${styles.footerLogos}`}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className={`${styles.desc}`}
            >
              <div className={styles.namad}>
                <img src={Etehadie} />
              </div>
              <div className={styles.namad}>
                <img src={Etemad} />
              </div>
              <div className={styles.namad}>
                <img src={NeshanMeli} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`col col-lg-12 ${styles.copyRight}`}>
        <p>
          کليه حقوق محصولات و محتوای اين سایت متعلق به{" "}
          <span
            style={{
              padding: "0",
              margin: "0",
              color: "#088568",
            }}
          >
            {" "}
            بامبو
          </span>{" "}
          می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون
          رضایت ماست.
        </p>
      </div>
    </div>
  );
};

export default Footer;
