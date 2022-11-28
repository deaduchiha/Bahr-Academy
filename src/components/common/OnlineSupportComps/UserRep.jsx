import React from "react";
import styles from "../Navbar/Navbar.module.css";

const UserRep = ({ userId, userImg, userType, userName, userDes }) => {
  return (
    <div className={styles.userSen}>
      <div className={`card-body ${styles["com-body2"]}`}>
        <div className="d-flex flex-start align-items-center">
          <img
            className="rounded-circle shadow-1-strong ms-1"
            src={userImg}
            alt="avatar"
            width="23"
            height="23"
          />
          <div className={styles.lineCheck}>
            <h6 className={`fw mb-0 ${styles["comment-name2"]}`}>{userName}</h6>
            <p className={`text-muted small mb-0 ${styles.user}`}>{userType}</p>
          </div>
        </div>

        <p className={`mt-1 mb-0 pb-2 ${styles.matn2}`}>{userDes}</p>
      </div>
    </div>
  );
};

export default UserRep;
