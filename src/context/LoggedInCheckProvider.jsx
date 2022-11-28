import React, { useState, createContext, Fragment } from "react";
import { getItem } from "../core/services/storage/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const IsLoggedContext = createContext();

const LoggedInCheckProvider = ({ children }) => {
  const LoggedIn = getItem("token");
  const studentModel = getItem("user");
  const UpdateModel = getItem("updatedModel");

  const [isLogged, setIsLogged] = useState(LoggedIn ? true : false);
  const [student, setStudent] = useState(
    !UpdateModel ? JSON.parse(studentModel) : JSON.parse(UpdateModel)
  );
  const handleStudent = (student) => {
    setStudent(student);
  };

  const handleLoggedChange = (currentSituation) => {
    setIsLogged(currentSituation);
  };

  const handleWelcomeStu = (text) => {
    toast.success(text, {});
  };

  const handleInfoStu = (text) => {
    toast.info(text, {});
  };

  return (
    <Fragment>
      <IsLoggedContext.Provider
        value={{
          currentLogged: isLogged,
          changeIsLogged: handleLoggedChange,
          studentLoad: handleStudent,
          currentStudent: student,
          handleWelcome: handleWelcomeStu,
          handleInfo: handleInfoStu,
        }}
      >
        {children}
      </IsLoggedContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          width: "330px",

          fontFamily: "est",
          fontSize: "12px",
        }}
      />
    </Fragment>
  );
};

export default LoggedInCheckProvider;
