import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Likee from "../../assets/images/CourseDetails/cmLike.png";
import disLikee from "../../assets/images/CourseDetails/cmDislike.png";
import cmReplay from "../../assets/images/CourseDetails/cmReplay.png";
import cmReport from "../../assets/images/CourseDetails/cmReport.png";

const CommentLikeDislike = ({ like, Dislike, repHandle, RepClick }) => {
  return (
    <div className={`d-flex ms-auto mb-1 ${style.items}`}>
      <div onClick={RepClick} className={`${style.itemsLike}`}>
        <img className={style.likeImg2} src={cmReport} alt="" />
      </div>
      <div className={`${style.itemsLike}`}>
        <img className={style.likeImg} src={Likee} alt="" />
        <span className={style.likeNumber}>{like}</span>
      </div>
      <div className={`${style.itemsLike}`}>
        <img className={style.likeImg} src={disLikee} alt="" />
        <span className={style.likeNumber}>{Dislike}</span>
      </div>
      <div className={`${style.itemsLike}`}>
        <img
          onClick={repHandle}
          className={style.likeImg}
          src={cmReplay}
          alt=""
        />
      </div>
    </div>
  );
};

export default CommentLikeDislike;
