import React, { useContext } from "react";
import PanelTitleInfo from "../../common/PanelTitleInfo";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ResetPass } from "../../../core/services/api/reset-pass-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import { getItem } from "../../../core/services/storage/storage";
import { setItem } from "../../../core/services/storage/storage";

import PanelFormikChangePass from "../../common/PanelFormikChangePass";
import Validations from "../../../core/validations/allValidationsModule";
import styles from "../PanelEditProfile/PanelEditProfile.module.css";
import Person from "../../../assets/images/StudentPanel/person.png";
import { ForgetPass } from "../../../core/services/api/forget-pass-api";

const PanelChangePass = () => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const formik = useFormik({
    initialValues: {
      newPass: "",
      newRepPass: "",
    },
    validationSchema: Yup.object(Validations.forgetPass),
    onSubmit: async (values) => {
      const userObj = {
        newPass: values.newPass,
        newRepPass: values.newRepPass,
        Userid: CurrentUser._id,
      };

      if (userObj.newPass !== userObj.newRepPass) {
        toast.warning("تکرار مجدد پسورد مطابقت ندارد", {});
      } else if (userObj.newPass === userObj.newRepPass) {
        const getToken = getItem("passToken");
        console.log(getToken);

        if (getToken === false) {
          const forget = await ForgetPass({ email: CurrentUser.email });
          if (forget.status === 200) {
            setItem("passToken", "LinkeDone");
            const userPass = await ResetPass(userObj);
            if (userPass.status === 200) {
              toast.success(userPass.data.message[0].message, {});
              values.newPass = "";
              values.newRepPass = "";
              setItem("passToken", "");
            } else {
              toast.warning("لطفا مجددا امتحان فرمایید", {});
            }
          } else {
            setItem("passToken", "");
          }
        } else if (getToken === "LinkeDone") {
          const userPass = await ResetPass(userObj);
          if (userPass.status === 200) {
            toast.success(userPass.data.message[0].message, {});
            values.newPass = "";
            values.newRepPass = "";
            setItem("passToken", "");
          } else {
            toast.warning("لطفا مجددا امتحان فرمایید", {});
          }
        }
      }
    },
  });
  return (
    <div>
      <PanelTitleInfo searchShow={false} nameTitle={" تغییر پسورد کاربری  :"} />
      <form onSubmit={formik.handleSubmit}>
        <div className={`container-fluid p-0 ${styles[""]}`}>
          <div className={"row"}>
            <PanelFormikChangePass
              mainName={"newPass"}
              fName={"پسورد جدید"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.newPass}
              fTouch={formik.touched.newPass}
              fError={formik.errors.newPass}
            />
            <PanelFormikChangePass
              mainName={"newRepPass"}
              fName={"تکرار پسورد جدید"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.newRepPass}
              fTouch={formik.touched.newRepPass}
              fError={formik.errors.newRepPass}
            />

            <div
              className={`col-12 mt-4 d-flex justify-content-center justify-content-md-end ${styles["input-col"]}`}
            >
              <Button
                className={`ms-3 ${styles["my-bt"]}`}
                type="submit"
                variant="contained"
                color="success"
              >
                ثبت تغییرات
              </Button>
            </div>
          </div>
        </div>
      </form>
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

export default PanelChangePass;
