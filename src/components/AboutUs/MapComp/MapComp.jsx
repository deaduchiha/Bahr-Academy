import React from "react";
import MapItems from "./MapItesm";
import styles from "./MapComp.module.css";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const MapComp = (props) => {
  return (
    <>
      <div className={`${styles.map}`}>
        <div className={`${styles.contain}`}>
          <div className={`${styles.mapimg}`}>
            <div
              className={`${styles.information} d-flex justify-content-evenly flex-wrap`}
            >
              <div className={`${styles.mapItem} ${styles.show}`}>
                <MapItems
                  icon={<LocationOnRoundedIcon />}
                  title="آدرس"
                  des="ساری قبل از دانشگاه روزبهان جنب املاک ملایی ، ساختان سپهر ، طبقه اول پژوهشگاه سپهر"
                />
              </div>
              <div className={`${styles.mapItem} ${styles.hide}`}>
                <MapItems
                  icon={<EmailIcon />}
                  title="ایمیل"
                  des="nikzdalireza@gmail.com"
                />
              </div>
              <div className={`${styles.mapItem} ${styles.hide}`}>
                <MapItems
                  icon={<CallIcon />}
                  title="شماره تماس"
                  des="09332965018"
                />
              </div>

              <div className={`${styles.mapItem} ${styles.hide}`}>
                <MapItems
                  icon={<PermContactCalendarIcon />}
                  title="ارتباط با ما"
                  des="instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComp;
