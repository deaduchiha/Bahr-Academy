import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Validations from "../../core/validations/allValidationsModule";
import styles from "./Registerform.module.css";
import { Formik, Form } from "formik";
import { DatePickerField } from "./DatePickerComponent";
import RegisterFormikLine from "./RegisterFormikLine";
import { ErrorMessage } from "formik";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";

import { RegisterUser } from "../../core/services/api/register-student-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterFormContainer = () => {
  const isLogged = useContext(IsLoggedContext);
  const navigate = useNavigate();

  return (
    <div
      className={`col-12 col-sm-6 col-md-5 col-lg-4 ${styles["log-contain"]}`}
    >
      <div className={styles.formMainHolder}>
        <h2 className={`text-center text-sm-start ${styles["my-title"]}`}>
          ثبت نام
        </h2>

        <Formik
          initialValues={{
            userName: "",
            email: "",
            userNum: "",
            userId: "",
            birthDay: "",
            userPass: "",
          }}
          validationSchema={Yup.object(Validations.register)}
          onSubmit={async (values) => {
            const registerObg = {
              fullName: values.userName,
              email: values.email,
              password: values.userPass,
              phoneNumber: values.userNum,
              birthDate: values.birthDay,
              nationalId: values.userId,
              profile:
                "http://res.cloudinary.com/df9w7u89a/image/upload/v1652941122/pmdsibcoa9kuv8xmmozn.png",
            };

            const user = await RegisterUser(registerObg);
            if (user.request.status === 200) {
              toast.success(user.data.message[0].message, {});
              setTimeout(() => {
                navigate("/login");
                isLogged.handleInfo("لطفا وارد حساب کاربری خود شوید.");
              }, 1600);
            } else {
              console.log(user);
            }
          }}
        >
          <Form className={styles["form-hol"]}>
            <RegisterFormikLine
              fName={"نام کاربری"}
              animClass={styles.aN1}
              mainName={"userName"}
              fType={"text"}
            />
            <RegisterFormikLine
              fName={"ایمیل"}
              animClass={styles.aN2}
              mainName={"email"}
              fType={"text"}
            />
            <RegisterFormikLine
              fName={"شماره موبایل"}
              animClass={styles.aN3}
              mainName={"userNum"}
              fType={"text"}
            />
            <RegisterFormikLine
              fName={"شماره ملی"}
              animClass={styles.aN4}
              mainName={"userId"}
              fType={"text"}
            />

            <label className={`${styles.inputss} ${styles.aN5}`}>
              تاریخ تولد :
              <DatePickerField name="birthDay" styles={""} text="تاریخ تولد:" />
            </label>
            <ErrorMessage
              component="div"
              className={styles["yp-error"]}
              name={"birthDay"}
            />

            <RegisterFormikLine
              fName={"رمز عبور"}
              animClass={styles.aN6}
              mainName={"userPass"}
              fType={"password"}
            />

            <span
              style={{
                marginLeft: "10px",
                display: "inline-block",
                position: "relative",
              }}
              className={`${styles.btnn} ${styles.aN7}`}
            >
              <Link to="/login" className={styles.logLink}>
                ورود
              </Link>
            </span>
            <button
              type="submit"
              style={{ marginRight: "10px" }}
              className={`${styles.btnn} ${styles.signn}  ${styles.aN7}`}
            >
              ثبت نام
            </button>
          </Form>
        </Formik>
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

export default RegisterFormContainer;
