import React, { useState, useEffect, Fragment } from "react";
import styles from "./Navbar/Navbar.module.css";
import "../Landing/OnSupport/OnSupportClaases.css";
import Loggo from "../../assets/images/StudentPanel/aLogo.png";
import Person from "../../assets/images/NewsDetails/person2.png";
import Profile from "../../assets/images/NewsDetails/profile2.png";
import axios from "axios";
import UserRep from "./OnlineSupportComps/UserRep";
import AdminRep from "./OnlineSupportComps/AdminRep";

const OnlineSupport = () => {
  const [allComment, setAllComment] = useState([]);
  const [des, setDes] = useState("");
  const [type, setType] = useState("کاربر");
  const [name, setName] = useState("بازدید کننده");
  const [email, setEmail] = useState("adnanREzaii@gmail.com");
  const [image, setImage] = useState("");
  const [ip, setIp] = useState("");
  const [datee, setDatee] = useState();
  const [repFlag, setRepFlag] = useState("false");
  const [chatFlag, setChatFlag] = useState(0);
  const [notFlag, setNotFlag] = useState(true);
  const [flagg, setFlagg] = useState("user");

  const [adminFlag, setAdminFlag] = useState(true);

  useEffect(() => {
    async function dataGetter() {
      const { data: cmList } = await axios.get("http://localhost:8009/Chat");
      setAllComment(cmList);
      setDatee(new Date().toISOString());
    }
    dataGetter();
  },[]);

  async function dataGetter() {
    const { data: cmList } = await axios.get("http://localhost:8009/Chat");
    setAllComment(cmList);
    setDatee(new Date().toISOString());
  }

  const handleAddComment = async (e) => {
    e.preventDefault();

    const userComment = {
      name,
      email,
      type,
      des,
      image,
      ip,
      datee,
      repFlag,
      flagg,
    };

    const { data: commentListNew } = await axios.post(
      "http://localhost:8009/Chat",
      userComment
    );

    setDes("");

    dataGetter();
  };

  const handleChatOpener = () => {
    if (notFlag === true) {
      document.getElementById("chatNotif").classList.add("welcomeHider");
      setNotFlag(false);
    }
    if (adminFlag === true) {
      document.getElementById("adminSen").classList.add("adminShoww");
      setAdminFlag(false);
    }

    if (chatFlag === 0) {
      document.getElementById("chatBody").classList.remove("hideChatt");
      document.getElementById("chatBody").classList.add("showChatt");
      setChatFlag(1);
    } else if (chatFlag === 1) {
      document.getElementById("chatBody").classList.remove("showChatt");
      document.getElementById("chatBody").classList.add("hideChatt");
      setChatFlag(0);
    }
  };

  return (
    <Fragment>
      <div onClick={handleChatOpener} className={styles.onlineChat}>
        <span id="chatNotif" className={`${styles.welcome}`}>
          سلام, میتونم کمکتونم کنم؟
        </span>
      </div>
      <div className={styles.onlineChat1}>
        <div id="chatBody" className={`${styles.onlineBody}`}>
          <div className={styles.topSec}>
            <img className={styles.loggo} src={Loggo} alt="" />
            <h6>سلام, خوش امدید</h6>
            <h5>همکاران ما 24 ساعته اماده پاسخگویی به سوالات شما هستند.</h5>
          </div>
          <div className={styles.botBody}>
            <div className={styles.answerBody}>
              <form onSubmit={handleAddComment}>
                <button type="submit" className={styles.subb}>
                  <img
                    className={styles.imgAnswer}
                    src={require("../../assets/images/StudentPanel/sendd.png")}
                    alt=""
                  />
                </button>
                <input
                  type="text"
                  className={styles.answerInp}
                  placeholder="پیام خود را وارد کنید ..."
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                />
              </form>
            </div>
            <div id="adminSen" className={`${styles.adminSen}`}>
              <AdminRep text={"سلام چه کمکی از دست تیم اکادمی بر میاد ؟"} />
            </div>

            {allComment
              .filter((m) => m.flagg === "user")
              .map((comment) => (
                <UserRep
                  key={comment.id}
                  userId={comment.id}
                  userImg={Profile}
                  userType={comment.type}
                  userName={comment.name}
                  userDes={comment.des}
                />
              ))}
            {allComment
              .filter((m) => m.flagg === "admin")
              .map((comment) => (
                <div key={comment.id} className={`${styles.adminSen1}`}>
                  <AdminRep text={comment.des} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OnlineSupport;
