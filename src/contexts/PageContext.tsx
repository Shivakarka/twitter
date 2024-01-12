// contexts/PageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { PageResponse } from "../types/api";

const PageContext = createContext({} as PageResponse);

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({} as PageResponse);

  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};
