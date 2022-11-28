import React from "react";
import { Button } from "@mui/material";
import cards from "./PanelDashbord/PanelDashbord.module.css";
import { Link } from "react-router-dom";
const StudentInfoCard = ({
  stuName,
  stuFamily,
  stuUser,
  stuEmail,
  stuMobile,
  stuMeli,
  stuBirth,
}) => {
  return (
    <ul className={`${""} ${cards["my-ul"]}`}>
      <li className={`${""} ${cards["my-li"]}`}>
        <Button
          className={`${""} ${cards["my-bt"]}`}
          variant="contained"
          color="success"
        >
          <Link
            className={`${""} ${cards["my-link"]}`}
            to="/StudentPanel/editPro"
          >
            ویرایش
          </Link>
        </Button>
        وضعیت :<span className={`${""} ${cards["my-span"]}`}>{stuName}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        نقش :<span className={`${""} ${cards["my-span"]}`}>{stuFamily}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        نام کاربری :
        <span className={`${""} ${cards["my-span"]}`}>{stuUser}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        ایمیل :<span className={`${""} ${cards["my-span"]}`}>{stuEmail}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        شماره موبایل :
        <span className={`${""} ${cards["my-span"]}`}>{stuMobile}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        شماره ملی :
        <span className={`${""} ${cards["my-span"]}`}>{stuMeli}</span>
      </li>
      <li className={`${""} ${cards["my-li"]}`}>
        تاریخ تولد :
        <span className={`${""} ${cards["my-span"]}`}>{stuBirth}</span>
      </li>
    </ul>
  );
};

export default StudentInfoCard;
