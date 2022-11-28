import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ForgetPass = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}forgetpassword`, obj);

    return result;
  } catch (error) {
    return false;
  }
};

export { ForgetPass };
