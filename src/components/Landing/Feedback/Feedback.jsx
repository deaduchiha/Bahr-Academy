import React, { Fragment } from "react";
import styles from "./Feedback.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validations from "../../../core/validations/allValidationsModule";
import { SendFeedBack } from "../../../core/services/api/send-feed-api";

const Feedback = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      text: "",
    },
    validationSchema: Yup.object(Validations.feedBack),
    onSubmit: async (values) => {
      const SendObg = {
        email: values.email,
        text: values.text,
      };

      const send = await SendFeedBack(SendObg);
      if (send.status === 200) {
        toast.success(send.data.message[0].message, {});
        values.email = "";
        values.text = "";
      } else {
        toast.warning("لطفا مجددا امتحان فرمایید", {});
      }
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className={`fluid round-lg ${styles.contain}`}>
          <div className={`col ${styles.bg}`}></div>
          <div className={`col-lg-8 col-sm-8 ${styles.feedback}`}>
            <h2
              style={{ color: "#fff", fontFamily: "est" }}
              className={`${styles.title}`}
            >
              پیشنهاد و انتقاد
            </h2>
            <div className={`${styles.email}`}>
              <input
                className={`form-control ${styles.mail}`}
                style={{
                  background: "#004458",
                  color: "#fff",
                  textAlign: "right",
                  border: "none",
                }}
                type="email"
                id={"email"}
                name={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="...ایمیل خود را وارد کنید"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div
                style={{ color: "#fff", fontFamily: "est", fontSize: "14px" }}
              >
                {formik.errors.email}
              </div>
            ) : null}
            <div className={`${styles.txtArea}`}>
              <textarea
                style={{
                  fontFamily: "est",
                  background: "#004458",
                  border: "none",
                  color: "#fff",
                  resize: "vertical",
                  maxHeight: "95px",
                  minHeight: "95px",
                }}
                className={`form-control ${styles.areaText}`}
                id={"text"}
                name={"text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                placeholder="متن خود را وارد کنید..."
              ></textarea>
            </div>{" "}
            {formik.touched.text && formik.errors.text ? (
              <div
                style={{ color: "#fff", fontFamily: "est", fontSize: "14px" }}
              >
                {formik.errors.text}
              </div>
            ) : null}
            <button type="submit" className={`btn-primary ${styles.btn}`}>
              ثبت و ارسال
            </button>
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
        </div>{" "}
      </form>
    </Fragment>
  );
};

export default Feedback;
