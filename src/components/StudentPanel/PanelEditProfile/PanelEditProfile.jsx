import React, { useContext } from "react";
import PanelTitleInfo from "../../common/PanelTitleInfo";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PanelFormikLineContent from "../../common/PanelFormikLineContent";
import Validations from "../../../core/validations/allValidationsModule";
import styles from "./PanelEditProfile.module.css";
import Person from "../../../assets/images/StudentPanel/person.png";
import { setItem } from "../../../core/services/storage/storage";
import { UpdateUser } from "../../../core/services/api/update-student-info-api";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import { PictureUpdate } from "../../../core/services/api/update-profile-image-api";

const PanelEditProfile = () => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const formik = useFormik({
    initialValues: {
      firstName: CurrentUser.isActive ? "فعال" : "غیر فعال",
      lastName: CurrentUser.role,
      email: CurrentUser.email,
      userName: CurrentUser.fullName,
      userNum: CurrentUser.phoneNumber,
      userId: CurrentUser.nationalId,
      userBirth: CurrentUser.birthDate,
      userPic: "",
    },
    validationSchema: Yup.object(Validations.editProfile),
    onSubmit: (values) => {
      const onLoginUser = async () => {
        const userObj1 = {
          fullName: values.userName,
          email: values.email,
          phoneNumber: values.userNum,
          birthDate: values.userBirth,
          nationalId: values.userId,
        };

        if (values.userPic === "") {
          const update = await UpdateUser(
            {
              ...userObj1,
              profile:
                "http://res.cloudinary.com/df9w7u89a/image/upload/v1652941122/pmdsibcoa9kuv8xmmozn.png",
            },
            CurrentUser._id
          );
          toast.success(update.message[0].message, {});
          isLogged.studentLoad(update.result);
          setItem("updatedModel", JSON.stringify(update.result));
        } else {
          const imagefile = document.querySelector("#userPic");
          let myFormData = new FormData();
          myFormData.append("image", imagefile.files[0]);
          const upload = await PictureUpdate(myFormData);

          if (upload.status === 200) {
            const Picture = upload.data.result;

            const update = await UpdateUser(
              { ...userObj1, profile: Picture },
              CurrentUser._id
            );
            toast.success(update.message[0].message, {});
            isLogged.studentLoad(update.result);
            setItem("updatedModel", JSON.stringify(update.result));
          } else {
            toast.warning("لطفا مجددا امتحان فرمایید", {});
          }
        }
      };
      onLoginUser();
    },
  });

  return (
    <div>
      <PanelTitleInfo searchShow={false} nameTitle={" ویرایش پروفایل :"} />
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
        style={{ width: "330px", fontFamily: "est", fontSize: "12px" }}
      />
      <form onSubmit={formik.handleSubmit}>
        <div className={`container-fluid p-0`}>
          <div className={`row`}>
            <PanelFormikLineContent
              mainName={"firstName"}
              fName={"وضعیت"}
              fType={"text"}
              disCheck={true}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.firstName}
              fTouch={formik.touched.firstName}
              fError={formik.errors.firstName}
            />
            <PanelFormikLineContent
              mainName={"lastName"}
              fName={"نقش"}
              fType={"text"}
              disCheck={true}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.lastName}
              fTouch={formik.touched.lastName}
              fError={formik.errors.lastName}
            />
            <PanelFormikLineContent
              mainName={"userName"}
              fName={"نام کاربری"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.userName}
              fTouch={formik.touched.userName}
              fError={formik.errors.userName}
            />
            <PanelFormikLineContent
              mainName={"userNum"}
              fName={"شماره موبایل"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.userNum}
              fTouch={formik.touched.userNum}
              fError={formik.errors.userNum}
            />
            <PanelFormikLineContent
              mainName={"userId"}
              fName={"شماره ملی"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.userId}
              fTouch={formik.touched.userId}
              fError={formik.errors.userId}
            />
            <PanelFormikLineContent
              mainName={"userBirth"}
              fName={"تاریخ تولد"}
              fType={"text"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.userBirth}
              fTouch={formik.touched.userBirth}
              fError={formik.errors.userBirth}
            />
            <PanelFormikLineContent
              mainName={"email"}
              fName={"ادرس ایمیل"}
              fType={"email"}
              fChange={formik.handleChange}
              fBlur={formik.handleBlur}
              fValue={formik.values.email}
              fTouch={formik.touched.email}
              fError={formik.errors.email}
            />
            <div className={`col-12 col-md-6 ${styles["input-col"]}`}>
              <label className={`${styles["my-label"]}`} htmlFor="userPic">
                عکس پروفایل :
              </label>
              <div className={`${styles["my-inp"]} ${styles["my-inp-pic"]}`}>
                <label htmlFor="userPic" className={`${styles["my-file"]}`}>
                  انتخاب کنید
                </label>
                <input
                  className={`${styles["my-inp-file"]}`}
                  id="userPic"
                  name="userPic"
                  type="file"
                  value={formik.values.userPic}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div
              className={`col-12 d-flex justify-content-center justify-content-md-end ${styles["input-col"]}`}
            >
              {/*<Button
                className={`${styles["my-bt"]}`}
                type="button"
                variant="contained"
                color="warning"
              >
                لغو تغییرات
  </Button>*/}
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
    </div>
  );
};

export default PanelEditProfile;
