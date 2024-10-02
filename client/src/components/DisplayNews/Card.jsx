import "./CardNews.css";

export const Card = ({ news }) => {
  return (
    <div className="card-container">
      <p>{news.rank}</p>
      <div className="card-header">
        <h3>{news.title}</h3>
        <div className="card-comments">
          <span>{news.points}</span>
          <span>{news.comments}</span>
        </div>
      </div>
    </div>
  );
};
