import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import StudentPanel from "../../screens/StudentPanel/StudentPanel";
import MainFourOFourNotFound from "../../screens/MainFourOFourNotFound/MainFourOFourNotFound";
import NewsArticle from "../../screens/NewsArticle/NewsArticle";
import Courses from "../../screens/Courses/Courses";
import NewsDetails from "../../screens/NewsDetails/NewsDetails";
import CoursesDetails from "../../screens/CoursesDetails/CoursesDetails";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";

//Components
import Landing from "../../screens/Landing/Landing";
import Servises from "../../screens/Servises/Sevises";
import AboutUs from "../../screens/AboutUs/AboutUs";
import ShopCart from "../../screens/Cart/ShopCart";

const AuthenticatedApp = ({}) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/news/*" element={<NewsArticle />} />
      <Route path="/services" element={<Servises />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/AllNews/:id/*" element={<NewsDetails />} />
      <Route path="/AllCourses/:id/*" element={<CoursesDetails />} />
      {CurrentUser.role !== "admin" && (
        <Route path="/studentPanel/*" element={<StudentPanel />} />
      )}
      <Route path="/Cart" element={<ShopCart />} />
      <Route path="*" element={<MainFourOFourNotFound />} />
    </Routes>
  );
};

export default AuthenticatedApp;
