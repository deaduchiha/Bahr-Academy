import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// Context
import { CartContext } from "../../../context/CartContextProvider";

// Style
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { _id, title, cost } = props.data;
  const { image } = props.data.lesson;
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.data}>
        <Link to={`/AllCourses/${_id}`}>
          <h3>
            <span style={{ color: "#002b37" }}>{title}</span>
          </h3>
        </Link>
        <p>{cost}</p>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.removeButt}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
            variant="contained"
            color="primary"
          >
            حذف از سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
