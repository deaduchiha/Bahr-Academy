import React, { useState, useEffect } from "react";
import style from "../../screens/Courses/Courses.module.css";
import axios from "axios";
const CourseLike = ({ likeImg, LikeNum, handleLike, id }) => {
  const [like, setLike] = useState({ like: 0, dislike: 0 });

  useEffect(() => {
    async function dataGetter2() {
      const data = await axios.get(
        `https://invalid-js.herokuapp.com/api/course/likeCount/${id}`
      );
      setLike(data.data.result);
    }
    dataGetter2();
  }, []);

  return (
    <div className={style["like"]}>
      <span className={style["like-number"]}>{like.like}</span>
      <img
        onClick={handleLike}
        className={style["like-img"]}
        src={likeImg}
        alt=""
      />
    </div>
  );
};

export default CourseLike;
