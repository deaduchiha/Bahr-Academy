import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";
import axios from "axios";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const PictureUpdate = async (OriginData) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://invalid-js.herokuapp.com/api/upload/image",
      data: OriginData,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });

    return result;
  } catch (error) {
    return error;
  }
};

export { PictureUpdate };
