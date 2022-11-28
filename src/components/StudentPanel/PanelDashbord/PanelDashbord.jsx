import React, { useState, useContext, useEffect, Fragment } from "react";
import PanelCardInfo from "../../common/PanelCardInfo";
import PanelTitleInfo from "../../common/PanelTitleInfo";
import StudentInfoCard from "../StudentInfoCard";
import NotAvailableCourse from "../../common/NotAvailableCourse";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import Http from "../../../core/services/interceptor/interceptor";
import NewLoader from "../../../assets/images/CourseDetails/newLoader.gif";

import Reactt from "../../../assets/images/StudentPanel/React.png";
import Jss from "../../../assets/images/StudentPanel/Js.png";
import Profile from "../../../assets/images/StudentPanel/profile.jfif";

const PanelDashbord = () => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const [suggestHolder, setSuggestHolder] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function dataGetter2() {
      const data = await Http.get(
        `https://invalid-js.herokuapp.com/api/student/${CurrentUser._id}`
      );
      setMyCourses(data.data.result.courses);
    }
    dataGetter2();
  }, []);

  useEffect(() => {
    async function dataGetter() {
      const data = await Http.get(
        "https://invalid-js.herokuapp.com/api/course/getall"
      );
      setSuggestHolder(data.data.result);
    }
    dataGetter();
  }, []);

  useEffect(() => {
    setTimeout(function dataGetter() {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`container-fluid h-100 p-0 m-0`}>
      <div className="row h-100">
        <div className="col-md-5 col-12">
          <PanelTitleInfo
            searchShow={false}
            nameTitle={"اطلاعات ثبت شده شما :"}
          />
          <StudentInfoCard
            stuName={CurrentUser.isActive ? "فعال" : "غیر فعال"}
            stuFamily={CurrentUser.role}
            stuUser={CurrentUser.fullName}
            stuEmail={CurrentUser.email}
            stuMobile={CurrentUser.phoneNumber}
            stuMeli={CurrentUser.nationalId}
            stuBirth={CurrentUser.birthDate}
          />
        </div>
        <div className={`col-md-7 col-12 d-flex align-items-end flex-column`}>
          <div className="col-12">
            <PanelTitleInfo
              searchShow={false}
              nameTitle={"اخرین دوره ثبت شده :"}
            />
            {isLoading && (
              <img
                style={{
                  width: "90px",
                  display: "block",
                  margin: "30px auto 20px",
                }}
                src={NewLoader}
                alt=""
              />
            )}
            {!isLoading && myCourses.length === 0 && (
              <NotAvailableCourse
                alarmNote={"دوره ای در حال حاضر ثبت نشده است."}
              />
            )}
            {!isLoading &&
              myCourses.length > 0 &&
              myCourses
                .slice(myCourses.length - 1)
                .map((item, index) => (
                  <PanelCardInfo
                    key={item._id}
                    toLink={`/AllCourses/${item._id}/`}
                    courseImg={item.lesson.image}
                    courseName={item.title}
                    courseTeacher={item.teacher.fullName}
                    coursePrice={item.cost}
                  />
                ))}
          </div>
          <div className="col-12 mt-auto">
            <PanelTitleInfo
              searchShow={false}
              nameTitle={"دوره های پیشنهادی :"}
              csClass={"mt-4"}
            />
            {/* <NotAvailableCourse
              alarmNote={"در حال حاضر دوره پیشنهادی وجود ندارد."}
            />*/}
            {!isLoading &&
              suggestHolder
                .slice(0, 2)
                .map((item, index) => (
                  <PanelCardInfo
                    key={item._id}
                    toLink={`/AllCourses/${item._id}/`}
                    courseImg={item.lesson.image}
                    courseName={item.title}
                    courseTeacher={item.teacher.fullName}
                    coursePrice={item.cost}
                  />
                ))}
            {isLoading && (
              <img
                style={{
                  width: "90px",
                  display: "block",
                  margin: "30px auto 20px",
                }}
                src={NewLoader}
                alt=""
              />
            )}
            {/*<PanelCardInfo
              toLink={"/StudentPanel"}
              courseImg={Jss}
              courseName={"پیشرفته جاوا اسکریپت"}
              courseTeacher={"حیدر صفری"}
              coursePrice={"100,000"}
            />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDashbord;
