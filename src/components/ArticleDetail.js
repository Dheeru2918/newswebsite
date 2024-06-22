import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = '00550a682b22410687119ecf7e40786b';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const decodedUrl = decodeURIComponent(id);
        console.log('Decoded URL:', decodedUrl);
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: new URL(decodedUrl).hostname,
            apiKey: API_KEY,
          },
        });
        const matchedArticle = response.data.articles.find(a => a.url === decodedUrl);
        if (matchedArticle) {
          setArticle(matchedArticle);
        } else {
          console.error('Article not found');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;




