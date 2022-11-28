import React, { useState, useEffect, useContext } from "react";
import style from "../../screens/NewsDetails/NewsDetails.module.css";
import Person from "../../assets/images/StudentPanel/person6.png";
import Comment from "./Comment";
import CommentRep from "./CommentRep";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";
import Http from "../../core/services/interceptor/interceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsArticleComment = ({ postId, data }) => {
  const isLogged = useContext(IsLoggedContext);
  const CurrentUser = isLogged.currentStudent;

  const [text, setText] = useState("");

  const handleValue = (e) => {
    setText(e.currentTarget.value);
  };

  const handleCommentSend = async () => {
    if (isLogged.currentLogged === true) {
      const userObj = {
        postId: postId,
        email: CurrentUser.email,
        username: CurrentUser.fullName,
        comment: text,
      };

      const result = await Http.post(
        `https://invalid-js.herokuapp.com/api/comments/send`,
        userObj
      );
      toast.success(result.data.message, {});
      setText("");
    } else if (isLogged.currentLogged === false) {
      toast.info("لطفا ابتدا وارد حساب کاربری خود شوید", {});
    }
  };

  const handleReporter = async (data) => {
    if (isLogged.currentLogged === false) {
      toast.info("ابتدا وارد حساب کاربری شوید", {});
    } else {
      try {
        const res = await Http.post(`http://localhost:8006/AllReports`, data);
        toast.success("گزارش شما ثبت شد ", {});
      } catch (ex) {
        toast.warning("مجددا امتحان فرمایید", {});
      }
    }
  };

  return (
    <div className="col-12 mt-4">
      <section className={style["comment-body"]}>
        <div className="container mt-4 mb-0 py-4 pb-0 px-0">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="card">
                {data.map((data) => (
                  <Comment
                    key={data._id}
                    handleReporter={handleReporter}
                    cmData={data}
                    cmId={data._id}
                    cmLike={22}
                    cmDislike={50}
                    repData={data.answer}
                    cmImg={Person}
                    cmName={data.username}
                    cmType={"کاربر عادی"}
                    cmCon={data.comment}
                    cmDate={
                      new Date(data.createDate)
                        .toLocaleString("fa-IR")
                        .substr(8, 1) === "،"
                        ? new Date(data.createDate)
                            .toLocaleString("fa-IR")
                            .substr(0, 8)
                        : new Date(data.createDate)
                            .toLocaleString("fa-IR")
                            .substr(0, 9)
                    }
                    cmEmail={data.email}
                  />
                ))}

                {data.length === 0 && (
                  <div style={{ margin: "50px auto 50px", padding: "30px" }}>
                    نظری ثبت نشده است
                  </div>
                )}

                <div
                  className="card-footer py-3 border-0"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex flex-start w-100">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={CurrentUser.profile || Person}
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="textAreaExample"
                        rows="4"
                        style={{ background: "#fff" }}
                        value={text}
                        onChange={handleValue}
                      ></textarea>
                      <label className="form-label" htmlFor="textAreaExample">
                        نظر شما
                      </label>
                    </div>
                  </div>
                  <div className="float-end mt-2 pt-1">
                    <button
                      onClick={handleCommentSend}
                      type="button"
                      className="btn btn-primary btn-sm"
                    >
                      ثبت نظر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default NewsArticleComment;
