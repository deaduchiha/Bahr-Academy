import React from "react";
import MainContent from "../../components/common/MainContent/MainContent";
import Describtion from "../../components/AboutUs/Describtion/Describtion";
import CourseHeader from "../../components/Courses/CourseHeader";

const AboutUs = ({}) => {
  return (
    <>
      <CourseHeader />
      <MainContent>
        <Describtion />
      </MainContent>
    </>
  );
};

export default AboutUs;
