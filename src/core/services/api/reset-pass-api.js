import Http from "../interceptor/interceptor";

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

    // return result;
  } catch (err) {
    return false;
  }
};

export { ResetPass };
