import React from "react";
import CommentLikeDislike from "./CommentLikeDislike";
import style from "../../screens/NewsDetails/NewsDetails.module.css";

const CommentReplayReplay = ({ img, like, dis }) => {
  return (
    <div className={`card-body ${style["reply-body"]}`}>
      <div className="d-flex flex-start align-items-center">
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={img}
          alt="avatar"
          width="40"
          height="40"
        />
        <div>
          <h6 className={`fw mb-1 ${style["comment-name-replay"]}`}>
            {"سهیل جون"}
          </h6>
          <p className="text-muted small mb-0">
            {"کابر"} - {"1400/33/33"}
          </p>
        </div>
      </div>

      <p className="mt-3 mb-0 pb-2">{"هعیییییییییییییییییییی"}</p>
      <CommentLikeDislike like={like} Dislike={dis} repHandle={null} />
    </div>
  );
};

export default CommentReplayReplay;
