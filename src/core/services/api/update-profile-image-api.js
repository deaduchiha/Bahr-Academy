import axios from "axios";

// main url of backend

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
