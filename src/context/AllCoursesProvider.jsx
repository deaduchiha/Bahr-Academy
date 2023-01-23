import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const apiEndpoint = "https://invalid-js.herokuapp.com/api/course/getall";

export const AllCoursesContext = createContext();

const AllCoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState();

  const handleSetCourseId = (id) => {
    setCourseId(id);
  };

  useEffect(() => {
    const dataGetter = async () => {
      const { data: CourseList } = await axios.get(apiEndpoint);
      setCourses(CourseList.result);
    };
    dataGetter();
  }, []);

  return (
    <AllCoursesContext.Provider
      value={{
        AllCourses: courses,
        CourseIdSetter: handleSetCourseId,
        currentId: courseId,
      }}
    >
      {children}
    </AllCoursesContext.Provider>
  );
};

export default AllCoursesProvider;
