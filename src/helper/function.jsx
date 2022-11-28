import axios from "axios";
import Http from "../core/services/interceptor/interceptor";

const quantityCount = (state, _id) => {
  const index = state.selectedItems.findIndex((item) => item._id === _id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

const LoadProduct = async (products) => {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    const { data } = await Http.get(
      `https://invalid-js.herokuapp.com/api/course/${products[i]}`
    );
    result.push(data.result);
  }
  return result;
};

export { quantityCount, LoadProduct };
