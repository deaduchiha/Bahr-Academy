import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, Field } from "formik";
import styles from "../Register/Registerform.module.css";
import { ForgetPass } from "../../core/services/api/forget-pass-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetFormContainer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("ادرس ایمیل وارد شده نامعتبر است.")
        .required("لطفا ایمیل را وارد کنید."),
    }),
    onSubmit: async (values) => {
      const emailObj = {
        email: values.email,
      };

      const user = await ForgetPass(emailObj);
      toast.success(user.data.message[0].message, {});
    },
  });

  return (
    <div
      className={`col-12 col-sm-6 col-md-5 col-lg-4 ${styles["log-contain"]}`}
    >
      <div className={styles.formMainHolderF}>
        <h2 className={`text-center text-sm-start ${styles["my-title"]}`}>
          فراموشی رمز عبور
        </h2>

        <form onSubmit={formik.handleSubmit} className={styles["form-hol"]}>
          <input
            style={{ direction: "rtl" }}
            placeholder="ایمیل خود را وارد کنید : "
            className={`${styles.inputs} ${styles.aN1}`}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles["yp-error"]}>{formik.errors.email}</div>
          ) : null}

          <span
            style={{
              marginLeft: "10px",
              display: "inline-block",
              position: "relative",
            }}
            className={`${styles.btnn} ${styles.btnnn} ${styles.aN10}`}
          >
            <Link to="/login" className={styles.logLink}>
              بازگشت
            </Link>
          </span>
          <button
            type="submit"
            style={{ marginRight: "10px" }}
            className={`${styles.btnn} ${styles.btnnn} ${styles.signn} ${styles.aN10}`}
          >
            ارسال لینک
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

export default ForgetFormContainer;
