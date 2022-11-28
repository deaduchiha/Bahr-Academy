import React, { useContext } from "react";
import { Button } from "@mui/material";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Countdown from "react-countdown";

// Function
import { quantityCount } from "../../helper/function";

// Context
import { CartContext } from "../../context/CartContextProvider";

const CourseDetailsBotContent = ({
  courseId,
  courseName,
  coursePrice,
  courseAfterPrice,
  courseDisCount,
  courseData,
  courseTimer,
  capp,
  courseImgg,
}) => {
  const Completionist = () => <span>تخفیف پایان یافت !</span>;

  const handleCourseSign = () => {
    console.log(courseData);
  };

  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={`text center ${style["holder-suggest-course"]}`}>
      <div className="row">
        <div className={`col-12 ${style["left-title"]}`}>
          <img className={style["lit-item-img"]} src={courseImgg} alt="" />
          {courseName}
        </div>
        <span className={`mt-2 mb-2 ${style["lit-liner"]}`}></span>
        <div className="col-6 mt-3">قیمت دوره :</div>
        <div className={`col-6 text-end  mt-3 ${style["high-cl"]}`}>
          {coursePrice} ت
        </div>
        <div className="col-6  mt-3">تخفیف :</div>
        <div className={`col-6  mt-3 text-end ${style["red-cl"]}`}>
          {courseDisCount}%
        </div>
        <div className="col-6 mt-3">مبلغ قابل پرداخت :</div>
        <div className={`col-6 mt-3 text-end ${style["green-cl"]}`}>
          {courseAfterPrice} ت
        </div>
        <div className={`col-6 mt-3 ${style.disCounter}`}>مهلت تخفیف :</div>
        <div className={`col-6 mt-3 text-end ${style.disCounter2}`}>
          {/*<span className={style.conHolder}>00 : 00 : 00</span>*/}
          <span className={style.conHolder}>
            <Countdown date={Date.now() + 400000000}>
              <Completionist />
            </Countdown>
          </span>
        </div>
        <div className={`col-12 text-center mt-4`}>
          {capp > 0 && quantityCount(state, courseData._id) <= 0 && (
            <Button
              style={{ transition: "all 0.5s ease" }}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: courseData })
              }
              className={style["accept-bt"]}
              variant="contained"
              color="primary"
            >
              افزودن به سبد خرید
            </Button>
          )}

          {capp > 0 && quantityCount(state, courseData._id) === 1 && (
            <Button
              style={{
                background: "#D00000",
                transition: "all 0.5s ease",
              }}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: courseData })
              }
              className={style["accept-bt"]}
              variant="contained"
              color="primary"
            >
              حذف از سبد خرید
            </Button>
          )}
          {capp === 0 && (
            <Button
              disabled
              style={{ transition: "all 0.5s ease" }}
              className={style["accept-bt"]}
              variant="contained"
              color="primary"
            >
              اتمام ظرفیت
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsBotContent;
