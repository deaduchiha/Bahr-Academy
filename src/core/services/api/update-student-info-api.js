import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateUser = async (obj, studentId) => {
  try {
    const result = await Http.put(`${MainUrl}student/${studentId}`, obj);

    return result.data;
  } catch (error) {
    return false;
  }
};

export { UpdateUser };
