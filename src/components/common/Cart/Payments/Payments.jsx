import React, { useContext, Fragment } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  getItem,
  setItem,
  clearStorage,
} from "../../../../core/services/storage/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context
import { CartContext } from "../../../../context/CartContextProvider";
import { IsLoggedContext } from "../../../../context/LoggedInCheckProvider";

// Style
import styles from "./Payments.module.css";

// Image
import vec from "../../../../assets/images/Cart/find.png";
import { AddCourses } from "../../../../core/services/api/add-courses-student-api";

const Payments = (props) => {
  const { state, dispatch } = useContext(CartContext);

  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const handleCheckOutAddCourse = () => {
    if (CurrentUser.isActive === false) {
      toast.warning("حساب کاربری شما غیر فعال است", {});
    } else {
      if (isLogged.currentLogged === true) {
        dispatch({ type: "CHECKOUT" });
        setTimeout(function dataGetter() {
          const carts = JSON.parse(getItem("Checkout"));

          carts.forEach((course) => {
            const handleAdder = async () => {
              const addCourses = await AddCourses(course, CurrentUser._id);
              toast.success(addCourses.data.message[0].message, {});
            };
            handleAdder();
          });
        }, 500);
      } else {
        toast.info("لطفا ابتدا وارد حساب خود شوید", {});
      }
    }
  };
  return (
    <Fragment>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>تعداد دوره:</span> {state.itemsCounter}
          </p>
          <p>
            <span>قیمت نهایی:</span> {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              خالی کردن سبد خرید
            </button>

            <Button
              className={styles.checkout}
              //onClick={() => dispatch({ type: "CHECKOUT" })}
              onClick={handleCheckOutAddCourse}
              variant="contained"
              color="primary"
            >
              تسویه حساب
            </Button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>خرید شما با موفقیت انجام شد</h3>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={`${styles.complete} ${styles.empty}`}>
          <h3>سبد خرید شما خالی است!</h3>
          <div className={styles.courses}>
            <Link to="/courses"> مشاهده دوره ها</Link>
          </div>
          <div>
            <img src={vec} />
          </div>
        </div>
      )}
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

export default Payments;
