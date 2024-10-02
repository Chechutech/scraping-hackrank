import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contex/DataContext";
import { Card } from "./Card";
import { ButtonMenu } from "../Buttons/ButtonMenu";
import {
  filterLessFiveWords,
  filterMoreThanFiveWords,
  getAll,
} from "../../helpers/filterHelper";
import "./CardNews.css";

export const CardNews = () => {
  const dataNews = useContext(DataContext);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setActive] = useState(null);

  useEffect(() => {
    if (dataNews && dataNews.length > 0) {
      const loader = setTimeout(() => {
        setResult(dataNews);
        setLoading(false);
      }, 1000);
      return () => clearTimeout(loader);
    } else {
      setLoading(true);
    }
  }, [dataNews]);

  const handleGetAll = () => {
    const filteredNews = getAll(dataNews);
    setResult(filteredNews);
    setActive("all");
  };
  const handleFilterLessFiveWords = () => {
    const filteredNews = filterLessFiveWords(dataNews);
    setResult(filteredNews);
    setActive("less");
  };
  const handleFilterMoreThanFiveWords = () => {
    const filteredNews = filterMoreThanFiveWords(dataNews);
    setResult(filteredNews);
    setActive("more");
  };

  return (
    <section className="container">
      <nav className="header-container">
        <ButtonMenu
          handleFilter={handleGetAll}
          textButton={"See All"}
          isActive={isActive === "all"}
        />
        <ButtonMenu
          handleFilter={handleFilterLessFiveWords}
          textButton={"Less than Five Words"}
          isActive={isActive === "less"}
        />
        <ButtonMenu
          handleFilter={handleFilterMoreThanFiveWords}
          textButton={"More than Five Words"}
          isActive={isActive === "more"}
        />
      </nav>

      {loading ? (
        <div className="news-container">Waiting for the news to come...</div>
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
