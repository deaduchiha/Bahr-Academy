import React from "react";
import styles from "../Navbar/Navbar.module.css";

const AdminRep = ({ text }) => {
  return (
    <div className={`card-body ${styles["com-body"]}`}>
      <div className="d-flex flex-start align-items-center">
        <img
          className="rounded-circle shadow-1-strong me-1"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
          //src={Person}
          alt="avatar"
          width="23"
          height="23"
        />
        <div className={styles.lineCheck}>
          <h6 className={`fw mb-0 ${styles["comment-name"]}`}>
            {"بخش پشتیبانی"}
          </h6>
          <p className={`text-muted small mb-0 ${styles.admin}`}>{"ادمین"}</p>
        </div>
      </div>

      <p className={`mt-1 mb-0 pb-2 ${styles.matn}`}>{text}</p>
    </div>
  );
};

export default AdminRep;
