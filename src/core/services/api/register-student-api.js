import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const RegisterUser = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/register`, obj);

    return result;
  } catch (error) {
    return false;
  }
};

export { RegisterUser };
