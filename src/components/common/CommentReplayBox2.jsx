import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Profile from "../../assets/images/NewsDetails/profile2.png";

const CommentReplayBoxTwo = ({ okOnClick }) => {
  return (
    <div
      id="replayShow2"
      className={`card-footer py-3 border-0 mb-2 ${style["replay-holder2"]}`}
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
              onClick={okOnClick}
              type="button"
              className="btn btn-success btn-sm"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReplayBoxTwo;
