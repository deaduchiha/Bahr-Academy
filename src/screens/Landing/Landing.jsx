import React from "react";
import Header from "../../components/Landing/Header/Header";
import Information from "../../components/Landing/Information/Information";
import Course from "../../components/Landing/Course/Course";
import Education from "../../components/Landing/Education/Education";
import News from "../../components/Landing/News/News";
import Feedback from "../../components/Landing/Feedback/Feedback";
import Master from "../../components/Landing/Masters/Master";

const Landing = () => {
  return (
    <>
      <Header />
      <Information />
      <Course />
      <Master />
      <Education />
      <News />
      <Feedback />
    </>
  );
};

export default Landing;
