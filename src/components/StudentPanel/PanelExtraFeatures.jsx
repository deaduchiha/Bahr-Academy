import React, { useState } from "react";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../screens/StudentPanel/StudentPanel.module.css";

const PanelExtraFeatures = ({
  senOne,
  senTwo,
  senThree,
  picOne,
  picTwo,
  picThree,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className={`col-12 ${styles["middle-extra"]}`}>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xxl-3 d-none d-md-flex justify-content-center">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            calendarClassName={styles["responsive-calendar"]}
            shouldHighlightWeekends
            locale="fa"
            colorPrimary="#088568"
            calendarTodayClassName={styles["custom-today-day"]}
          />
        </div>
        <div className="col-12 col-md-8 col-lg-8 col-xxl-9">
          <Carousel className={`${styles["my-crs"]}`} fade indicators={false}>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles["my-crs-img"]}`}
                src={picOne}
                alt="First slide"
              />
              <Carousel.Caption className={`${styles["my-caption"]}`}>
                <p>{senOne}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles["my-crs-img"]}`}
                src={picTwo}
                alt="Second slide"
              />

              <Carousel.Caption className={`${styles["my-caption"]}`}>
                <p>{senTwo}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles["my-crs-img"]}`}
                src={picThree}
                alt="Third slide"
              />

              <Carousel.Caption className={`${styles["my-caption"]}`}>
                <p>{senThree}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PanelExtraFeatures;
