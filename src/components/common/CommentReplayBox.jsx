import React, { useState } from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Profile from "../../assets/images/NewsDetails/profile2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Http from "../../core/services/interceptor/interceptor";

// check

const CommentReplayBox = ({ okOnClick, commentId }) => {
  const [answer, setAnswer] = useState();

  const handleAnswerChange = (e) => {
    setAnswer(e.currentTarget.value);
  };

  const handleAnswerSend = async (id) => {
    document.getElementById(`replayShow${commentId}`).style.display = "none";

    try {
      const res = await Http.post(
        `https://invalid-js.herokuapp.com/api/comments/answer`,
        {
          id: id,
          answer: answer,
        }
      );
      toast.success(res.data.message, {});
    } catch (ex) {
      toast.warning("مجددا امتحان فرمایید", {});
    }
  };

  return (
    <div
      id={`replayShow${commentId}`}
      className={`card-footer py-3 border-0 mb-2 ${style["replay-holder"]}`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className={`d-flex flex-start w-100`}>
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={Profile}
          alt="avatar"
          width="30"
          height="30"
        />
        <div className="form-outline w-100">
          <textarea
            onChange={handleAnswerChange}
            className="form-control"
            id="textAreaExample"
            rows="4"
            style={{
              background: "#fff",
              minHeight: "50px",
              maxHeight: "50px",
            }}
          ></textarea>
          <label
            style={{ fontSize: "12px" }}
            className="form-label"
            htmlFor="textAreaExample"
          >
            پاسخ شما
          </label>
          <div style={{ marginRight: "20px" }} className="float-end mt-2">
            <button
              onClick={() => handleAnswerSend(commentId)}
              type="button"
              className="btn btn-success btn-sm"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          width: "330px",

          fontFamily: "est",
          fontSize: "12px",
        }}
      />
    </div>
  );
};

export default CommentReplayBox;
