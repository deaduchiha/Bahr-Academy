import React from "react";

// Components
import CartHolder from "../../components/common/Cart/CartHolder/CartHolder";
import Total from "../../components/common/Cart/Total/Total";
import Payments from "../../components/common/Cart/Payments/Payments";

const ShopCart = () => {
  return (
    <CartHolder>
      <Total />
      <Payments />
    </CartHolder>
  );
};

export default ShopCart;
