import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [newsContext, setNewsContext] = useState({ newsList: [] });

  return (
    <NewsContext.Provider value={{ newsContext, setNewsContext }}>
      {props.children}
    </NewsContext.Provider>
  );
};
