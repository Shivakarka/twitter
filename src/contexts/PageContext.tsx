// contexts/PageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { PageResponse } from "../types/api";
import "../styles/contexts/PageContext.css";

const PageContext = createContext({} as PageResponse);

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({} as PageResponse);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message || "An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="errorMessage">
        <span>Error: {error}</span>
        <div>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    );
  }

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};
