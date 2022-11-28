import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Http from "../../core/services/interceptor/interceptor";
import { setItem } from "../../core/services/storage/storage";
import { IsLoggedContext } from "../../context/LoggedInCheckProvider";

const AdminAuth = () => {
  const isLogged = useContext(IsLoggedContext);

  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    setItem("token", token);

    const decoded = jwt_decode(token);
    const EmpId = decoded._id;

    const dataGetter = async () => {
      const data = await Http.get(
        `https://invalid-js.herokuapp.com/api/employee/${EmpId}`
      );
      setItem("user", JSON.stringify(data.data.result));

      isLogged.studentLoad(data.data.result);
    };
    dataGetter();

    isLogged.changeIsLogged(true);
    navigate("/");
  });

  return null;
};

export default AdminAuth;
