import React, { useContext } from "react";

// Coponents
import Cart from "../Cart";

// Context
import { CartContext } from "../../../../context/CartContextProvider";

// Style
import styles from "./Total.module.css";

const Total = () => {
  const { state } = useContext(CartContext);
  return (
    <>
      <div className={styles.container}>
        {state.selectedItems.map((item) => (
          <Cart key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Total;
