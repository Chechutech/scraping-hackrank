import axios from "axios";
import { load } from "cheerio";

export const fetchInformation = async (url) => {
  try {
    const { data } = await axios.get(url);

    const $ = load(data);
    const newResults = [];

    $("tr.athing").each((i, element) => {
      const numberRank = $(element).find(".rank").text().trim();

      const titleRank = $(element).find("span.titleline > a").text().trim();
      const nextRow = $(element).next("tr").find("td.subtext");
      const pointsRank = nextRow.find("span.score").text().trim();
      const commentsRank = nextRow.find("a").last().text().trim();

      newResults.push({
        rank: numberRank,
        title: titleRank,
        points: pointsRank,
        comments: commentsRank,
      });
    });

    return newResults;
  } catch (error) {
    console.log("erorr", error);
  }
};


