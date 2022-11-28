import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SendFeedBack = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}contactUs`, obj);

    return result;
  } catch (error) {
    return false;
  }
};

export { SendFeedBack };
