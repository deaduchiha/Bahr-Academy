import React from "react";
import { Routes, Route } from "react-router-dom";
import MainFourOFourNotFound from "../../screens/MainFourOFourNotFound/MainFourOFourNotFound";
import NewsArticle from "../../screens/NewsArticle/NewsArticle";
import Courses from "../../screens/Courses/Courses";
import NewsDetails from "../../screens/NewsDetails/NewsDetails";
import Login from "../../screens/Login/Login";
import ForgetPass from "../../screens/ForgetPass/ForgetPass";
import Register from "../../screens/Register/Register";
import CoursesDetails from "../../screens/CoursesDetails/CoursesDetails";
import AdminAuth from "../../components/AdminCheck/AdminAuth";

//Components
import Landing from "../../screens/Landing/Landing";
import Servises from "../../screens/Servises/Sevises";
import AboutUs from "../../screens/AboutUs/AboutUs";
import ShopCart from "../../screens/Cart/ShopCart";

const UnAuthenticatedApp = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<ShopCart />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/news/*" element={<NewsArticle />} />
      <Route path="/services" element={<Servises />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/AllNews/:id/*" element={<NewsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetPass" element={<ForgetPass />} />
      <Route path="/AllCourses/:id/*" element={<CoursesDetails />} />
      <Route path="/adminAuth/:token" element={<AdminAuth />} />
      <Route path="*" element={<MainFourOFourNotFound />} />
    </Routes>
  );
};

export default UnAuthenticatedApp;
