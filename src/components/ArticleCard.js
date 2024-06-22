import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link to={`/article/${article.title}`}>
        <img src={article.urlToImage} alt={article.title} />
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </Link>
      <FavoriteButton article={article} />
    </div>
  );
}

export default ArticleCard;
