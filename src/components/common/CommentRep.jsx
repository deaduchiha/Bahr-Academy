import React from "react";
import CommentLikeDislike from "./CommentLikeDislike";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import CommentReplayReplay from "./CommentReplayReplay";
import CommentReplayBoxTwo from "./CommentReplayBox2";

const CommentRep = ({
  cmImg,
  cmName,
  cmType,
  cmDate,
  cmCon,
  cmLike,
  cmDislike,
}) => {
  const handleReplayShow = () => {
    document.getElementById("replayShow2").style.display = "block";
  };

  const handleGetRelay = () => {
    document.getElementById("replayShow2").style.display = "none";
  };

  return (
    <div className={`card-body ${style["reply-body"]}`}>
      <div className="d-flex flex-start align-items-center">
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={cmImg}
          alt="avatar"
          width="40"
          height="40"
        />
        <div>
          <h6 className={`fw mb-1 ${style["comment-name-replay"]}`}>
            {cmName}
          </h6>
          <p className="text-muted small mb-0">
            {cmType} {cmDate}
          </p>
        </div>
      </div>

      <p className="mt-3 mb-0 pb-2 ms-3">{cmCon}</p>
      {/* <CommentLikeDislike
        like={cmLike}
        Dislike={cmDislike}
        repHandle={handleReplayShow}
      />
     <CommentReplayBoxTwo okOnClick={handleGetRelay} />
  <CommentReplayReplay img={cmImg} like={cmLike} dis={cmDislike} />*/}
    </div>
  );
};

export default CommentRep;
