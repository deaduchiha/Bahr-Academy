import React, { useEffect, useState } from "react";
import styles from "./Information.module.css";
import Http from "../../../core/services/interceptor/interceptor";

import SchoolIcon from "@mui/icons-material/School";
import HailIcon from "@mui/icons-material/Hail";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import Typewriter from "typewriter-effect";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Information = (props) => {
  const [teachers, setTeachers] = useState({ length: 0 });
  const [students, setStudents] = useState({ length: 32 });
  const [courses, setCourses] = useState({ length: 0 });

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`${MainUrl}employee/getallteachers`);
      setTeachers(data.data.result);
    };
    dataGetter();
  }, []);
  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`${MainUrl}course/getall`);
      setCourses(data.data.result);
    };
    dataGetter();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.typeHolder}>
            <Typewriter
              options={{
                strings: [
                  "بیشترین تعداد کاراموز در شمال کشور با حضور برترین مشاورین در امور دیزاین و دولوپ",
                  "استفاده از تمرینات مدرن در پروسه اموزش و یادگیری عمیق مفاهیم مورد نیاز برای بازار کار",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon}>
                {" "}
                <SchoolIcon />{" "}
              </div>
              <div className={styles.title}>
                {" "}
                {students.length + 100} دانشجو{" "}
              </div>
              <div className={styles.des}>
                {" "}
                تا کنون بیش از {students.length + 100} نفر از آموزش های بامبو
                استفاده کرده اند و نظرات خودشونو ثبت کرده اند.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                {" "}
                <HailIcon />{" "}
              </div>
              <div className={styles.title}>
                {" "}
                {teachers.length + 100} استاد{" "}
              </div>
              <div className={styles.des}>
                {" "}
                بیش از {teachers.length + 100} استاد ، از برترین اساتید ایران
                همراه ما هستند و دوره های خودشونو ثبت کرده اند.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                {" "}
                <CastForEducationIcon />{" "}
              </div>
              <div className={styles.title}> {courses.length + 100} دوره </div>
              <div className={styles.des}>
                {" "}
                تا کنون بیش از {courses.length + 100} دوره ، از دسته بندی های
                متفاوت در سایت ثبت شده و قابل دسترسی است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
