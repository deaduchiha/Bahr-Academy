import React, { Fragment } from "react";
import MainContent from "../../components/common/MainContent/MainContent";
import ServicesTitle from "../../components/Servises/ServicesTitle/ServicesTitle";
import Help from "../../components/Servises/Help/Help";
import Progress from "../../components/Servises/Progress/Progress";
import Members from "../../components/Servises/Members/Members";
import CourseHeader from "../../components/Courses/CourseHeader";

const Sevises = ({}) => {
  return (
    <Fragment>
      <CourseHeader />
      <MainContent>
        <ServicesTitle />
        <Help />
        <Progress />
        <Members />
      </MainContent>
    </Fragment>
  );
};

export default Sevises;
