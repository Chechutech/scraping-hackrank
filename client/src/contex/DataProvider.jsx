import { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./DataContext";


const URL = "https://scraping-hackrank.onrender.com/api/challenge";

// to run the tests locally if render doesn't work

// const URL = "http://localhost:3000/api/challenge";


export const DataProvider = ({ children }) => {
  const [dataNews, setDataNews] = useState([]);

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      console.log(data);
      setDataNews(data.challenge);
    } catch (error) {
      console.error("Something went wrong with the response", error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <DataContext.Provider value={dataNews}>{children}</DataContext.Provider>
  );
};
