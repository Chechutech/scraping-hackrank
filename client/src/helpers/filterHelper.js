export const extractWords = (text) => {
  const regex = /[a-zA-Z-]+|\([\w\s]+\)|[A-Z]+|HN:/g;
  return text.match(regex);
};

export const filterByWordsAmount = (dataNews, amounts_Words) => {

  return dataNews.filter((news)=>{
    const titleLength = extractWords(news.title).length;
    return titleLength == parseInt(amounts_Words)
  })


}

export const orderAscending = ( dataNews, filter_by) => {
  const filteredNews = [...dataNews]

    if (filter_by == "Comments") {
      filteredNews.sort((a, b) => {
        const comments_a = parseInt(a.comments);
        const comments_b = parseInt(b.comments);

        if (!isNaN(comments_a) && !isNaN(comments_b)) {
          return comments_b - comments_a;
        }
        if (isNaN(comments_a)) return 1;
        if (isNaN(comments_b)) return -1;
      });
    } else if (filter_by == "Points") {
      filteredNews.sort((a, b) => parseInt(b.points) - parseInt(a.points));
    }
    return filteredNews
  }
  
export const getAll = (dataNews) => {
  return dataNews;
};
