import React from "react";
import styles from "./Course.module.css";
import cSharp from "../../../assets/images/Course/cSharp.png";
import { Button } from "@mui/material";
import bootstrap from "../../../assets/images/Course/Bootstrap.png";
import java from "../../../assets/images/Course/java.png";
import js from "../../../assets/images/Course/JavaScripit.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Course = () => {
  AOS.init();

  const navigate = useNavigate();

  const handleGotToCourses = () => {
    navigate("/courses");
  };

  const handleGoTo = (flag) => {
    if (flag === "cc") {
      navigate("/AllCourses/6295dd94404f4a00236c772f/");
    } else if (flag === "jc") {
      navigate("/AllCourses/6286a82c9278660023f5f3e1/");
    } else if (flag === "jj") {
      navigate("/AllCourses/6286a7dc9278660023f5f3e0/");
    } else if (flag === "bt") {
      navigate("/AllCourses/62914d78e7a86b0023c32b8c/");
    }
  };

  return (
    <>
      <div style={{ overflow: "hidden" }} className={`fluid `}>
        <div className={`${styles.container} container `}>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className={`${styles.course} `}
          >
            <div className={styles.courseShape}>
              <div className={`${styles.cSharp} ${styles.courseItems}`}>
                <div className={styles.icon}>
                  <img src={cSharp} alt="cSharpIcon" />
                </div>
                <div className={styles.button}>
                  <Button
                    onClick={() => handleGoTo("cc")}
                    sx={{
                      fontSize: { lg: 14, md: 13, xs: 12 },
                    }}
                    style={{
                      minWidth: "100%",
                      color: "#004458",
                      fontFamily: "est",
                      background: "#fff",
                    }}
                    variant="contained"
                  >
                    دوره سی شارپ
                  </Button>
                </div>
              </div>

              <div className={`${styles.javascript} ${styles.courseItems}`}>
                <div className={styles.icon}>
                  <img src={js} alt="javaScriptIcon" />
                </div>
                <div className={styles.button}>
                  <Button
                    onClick={() => handleGoTo("jc")}
                    sx={{
                      fontSize: { lg: 14, md: 13, xs: 12 },
                      minWidth: { xs: "110px" },
                    }}
                    style={{
                      minWidth: "100%",
                      color: "#004458",
                      fontFamily: "est",
                      background: "#fff",
                    }}
                    variant="contained"
                  >
                    دوره جاوا اسکریپت
                  </Button>
                </div>
              </div>

              <div className={`${styles.java} ${styles.courseItems}`}>
                <div className={styles.icon}>
                  <img src={java} alt="java" />
                </div>
                <div className={styles.button}>
                  <Button
                    onClick={() => handleGoTo("jj")}
                    sx={{
                      fontSize: { lg: 14, md: 13, xs: 12 },
                      minWidth: { xs: "110px" },
                    }}
                    style={{
                      minWidth: "100%",
                      color: "#004458",
                      fontFamily: "est",
                      background: "#fff",
                    }}
                    variant="contained"
                  >
                    دوره جاوا
                  </Button>
                </div>
              </div>

              <div className={`${styles.bootstrap} ${styles.courseItems}`}>
                <div className={styles.icon}>
                  <img src={bootstrap} alt="bootstrap" />
                </div>
                <div className={styles.button}>
                  <Button
                    onClick={() => handleGoTo("bt")}
                    sx={{
                      fontSize: { lg: 14, md: 13, xs: 12 },
                      minWidth: { xs: "110px" },
                    }}
                    style={{
                      minWidth: "100%",
                      color: "#004458",
                      fontFamily: "est",
                      background: "#fff",
                    }}
                    variant="contained"
                  >
                    دوره بوت استرپ
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className={`${styles.course} `}
          >
            <div className={styles.learningGrid}>
              <h3>دوره های آموزشی</h3>
              <p>
                دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
                اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه
                نویسی ، اقتصاد فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و...
              </p>
              <div className={styles.courseBtn}>
                <Button
                  onClick={handleGotToCourses}
                  sx={{
                    fontSize: { lg: 14, md: 13, xs: 10 },
                    minWidth: { xs: "110px" },
                  }}
                  style={{ background: "#1D3557", fontFamily: "est" }}
                  variant="contained"
                >
                  مشاهده دوره ها
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
