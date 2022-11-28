import Http from "../interceptor/interceptor";

// main url of backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ResetPass = async (obj) => {
  try {
    const result = await Http.get(
      `https://invalid-js.herokuapp.com/api/student/${obj.Userid}`
    );

    const ResetToken = result.data.result.resetPasswordToken;

    try {
      const finalResult = await Http.post(
        `https://invalid-js.herokuapp.com/api/resetPassword/${ResetToken}`,
        {
          password: `${obj.newPass}`,
        }
      );

      return finalResult;
    } catch (err) {
      return false;
    }

    return result;
  } catch (err) {
    return false;
  }
};

export { ResetPass };
