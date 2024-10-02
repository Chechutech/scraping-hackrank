export const extractWords = (text) => {
  const regex = /[a-zA-Z-]+|\([\w\s]+\)|[A-Z]+|HN:/g;
  return text.match(regex);
};

// Filter words and order by comments

export const filterMoreThanFiveWords = (dataNews) => {
  return dataNews
    .filter((news) => {
      const titleLength = extractWords(news.title).length;
      return titleLength > 5;
    })
    .sort((a, b) => {
      const comments_a = parseInt(a.comments);
      const comments_b = parseInt(b.comments);

      if (!isNaN(comments_a) && !isNaN(comments_b)) {
        return comments_b - comments_a;
      }
      if (isNaN(comments_a)) return 1;
      if (isNaN(comments_b)) return -1;
    });
};

//Filter words and order by points

export const filterLessFiveWords = (dataNews) => {
  return dataNews
    .filter((news) => {
      const titleLength = extractWords(news.title).length;

      return titleLength <= 5;
    })
    .sort((a, b) => parseInt(b.points) - parseInt(a.points));
};

export const getAll = (dataNews) => {
  return dataNews;
};
