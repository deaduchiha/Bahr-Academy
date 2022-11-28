import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LikeCourse = async (obj, flag) => {
  if (flag === 10) {
    try {
      const result = await Http.post(`${MainUrl}course/like`, obj);

      return result.data;
    } catch (error) {
      return false;
    }
  } else if (flag === 20) {
    try {
      const result = await Http.post(`${MainUrl}course/dislike`, obj);

      return result.data;
    } catch (error) {
      return false;
    }
  }
};

export { LikeCourse };
