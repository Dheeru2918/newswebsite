import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const API_KEY = '00550a682b22410687119ecf7e40786b';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const params = {
          country: 'us',
          page: page,
          apiKey: API_KEY,
        };

        if (category) {
          params.category = category;
        }

        if (query) {
          params.q = query;
        }

        const response = await axios.get('https://newsapi.org/v2/top-headlines', { params });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, [category, page, query]);

  return (
    <div className="article-list">
      <SearchBar onSearch={setQuery} />
      <CategoryFilter setCategory={setCategory} />
      <div className="articles">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default ArticleList;
