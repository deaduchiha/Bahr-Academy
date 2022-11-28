import * as Yup from "yup";

const Validations = {
  forgetPass: {
    newPass: Yup.string()
      .max(20, "حداکثر تا 20 کاراکتر مورد تایید است.")
      .required("لطفا  پسورد جدید را وارد کنید."),
    //.matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/,"الگوریتم را رعایت کنید"),
    newRepPass: Yup.string()
      .max(20, "حداکثر تا 20 کاراکتر مورد تایید است.")
      .required("لطفا  تکرار پسورد جدید را وارد کنید."),
  },
  editProfile: {
    firstName: Yup.string()
      .max(15, "حداکثر تا 15 کاراکتر مورد تایید است.")
      .required("لطفا وضعیت را وارد کنید."),
    lastName: Yup.string()
      .max(20, "حداکثر تا 20 کاراکتر مورد تایید است.")
      .required("لطفا نقش را وارد کنید."),
    email: Yup.string()
      .email("ادرس ایمیل وارد شده نامعتبر است.")
      .required("لطفا ایمیل را وارد کنید."),
    userName: Yup.string()
      .max(30, "حداکثر تا 30 کاراکتر مورد تایید است.")
      .required("لطفا نام کاربری را وارد کنید."),
    userNum: Yup.string()
      .max(11, "حداکثر تا 11 عدد مورد تایید است.")
      .required("لطفا شماره موبایل را وارد کنید."),
    userId: Yup.string()
      .max(10, "حداکثر تا 10 عدد مورد تایید است.")
      .required("لطفا شماره ملی را وارد کنید."),
    userBirth: Yup.string()
      .max(10, "حداکثر تا 10 کاراکتر مورد تایید است.")
      .required("لطفا تاریخ تولد را وارد کنید."),
  },
  login: {
    userName: Yup.string()
      .max(40, "حداکثر تا 40 کاراکتر مورد تایید است.")
      .required("لطفا نام کاربری را وارد کنید."),
    userPass: Yup.string()
      .max(30, "حداکثر تا 30 کاراکتر مورد تایید است.")
      .required("لطفا پسورد را وارد کنید."),
  },
  register: {
    email: Yup.string()
      .email("ادرس ایمیل وارد شده نامعتبر است.")
      .required("لطفا ایمیل را وارد کنید."),
    userName: Yup.string()
      .max(40, "حداکثر تا 40 کاراکتر مورد تایید است.")
      .required("لطفا نام کاربری را وارد کنید."),
    userNum: Yup.string()
      .max(11, "حداکثر تا 11 عدد مورد تایید است.")
      .required("لطفا شماره موبایل را وارد کنید."),
    userId: Yup.string()
      .max(10, "حداکثر تا 10 عدد مورد تایید است.")
      .required("لطفا شماره ملی را وارد کنید."),
    birthDay: Yup.string().required("لطفا تاریخ تولد را وارد کنید."),
    userPass: Yup.string()
      .max(30, "حداکثر تا 30 کاراکتر مورد تایید است.")
      .required("لطفا پسورد را وارد کنید."),
  },
  feedBack: {
    email: Yup.string()
      .email("ادرس ایمیل وارد شده نامعتبر است.")
      .required("لطفا ایمیل را وارد کنید."),
    text: Yup.string()
      .max(300, "حداکثر تا 300 کاراکتر مورد تایید است.")
      .required("لطفا متن را وارد کنید."),
  },
};

export default Validations;
