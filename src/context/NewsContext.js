import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [userContext, setUserContext] = useState(null);

  return (
    <NewsContext.Provider value={{ userContext, setUserContext }}>
      {props.children}
    </NewsContext.Provider>
  );
};
