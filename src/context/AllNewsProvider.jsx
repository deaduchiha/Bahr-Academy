import React, { useState, createContext, useEffect } from "react";
import Http from "../core/services/interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const AllNewsContext = createContext();

const AllNewsProvider = ({ children }) => {
  const [alll, setAlll] = useState([]);
  const [newsId, setNewsId] = useState();

  const handleSetNewsId = (id) => {
    setNewsId(id);
  };

  useEffect(() => {
    const dataGetter = async () => {
      const data = await Http.get(`${MainUrl}news`);
      setAlll(data.data.result);
    };
    dataGetter();
  }, []);
  return (
    <AllNewsContext.Provider
      value={{
        AllNews: alll.filter((news) => news.category === "news"),
        AllArticle: alll.filter((article) => article.category === "article"),
        Alll: alll,
        NewsIdSetter: handleSetNewsId,
        currentId: newsId,
      }}
    >
      {children}
    </AllNewsContext.Provider>
  );
};

export default AllNewsProvider;
