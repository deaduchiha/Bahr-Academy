import { setItem } from "../storage/storage";
import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginUser = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/login`, obj);

    const token = result.data.result.jwtToken;
    const user = result.data.result.studentModel;
    setItem("token", token);
    setItem("user", JSON.stringify(user));

    return result.data;
  } catch (error) {
    return false;
  }
};

export { LoginUser };
