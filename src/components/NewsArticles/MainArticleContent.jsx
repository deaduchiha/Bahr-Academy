import React from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";

const MainArticleContent = ({
  data,
  data2,
  flag,
  dataFake,
  contentFlag,
  contentFlag2,
}) => {
  return (
    <div className="col-12 mt-4">
      <h3 className={style["subject"]}>{data.title}</h3>

      {contentFlag && !contentFlag2 && (
        <p className={`mt-4 text-muted ${style["content-p"]}`}>{data.text}</p>
      )}

      {!contentFlag && contentFlag2 && (
        <p className={`mt-4 text-muted ${style["content-p"]}`}>
          {!flag ? dataFake.lesson.description : data2.lesson.description}
        </p>
      )}
    </div>
  );
};

export default MainArticleContent;
