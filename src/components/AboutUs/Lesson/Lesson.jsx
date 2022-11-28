import React from "react";
import styles from "./Lesson.module.css";
import Card from "./Card";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import GlobalPositioningSystem from "../GlobalPositioningSystem";

const Lesson = (props) => {
  return (
    <>
      <div className={`mt-4`}>
        <div className="row">
          <div className={`col-lg-6 col-sm-12 ${styles.goal}`}>
            <Card
              styles={{ background: "#e9e9e9c9" }}
              icon={<AccessibilityNewIcon />}
              des="برخورداری از آموزش های بروز بدون نیاز به حضور در کلاس، از همه
                  جای ایران و جهان."
            />
            <Card
              icon={<AccountBalanceIcon />}
              des="ما به مشتریانمون به چشم یه انسان نگاه می‌کنیم و بهشون احترام میزاریم، مهم رضایتشونه"
            />
            <Card
              icon={<NetworkCheckIcon />}
              des=" سرعت اینترنت متوسط هم شدنی هست
                  درست مثلِ یک رویداد حضوری و با هزینه‌ی کمتر"
            />
            <Card
              icon={<NetworkCheckIcon />}
              des=" سرعت اینترنت متوسط هم شدنی هست
                  درست مثلِ یک رویداد حضوری و با هزینه‌ی کمتر"
            />
            <Card
              icon={<AccountBalanceIcon />}
              des="ما به مشتریانمون به چشم یه انسان نگاه می‌کنیم و بهشون احترام میزاریم، مهم رضایتشونه"
            />
            <Card
              icon={<AccessibilityNewIcon />}
              des="برخورداری از آموزش های بروز بدون نیاز به حضور در کلاس، از همه
                  جای ایران و جهان."
            />
          </div>
          <div className={`col-lg-6 col-sm-12 ${styles.map}`}>
            <GlobalPositioningSystem
              mapWidth={100}
              widthType={"%"}
              mapHeight={100}
              heightType={"%"}
              mZoom={17}
              mapLoc={[36.59745364275355, 53.064715695927276]}
              mapMark={[36.59745364275355, 53.064715695927276]}
            />
            <div className={styles.address}>
              ساری قبل از دانشگاه روزبهان جنب املاک ملایی ، ساختان سپهر ، طبقه
              اول پژوهشگاه سپهر
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
