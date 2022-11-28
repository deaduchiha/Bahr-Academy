import React from "react";
import Like from "../../assets/images/NewsDetails/like.png";
import DisLike from "../../assets/images/NewsDetails/dislike.png";
import Cm from "../../assets/images/NewsDetails/cm.png";

import style from "../../screens/NewsDetails/NewsDetails.module.css";

const LikeDisComment = ({
  mLike,
  mDis,
  mComment,
  myClass,
  likeHandle,
  disLikeHandle,
}) => {
  return (
    <div className={`${style["like-dis"]} ${style[`${myClass}`]}`}>
      <span className={`ms-2 ${style["number"]}`}>{mComment}</span>
      <span className={"ms-2"}>
        <img className={style["like-img"]} src={Cm} alt="" />
      </span>
      <span className={`ms-2 ${style["number"]}`}>{mDis}</span>
      <span className={"ms-2"}>
        <img
          onClick={disLikeHandle}
          className={style["like-img"]}
          src={DisLike}
          alt=""
        />
      </span>
      <span className={`ms-2 ${style["number"]}`}>{mLike}</span>
      <span className={"ms-2"}>
        <img
          onClick={likeHandle}
          className={style["like-img"]}
          src={Like}
          alt=""
        />
      </span>
    </div>
  );
};

export default LikeDisComment;
