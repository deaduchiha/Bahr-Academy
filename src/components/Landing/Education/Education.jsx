import React from "react";
import styles from "./Education.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bussines from "../../../assets/images/Education/business people.png";
import young from "../../../assets/images/Education/young handsome.png";
import cheerful from "../../../assets/images/Education/cheerful.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  AOS.init();

  const navigate = useNavigate();

  const handleGoTo = (flag) => {
    if (flag === "service") {
      navigate("/services");
    } else if (flag === "coOp") {
      navigate("/aboutUs");
    }
  };

  return (
    <>
      <div
        style={{ overflow: "hidden" }}
        className={`fluid mt-5 ${styles.education}`}
      >
        <div className={``}>
          <div
            data-aos="fade-left"
            data-aos-delay="60"
            className={`${styles.slant}`}
          >
            <div className={`${styles.describ}  col-lg-8 col-sm-8`}>
              <span className={`${styles.title}`}>مشاوره آنلاین</span>
              <p className={`${styles.par}`}>
                مشاوران ما برای حل مشکلات شما آماده اند...
              </p>
            </div>
            <div className={`${styles.image} col`}>
              <div className={`${styles.buttonGrid}`}>
                <Button
                  onClick={() => handleGoTo("service")}
                  sx={{
                    fontSize: { lg: "1.9vh", md: 13, xs: 12 },
                    minWidth: { xs: "110px" },
                  }}
                  style={{
                    minWidth: "100px",
                    color: "#004458",
                    fontFamily: "est",
                    background: "#fff",
                  }}
                  variant="contained"
                >
                  مشاوره
                </Button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="80"
            className={` ${styles.slant}`}
          >
            <div className={`${styles.image} ${styles.image2} col`}></div>
            <div className={`${styles.describ}  col-lg-8 col-sm-8`}>
              <span className={`${styles.title}`}>ارائه مدرک معتبر</span>
              <p className={`${styles.par}`}>
                بهترین راه برای ساختن رزومه حرفه ای...
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className={` ${styles.slant}`}
          >
            <div className={`${styles.describ}  col-lg-8 col-sm-8`}>
              <span className={`${styles.title}`}>همکاری در آموزش</span>
              <p className={`${styles.par}`}>
                به اساتید آموزشی ما در بامبو بپیوندید...
              </p>
            </div>
            <div className={`${styles.image} ${styles.image3} col`}>
              <div className={`${styles.buttonGrid}`}>
                <Button
                  onClick={() => handleGoTo("coOp")}
                  sx={{
                    fontSize: { lg: "1.9vh", md: 13, xs: 12 },
                    minWidth: { xs: "110px" },
                  }}
                  style={{
                    minWidth: "100px",
                    color: "#004458",
                    fontFamily: "est",
                    background: "#fff",
                  }}
                  variant="contained"
                >
                  همکاری
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
