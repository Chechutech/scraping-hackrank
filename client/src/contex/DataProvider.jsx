import { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./DataContext";
import { useSearchParams } from "react-router-dom";


const URL = "https://scraping-hackrank.onrender.com/api/challenge";



// const URL = "http://localhost:3000/api/challenge";


export const DataProvider = ({ children }) => {
  const [dataNews, setDataNews] = useState([]);
  const [searchParams] = useSearchParams();

  const fetchDataFromServer = async (filters) => {
    try {
      const response = await axios.get(URL, {params: filters});
      const data = response.data;
      console.log(data);     
      setDataNews(data.challenge);
    } catch (error) {
      console.error("Something went wrong with the response", error);
    }
  };
  
  useEffect(() => {
         
    const urlParamsFilters = searchParams.get("filters")
    let filterValues ={}

    if (urlParamsFilters){
      const filtersValues = JSON.parse(urlParamsFilters)

 
    if (filtersValues.filter_by) {
     
      filterValues.filter_by = filtersValues.filter_by;
    }
    if (filtersValues.amounts_Words) {
    
      filterValues.amounts_Words = filtersValues.amounts_Words;

    }

 

    }    

    fetchDataFromServer(filterValues);
  }, [searchParams]); 

  return (
    <DataContext.Provider value={dataNews}>{children}</DataContext.Provider>
  );
};
