'use client';
import { useEffect, useState } from 'react';

import NewsList from '@/components/news-list';

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [news, setNews] = useState();
  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const response = await fetch('http://localhost:8080/news');
      if (!response.ok) {
        setError('Fail to fetch news!');
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
      console.log('✌️news --->', news);
    };
    fetchNews();
  }, []);
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && newsContent}
    </>
  );
}
