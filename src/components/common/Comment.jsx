import React, { useEffect, useContext } from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Person from "../../assets/images/NewsDetails/person2.png";
import CommentRep from "./CommentRep";
import CommentLikeDislike from "./CommentLikeDislike";
import CommentReplayBox from "./CommentReplayBox";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import Http from "../../core/services/interceptor/interceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({
  cmImg,
  cmName,
  cmType,
  cmDate,
  cmCon,
  cmLike,
  cmDislike,
  repData,
  cmId,
  cmEmail,
  cmData,
  handleReporter,
}) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const handleReplayShow = () => {
    if (isLogged.currentLogged && isLogged.currentStudent.role === "admin") {
      document.getElementById(`replayShow${cmId}`).style.display = "block";
    }
  };

  return (
    <div className={`card-body ${style["com-body"]}`}>
      <div className="d-flex flex-start align-items-center">
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={cmImg}
          alt="avatar"
          width="50"
          height="50"
        />

        <div>
          <h6 className={`fw mb-1 ${style["comment-name"]}`}>{cmName}</h6>
          <p className="text-muted small mb-0">
            {cmType} - {cmDate}
          </p>
        </div>
      </div>

      <p className="mt-3 mb-0 pb-2 ms-3">{cmCon}</p>
      <CommentLikeDislike
        like={cmLike}
        Dislike={cmDislike}
        repHandle={handleReplayShow}
        RepClick={() => handleReporter(cmData)}
      />
      {isLogged.currentLogged && isLogged.currentStudent.role === "admin" && (
        <CommentReplayBox
          commentId={cmId}
          //okOnClick={handleGetRelay}
        />
      )}

      {repData && (
        <CommentRep
          cmLike={10}
          cmDislike={9}
          cmImg={Person}
          cmName={"عدنان رضایی"}
          cmType={"ادمین بخش اصلی"}
          cmCon={repData}
          cmDate={""}
        />
      )}
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

export default Comment;
