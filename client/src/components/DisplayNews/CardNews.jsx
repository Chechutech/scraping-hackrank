import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contex/DataContext";
import { useFiltersNews } from "../../hooks/useFiltersNews";
import {
  filterByWordsAmount,
  orderAscending,
} from "../../helpers/filterHelper";
import { Card } from "./Card";
import "./CardNews.css";

export const CardNews = () => {
  const dataNews = useContext(DataContext);
  const { filters } = useFiltersNews();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataNews?.length) {
      let newfilters = [...dataNews];

      if (filters) {
        if (filters.amounts_Words) {
          newfilters = filterByWordsAmount(newfilters, filters.amounts_Words);
        }
        if (filters.filter_by) {
          newfilters = orderAscending(newfilters, filters.filter_by);
        }
      }
      setResult(newfilters);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataNews, filters]);

  return (
    <section className="container">
      {loading ? (
        <div className="news-container">Waiting for news to update...</div>
      ) : result.length === 0 ? (
        <div>There are no news with that criteria.</div>
      ) : (
        <section className="news-container">
          {result.map((news) => (
            <Card key={news.rank} news={news} />
          ))}
        </section>
      )}
    </section>
  );
};
