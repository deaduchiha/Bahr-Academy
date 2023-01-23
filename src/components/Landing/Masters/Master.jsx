import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Http from "../../../core/services/interceptor/interceptor";
import "aos/dist/aos.css";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Master = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`${MainUrl}employee/getlastteachers`);
      setTeachers(
        data.data.result.filter(
          (m) => m._id === 1 || m._id === 2 || m._id === 6
        )
      );
    };
    dataGetter();
  }, []);

  return (
    <>
      <div
        style={{ height: "fit-content", overflow: "hidden" }}
        className="container "
      >
        <div
          className="row mt-5"
          style={{ textAlign: "center", fontFamily: "est" }}
        >
          <div
            className="col-lg-12"
            style={{ fontFamily: "lale", fontSize: "20px", color: "#004458" }}
          >
            برترین اساتید
          </div>

          {teachers.slice(0, 3).map((teacher) => (
            <Cards
              key={teacher._id}
              className="col-lg-4"
              masterImage={teacher.image}
              masterName={teacher.name}
              masterDes={
                teacher._id === 6
                  ? "دولوپر ارشد ریکت و سرور"
                  : teacher.discription
              }
            />
          ))}

          {/* <Cards
            className="col-lg-4"
            masterImage={nazari}
            masterName="حامد نظری"
            masterDes="مدرس interface design"
          />

         <Cards
            className="col-lg-4"
            masterImage={master1}
            masterName="مهدی اصغری"
            masterDes="مدرس react"
  />*/}
        </div>
      </div>
    </>
  );
};

export default Master;
