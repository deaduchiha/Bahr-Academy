import React, { Fragment } from "react";
import Header from "../../components/Landing/Header/Header";
import Information from "../../components/Landing/Information/Information";
import Course from "../../components/Landing/Course/Course";
import Education from "../../components/Landing/Education/Education";
import News from "../../components/Landing/News/News";
import Feedback from "../../components/Landing/Feedback/Feedback";
import Master from "../../components/Landing/Masters/Master";

const Landing = ({}) => {
  return (
    <Fragment>
      <Header />
      <Information />
      <Course />
      <Master />
      <Education />
      <News />
      <Feedback />
    </Fragment>
  );
};

export default Landing;
