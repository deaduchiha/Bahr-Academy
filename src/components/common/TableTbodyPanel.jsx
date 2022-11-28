import React, { useContext } from "react";
import { Button } from "@mui/material";
import styles from "../StudentPanel/PanelCoursesList/PanelCoursesList.module.css";
import style from "../../screens/Courses/Courses.module.css";
import { useLocation } from "react-router-dom";

// Function
import { quantityCount } from "../../helper/function";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icon
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import RemoveShoppingCartRoundedIcon from "@mui/icons-material/RemoveShoppingCartRounded";

const TableTbodyPanel = ({
  cId,
  cPic,
  cName,
  cStart,
  cEnd,
  cPrice,
  cCap,
  cAuthor,
  cCourse,
  cOpImg,
  cHandleOp,
  cHandleClose,
  cHandleShow,
}) => {
  const pageUrl = useLocation().pathname;

  const { state, dispatch } = useContext(CartContext);
  return (
    <tr key={cId} className={`${styles["my-trb"]}`}>
      <th className={styles["small-remove"]} scope="row">
        <img className={`${styles["my-img"]}`} src={cPic} alt="" />
      </th>
      <td>{cName}</td>
      <td className={`${styles["mob-remove"]}`}>{cAuthor}</td>
      <td className={`${styles["mob-remove"]}`}>{cCap} نفر</td>
      <td>{cStart}</td>
      <td>{cPrice} ت</td>
      <td>
        {/* soheil's codes */}

        {pageUrl === "/StudentPanel/myCourses" && (
          <button onClick={cHandleShow} className={`${styles["my-bt"]}`}>
            <img className={`${styles["my-add-img"]}`} src={cOpImg} alt="" />
          </button>
        )}

        {pageUrl === "/StudentPanel/listCourses" &&
          quantityCount(state, cCourse._id) <= 0 && (
            <Button
              className={styles.cartButton}
              onClick={() => dispatch({ type: "ADD_ITEM", payload: cCourse })}
              variant="contained"
              color="primary"
            >
              <ShoppingCartOutlinedIcon />
            </Button>
          )}

        {pageUrl === "/StudentPanel/listCourses" &&
          quantityCount(state, cCourse._id) === 1 && (
            <Button
              className={`${styles.cartButton} ${styles.cartButtonDelete}`}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: cCourse })
              }
              variant="contained"
              color="primary"
            >
              <RemoveShoppingCartRoundedIcon />
            </Button>
          )}
      </td>
      <td style={{ padding: "0", margin: "0" }}>
        <div id={`modalMask${cId}`} className={`${style["modal-mask-panel"]}`}>
          <div className="container">
            <div
              className={`row justify-content-center ${style["margin-mask-panel"]}`}
            >
              <div
                className={`col-12 col-sm-10 col-md-7 col-lg-5 col-xl-5 col-xxl-4 ${style["modal-main-panel"]}`}
              >
                <div className={"row"}>
                  <div className={`col-12 mb-2 ${styles["modal-title"]}`}>
                    ایا از اضافه کردن این دوره اطمینان دارید؟
                  </div>
                  <div
                    className={`col-12 mb-3 text-center ${styles["modal-panel-name"]}`}
                  >
                    نام دوره : <span>{cName}</span>
                  </div>
                  <div className="col-6 text-center">
                    <Button
                      onClick={cHandleOp}
                      className={`${styles["my-bt-panel"]}`}
                      type="submit"
                      variant="contained"
                      color="success"
                    >
                      تایید
                    </Button>
                  </div>
                  <div className="col-6 text-center">
                    <Button
                      onClick={cHandleClose}
                      className={`${styles["my-bt-panel"]}`}
                      type="submit"
                      variant="contained"
                      color="warning"
                    >
                      لغو
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableTbodyPanel;
