import React from "react";

import style from "../../screens/NewsDetails/NewsDetails.module.css";

const CommentRep = ({ cmImg, cmName, cmType, cmDate, cmCon }) => {
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
    </div>
  );
};

export default CommentRep;
