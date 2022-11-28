import React from "react";
import styles from "./Members.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const MemberCard = (props) => {
  return (
    <div>
      <div className={`row ${styles.member}`}>
        <div className={`card p-0 ${styles.programmers} `}>
          <div className={`card-image ${styles.progImage}`}>
            <img src={props.image} alt="Programmer Image" />
          </div>
          <div
            className={`card-content d-flex flex-column align-items-center ${styles.progCont}`}
          >
            <h4 className="pt-2">{props.name}</h4>
            <h5>{props.ability}</h5>
            <ul
              className={`${styles.socialIcons} d-flex justify-content-center`}
            >
              <li>
                <InstagramIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
