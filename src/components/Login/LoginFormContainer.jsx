import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Validations from "../../core/validations/allValidationsModule";
import LoginFormikFormLine from "./LoginFormikFormLine";
import styles from "../Register/Registerform.module.css";
import { LoginUser } from "../../core/services/api/login-student-api";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getItem } from "../../core/services/storage/storage";
import { setItem } from "../../core/services/storage/storage";

const LoginFormContainer = () => {
  const isLogged = useContext(IsLoggedContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      userPass: "",
      userRem: false,
    },
    validationSchema: Yup.object(Validations.login),
    onSubmit: async (values) => {
      const userObj = {
        email: values.userName,
        password: values.userPass,
      };
      const user = await LoginUser(userObj);
      const StuToken = getItem("token");
      if (StuToken) {
        const studentModel = getItem("user");
        isLogged.studentLoad(JSON.parse(studentModel));
        isLogged.changeIsLogged(true);
        navigate("/");
        isLogged.handleWelcome(user.message[0].message);
        setItem("passToken", "");
      } else if (!StuToken) {
        toast.warning("مشخصات وارد شده صحیح نمی باشد.", {});
      }
    },
  });

  const handleEmpLogin = () => {
    window.location.href = "http://localhost:3001";
  };

  return (
    <div
      className={`col-12 col-sm-6 col-md-5 col-lg-4 ${styles["log-contain"]}`}
    >
      <div className={styles.formMainHolderL}>
        <h2 className={`text-center text-sm-start ${styles["my-title"]}`}>
          ورود کاربر
        </h2>
        <form onSubmit={formik.handleSubmit} className={styles["form-hol"]}>
          <LoginFormikFormLine
            fName={"نام کاربری"}
            animClass={styles.aN1}
            mainName={"userName"}
            fType={"text"}
            fChange={formik.handleChange}
            fBlur={formik.handleBlur}
            fValue={formik.values.userName}
            fTouch={formik.touched.userName}
            fError={formik.errors.userName}
          />
          <LoginFormikFormLine
            fName={"رمز عبور"}
            animClass={styles.aN2}
            mainName={"userPass"}
            fType={"password"}
            fChange={formik.handleChange}
            fBlur={formik.handleBlur}
            fValue={formik.values.userPass}
            fTouch={formik.touched.userPass}
            fError={formik.errors.userPass}
          />

          <div className={`${styles.remHolder} ${styles.aN9}`}>
            <input
              id="userRem"
              name="userRem"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.userRem}
              className={styles.checkboX1}
            />
            <label className={styles.checkboX} htmlFor="userRem">
              من را بخاطر بسپار
            </label>
            <Link className={styles.forgetLink} to="/forgetPass">
              فراموشی رمز
            </Link>
          </div>
          <div style={{}} className={`${styles.remHolder} ${styles.aN9}`}>
            <div
              onClick={handleEmpLogin}
              style={{ cursor: "pointer" }}
              className={styles.forgetLink}
            >
              ورود کارمندان
            </div>
          </div>

          <span
            style={{
              marginLeft: "10px",
              display: "inline-block",
              position: "relative",
            }}
            className={`${styles.btnn} ${styles.btnnn} ${styles.aN8}`}
          >
            <Link to="/register" className={styles.logLink}>
              ثبت نام
            </Link>
          </span>
          <button
            type="submit"
            style={{ marginRight: "10px" }}
            className={`${styles.btnn}  ${styles.btnnn} ${styles.signn} ${styles.aN8}`}
          >
            ورود
          </button>
        </form>
      </div>
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
    </div>
  );
};

export default LoginFormContainer;
